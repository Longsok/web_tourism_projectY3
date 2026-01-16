import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { pool } from "@/lib/db";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    // Local login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const [rows]: any = await pool.query("SELECT * FROM users WHERE email = ?", [
          credentials?.email,
        ]);

        const user = rows[0];
        if (!user) return null;

        const isValid = user.password
          ? await bcrypt.compare(credentials!.password, user.password)
          : false;

        if (!isValid) return null;

        return {
          id: user.id,
          name: user.full_name,
          email: user.email,
          isAdmin: user.is_admin,
        };
      },
    }),

    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.isAdmin = user.isAdmin || 0;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
