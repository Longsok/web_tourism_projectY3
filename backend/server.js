require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Create MySQL connection pool using the Railway URL
const pool = mysql.createPool(process.env.DATABASE_URL);

// API endpoint to get popular places
app.get("/api/popular", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM places"); // your table name
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
