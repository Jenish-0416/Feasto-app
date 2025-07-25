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

const categories = ["Vegan", "Sushi", "Pizza & Fast food", "others"];

export default function FoodCardGrid() {


  const [jobs, setJobs] = useState<cardItem[]>([]);

  const getfoodcard = async () => {
    try {
      const res = await api.get("/cardItems");
      console.log("response", res.data);
      setJobs(res.data);
    } catch (err) {
      console.error("Failed to fetch jobs", err);
    }
  };

  useEffect(() => {
    getfoodcard();
  }, []);

  return (
    <div className=" py-12 ">
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

      {/* Grid of Cards */}
      <div className="flex flex-wrap gap-3 justify-center px-[1px]">
        {jobs.map((item, index) => (
          <div
            key={index}
            className="relative rounded-[12px] overflow-hidden shadow-md group"
            style={{ width: "488px", height: "325px", opacity: 1 }}
          >
            {/* Discount Badge */}
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

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
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
  );
}
