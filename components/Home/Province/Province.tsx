"use client";
import React, { useRef } from "react";
import "./Province.css";

interface ProvinceCardProps {
  name: string;
  imageUrl: string;
}

const provinces: ProvinceCardProps[] = [
  { name: "Phnom Penh", imageUrl: "https://www.indochinavoyages.com/wp-content/uploads/2024/02/phnom-penh-independent-station-by-night-1200x900.jpg" },
  { name: "Kampong Cham", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxOObrenlqoUF8kEyseqfamu_F_sRWivzAQ&s" },
  { name: "Siem Reap", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM_q3Jd1JwAlDDmuNQxumeRan_KMrrXDS7eQ&s" },
  { name: "Koh Kong Province", imageUrl: "https://i0.wp.com/www.cambodialifestyle.com/wp-content/uploads/2024/04/Koh-Kong3.jpg?fit=1024%2C722&ssl=1" },
  { name: "Steung Treng Province", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3X58ULIDGZp7INoAYsFweudado0CTMz5rA&s" },
  { name: "Kampot Province", imageUrl: "https://faidaily.wordpress.com/wp-content/uploads/2018/07/duren-kompot.jpg?w=825" },
  // Add more provinces to reach 25
];

const Province: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="province-section container my-8 relative">
      <h2 className="px-1 mb-4 text-xl font-bold">25 City-Provinces of Cambodia</h2>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-2 z-10 hover:bg-gray-100"
      >
        &#8594;
      </button>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollRef}
        className="province-scroll-container"
      >
        {provinces.map((province) => (
          <div
            key={province.name}
            className="province-card"
          >
            <div className="province-img-wrapper">
              <img
                src={province.imageUrl}
                className="province-img"
                alt={province.name}
              />
            </div>
            <div className="province-name">{province.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Province;
