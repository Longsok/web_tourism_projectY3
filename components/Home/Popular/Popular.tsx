"use client";
import React, { useEffect, useRef, useState } from "react";

type Place = {
  id: number;
  name: string;
  location: string;
  category: string;
  image?: string;
};

const Popular = () => {
  const [places, setPlaces] = useState<Place[]>([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/places")
      .then((res) => res.json())
      .then((data) => setPlaces(Array.isArray(data) ? data : []))
      .catch((err) => {
        console.error("FETCH ERROR:", err);
        setPlaces([]);
      })
      .finally(() => setLoading(false));
  }, []);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (loading) return <p className="text-center my-10">Loading...</p>;
  if (places.length === 0) return <p className="text-center my-10">No places found.</p>;

  return (
    <div className="popular_place container my-8 relative">
      <h2 className="px-1 mb-4 text-xl font-bold">Popular Destinations in Cambodia</h2>

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
        className="flex overflow-x-auto space-x-4 py-3 scrollbar-hide scroll-smooth"
      >
        {places.map((place) => (
          <div
            key={place.id}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={place.image || "/placeholder.jpg"}
                className="w-full h-full object-cover"
                alt={place.name}
              />
            </div>

            <div className="p-3">
              <h5 className="font-bold text-sm">{place.name}</h5>
              <p className="text-xs text-gray-500">{place.location}</p>
              <p className="text-xs text-gray-400">{place.category}</p>
              <button className="mt-2 text-xs text-blue-500 hover:underline">
                See Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
