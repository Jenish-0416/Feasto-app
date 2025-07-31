"use client";

import React from "react";
import { useState, useEffect } from "react";
import { api } from "~/lib/utils";

type FoodCategoryCard = {
  image: string;
  alt: string;
  title: string;
  description: string;
};

export default function CategoryCards() {
  const [cards, setCards] = useState<FoodCategoryCard[]>([]);

  const getCards = async () => {
    try {
      const res = await api.get("/cards");
      setCards(res.data);
    } catch (err) {
      console.error("Failed to fetch cards", err);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <>
      {/* Mobile only */}
      <div className="md:hidden w-full  py-  bg-[#D9D9D980] ">
        <h2 className="text-xl font-extrabold text-black mb-5">
          Order.UK’s Popular Categories
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col min-h-[190px]"
            >
              {/* Image with yellow bg for first card */}
              <div
                className={
                  // idx === 0
                  //   ? " flex items-center justify-center w-full h-[110px]"
                  "w-full  flex items-center justify-center bg-white"
                }
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="object-cover w-[189px] h-[161px] "
                />
              </div>
              <div className="bg-gray-50 flex flex-col justify-center items-start px-4 py-3 flex-1">
                <span
                  className={
                    idx === 0
                      ? "text-[#FC8A06] font-bold text-base mb-1"
                      : "text-[#FC8A06] font-bold text-base mb-1"
                  }
                >
                  {card.title}
                </span>
                <span className="text-black text-base font-normal">
                  {card.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Desktop/Tablet only: original layout */}
      <div className="hidden md:flex flex-col items-start justify-center px-4 md:px-8">
        <h2 className="text-xl md:text-2xl lg:text-[28px] font-bold text-black mb-6 md:mb-8">
          Order.uk Popular Categories <span className="text-[#FC8A06]">🤩</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4 w-full">
          {cards.map((card: FoodCategoryCard, index: number) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300 rounded-xl border border-gray-200"
            >
              <img
                src={card.image}
                alt={card.alt}
                className="object-cover w-full h-20 sm:h-24 md:h-28 lg:h-[203px] rounded-t-xl"
              />
              <div className="bg-gray-50 flex flex-col justify-center items-start px-2 md:px-4 py-2 md:py-3 h-16 md:h-[63px] w-full">
                <h3 className="text-xs md:text-sm lg:text-base font-bold text-black line-clamp-1">
                  {card.title}
                </h3>
                <p className="text-xs text-[#FC8A06] font-medium line-clamp-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
