"use client";

import React from "react";
import { cards, type FoodCategoryCard } from "../lib/constants";

export default function CategoryCards() {
  return (
    <div className="flex flex-col items-start justify-center  ">
      <h2 className="text-[28px] font-bold text-black mb-8">
        Order.uk Popular Categories <span className="text-[#FC8A06]">🤩</span>
      </h2>
      <div className="flex gap-4 sm:gap-5 overflow-x-auto pb-2 w-full">
        {cards.map((card: FoodCategoryCard, index: number) => (
          <div
            key={index}
            className="bg-white flex-shrink-0 overflow-hidden shadow-md hover:shadow-xl transition duration-300 rounded-xl border border-gray-200"
            style={{ minWidth: "180px", maxWidth: "240px", width: "70vw" }}
          >
            <img
              src={card.image}
              alt={card.alt}
              className="object-cover w-full h-[120px] sm:h-[160px] md:h-[203px] rounded-t-xl"
            />
            <div className="bg-gray-50 flex flex-col justify-center items-start px-4 py-3 h-[60px] sm:h-[63px] w-full">
              <h3 className="text-base sm:text-lg font-bold text-black">
                {card.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#FC8A06] font-medium">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
