"use client";

import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { api } from "~/lib/utils";

type FoodItem = {
  title: string;
  tag: string;
  discount: string;
  image: string;
};

const categories = [
  "Offers",
  "Burgers",
  "Fries",
  "Snacks",
  "Salads",
  "Cold drinks",
  "Happy Meal®",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Orbit®",
];

export default function MenuNav() {
  const [foodItems, setFoodItems] = useState<FoodItem[]>([]);

  const getfoodcard = async () => {
    try {
      const res = await api.get("/foodItems");
      console.log("response", res.data);
      setFoodItems(res.data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };

  useEffect(() => {
    getfoodcard();
  }, []);

  const [activeCategory, setActiveCategory] = useState("Offers");

  return (
    <div className="bg-white py-10">
      {/* Scrollable Categories */}
      <div className="flex gap-8 overflow-x-auto bg-[#F3F3F3] rounded-xl py-6 px-4 whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`text-lg font-semibold px-6 py-2 rounded-full ${
              activeCategory === category ? "bg-black text-white" : "text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="mt-6 flex flex-wrap gap-[15px]">
        {foodItems.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[12px] overflow-hidden shadow-md group"
            style={{ width: "488px", height: "325px", opacity: 1 }}
          >
            {/* Discount Badge */}
            <div
              className="absolute bg-[#0A1026] text-white text-sm font-bold z-20 flex items-center justify-center"
              style={{
                width: "88px",
                height: "66px",
                top: "1px",
                right: "16px",
                borderBottomRightRadius: "12px",
                borderBottomLeftRadius: "12px",
              }}
            >
              {item.discount}
            </div>

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay with Text */}
            <div className="absolute inset-0 z-10 bg-[linear-gradient(245.7deg,_rgba(255,_255,_255,_0)_0.94%,_rgba(3,_8,_31,_0.19)_51.68%,_rgba(3,_8,_31,_0.89)_87.9%)] flex flex-col justify-end px-5 pb-5">
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

            {/* Plus Button */}
            <div className="absolute bottom-0 right-0 z-20">
              <div className="w-[97px] h-[89px] bg-white/80 rounded-tl-[40px] flex items-center justify-center backdrop-blur-sm">
                <div className="w-[40px] h-[40px] rounded-full bg-[#0A1026] flex items-center justify-center">
                  <FaPlus className="text-white text-base" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
