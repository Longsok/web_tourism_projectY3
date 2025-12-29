"use client";
import React from "react";
import { Place, popularPlaces } from "../../../data/popularPlaces";

const Popular = () => {
  return (
    <div className="popular_place container my-8">
      <h2 className="m-3 p-3 text-xl font-bold">
        Popular Destinations in Cambodia
      </h2>

      <div className="container">
        <div className="row g-4">
          {popularPlaces.map((place: Place) => (
            <div key={place.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="popular-card card h-100 fade-in shadow-lg rounded overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                
                {/* Image container with fixed height */}
                <div className="h-40 md:h-48 overflow-hidden">
                  <img
                    src={place.image}
                    className="w-full h-full object-cover rounded-t transition-transform duration-300 hover:scale-110"
                    alt={place.title}
                  />
                </div>

                {/* Card content */}
                <div className="card-body p-3">
                  <h5 className="card-title font-bold text-sm">{place.title}</h5>
                  <h6 className="text-[10px] text-gray-500 mb-1">{place.location}</h6> 
                  <p className="card-text text-xs">{place.description}</p>
                  <a
                    href={place.link}
                    className="btn bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1 rounded mt-2 inline-block transition-all"
                  >
                    Detail →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
