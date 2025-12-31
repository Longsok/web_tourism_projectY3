import Hero from "@/components/Home/Hero/Hero";
import React from "react";
import Popular from "@/components/Home/Popular/Popular";
import Category from "@/components/Home/Category/Category";
import Province from "@/components/Home/Province/Province";

const HomePage= () => {
  return (
    <div className="Homepage bg-white text-black text-5xl">
      <Hero />
      <Popular />
      <Category />
      <Province />
    </div>
  );
}

export default HomePage;