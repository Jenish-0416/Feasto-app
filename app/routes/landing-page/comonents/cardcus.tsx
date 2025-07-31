"use client";

import React, { useEffect, useState } from "react";
import { api } from "~/lib/utils";

type cardItem = {
  id: number;
  image: string;
  discount: string;
  title: string;
  tag: string;
};

const categories = ["Pizza & Fast Food", "Vegan", "Sushi", "Others"];

export default function FoodCardGrid() {
  const [jobs, setJobs] = useState<cardItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const getfoodcard = async () => {
    try {
      const res = await api.get("/cardItems");
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };

  useEffect(() => {
    getfoodcard();
  }, []);

  return (
    <>
      {/* Mobile only */}
      <div className="md:hidden py-8 px-2 w-full">
        {/* Heading and Dropdown in a row */}
        <div className="flex items-center justify-between gap-2 mb-6">
          <h1 className="text-[16px] font-extrabold whitespace-nowrap">
            Up to -40% Discount Offers{" "}
            <span role="img" aria-label="party">
              🎊
            </span>
          </h1>
          {/* Compact Dropdown */}
          <div className="relative w-50">
            <button
              className="flex items-center px-4 py-2 rounded-full border border-black text-sm font-medium bg-white shadow min-w-[140px]"
              onClick={() => setDropdownOpen((v) => !v)}
            >
              <span className="truncate max-w-[70px]">{selectedCategory}</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow z-10 min-w-[140px]">
                {categories.map((cat) => (
                  <div
                    key={cat}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm ${
                      cat === selectedCategory ? "font-bold text-[#FC8A06]" : ""
                    }`}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setDropdownOpen(false);
                    }}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Slider/Carousel */}
        <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar -mx-2 px-2">
          {jobs.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-[260px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0 flex flex-col"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="absolute top-3 right-3 bg-[#0A1026] text-white text-base font-bold px-3 py-1 rounded-xl">
                  {item.discount}
                </div>
              </div>
              <div className="p-4">
                <span className="text-[#FC8A06] text-sm font-semibold block mb-1">
                  Restaurant
                </span>
                <h2 className="text-black text-base font-extrabold leading-tight mb-0">
                  {item.title}
                </h2>
                <div className="text-[#232323] text-sm font-medium mt-1">
                  {item.tag}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop/Tablet only: original layout */}
      <div className="hidden md:block">
        {/* Heading and Filters */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 px-4 md:px-12 min-h-[80px]">
          <h1 className="text-2xl md:text-4xl font-bold">
            Up to -40% 🎊 Order.uk exclusive deals
          </h1>

          <div className="flex flex-wrap gap-2 md:gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-5 py-2 rounded-full text-black font-medium border border-transparent hover:border-[#FC8A06] hover:text-[#FC8A06] transition-colors duration-200"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 justify-center px-[1px]">
          {jobs.map((item, index) => (
            <div
              key={index}
              className="relative rounded-[12px] overflow-hidden shadow-md group"
              style={{ width: "488px", height: "325px", opacity: 1 }}
            >
              <div
                className="absolute bg-[#0A1026] text-white text-sm font-bold z-10 flex items-center justify-center"
                style={{
                  width: "88px",
                  height: "66px",
                  transform: "rotate(0deg)",
                  opacity: 1,
                  top: "1px",
                  right: "16px",
                  borderBottomRightRadius: "12px",
                  borderBottomLeftRadius: "12px",
                }}
              >
                {item.discount}
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent flex flex-col justify-end px-5 pb-5 z-10">
                <span className="text-[#FC8A06] text-sm font-medium mb-1">
                  {item.tag}
                </span>
                <h2
                  className="text-white text-xl font-bold leading-tight"
                  style={{
                    width: "256px",
                    height: "63px",
                    transform: "rotate(0deg)",
                    opacity: 1,
                  }}
                >
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
