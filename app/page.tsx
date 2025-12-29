import Hero from "@/components/Home/Hero/Hero";
import React from "react";
import Popular from "@/components/Home/Popular/Popular";

const HomePage= () => {
  return (
    <div className="Homepage bg-white text-black text-5xl">
      <Hero />
      <Popular />
    </div>
  );
}

export default HomePage;