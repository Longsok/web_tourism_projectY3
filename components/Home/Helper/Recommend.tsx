"use client";
import React, { useState } from "react";
import { FaMap } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const tourismTypes = ["Nature", "Beach", "Historical", "Culture", "Adventure"];

const Recommend = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [tourismType, setTourismType] = useState<string>("");

  return (
    <div className="relative mx-auto w-[90%] max-w-[360px] bg-white/20 backdrop-blur-md rounded-xl p-4 grid grid-cols-1 gap-3 mt-4 sm:mt-12 shadow-lg border border-white/30">
      <h5 className="text-center font-semibold text-white mb-2">Where do you want to Travel?</h5>
      {/* Row 1: Location & Type */}
      <div className="grid grid-cols-2 gap-2">
        {/* Location */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center space-x-1 mb-1">
            <FaMap className="w-6 h-6 md:w-4 md:h-4 text-blue-400" />
            <p className="text-xs font-medium mb-0">Location</p>
          </div>
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full text-[8px] placeholder:text-[8px] outline-none border-none rounded px-2 py-1 text-gray-800 bg-white/90 leading-tight"
          />
        </div>

        {/* Type of Tourism */}
        <div className="flex flex-col gap-1">
          {/* Added a mt to align text with the Location icon row height */}
          <p className="text-xs font-medium mb-0 md:mt-0.5">Type of Place</p>
          <select
            value={tourismType}
            onChange={(e) => setTourismType(e.target.value)}
            className="w-full text-[8px] bg-white/90 text-gray-800 rounded px-2 py-1 outline-none"
          >
            <option value="">Select type</option>
            {tourismTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Row 2: Start & End Dates */}
      <div className="grid grid-cols-2 gap-2">
        {/* Start Date */}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium mb-0">Start Date</p>
          <DatePicker
            selected={startDate}
            onChange={(date: Date | null) => setStartDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="Start Date"
            // FIX: Added wrapperClassName to force equal width
            wrapperClassName="w-full"
            className="w-full text-[8px] px-2 py-1 rounded bg-white/90 outline-none text-gray-800"
          />
        </div>

        {/* End Date */}
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium mb-0">End Date</p>
          <DatePicker
            selected={endDate}
            onChange={(date: Date | null) => setEndDate(date)}
            dateFormat="MM/dd/yyyy"
            placeholderText="End Date"
            // FIX: Added wrapperClassName to force equal width
            wrapperClassName="w-full"
            className="w-full text-[8px] px-2 py-1 rounded bg-white/90 outline-none text-gray-800"
          />
        </div>
      </div>

      {/* Row 3: Submit Button */}
      <div className="flex justify-center mt-2">
        <button
          type="submit"
          className="w-full h-7 bg-[#112340] hover:bg-[#1a355e] text-white text-[8px] font-bold rounded transition-all uppercase tracking-normal"
        >
          See Your Trip Plan
        </button>
      </div>
    </div>
  );
};

export default Recommend;