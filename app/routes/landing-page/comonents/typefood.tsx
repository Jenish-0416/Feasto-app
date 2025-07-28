"use client";

import React from "react";
import { useState } from "react";
import { api } from "~/lib/utils";
import { useEffect } from "react";
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
      console.log("response", res.data);
      setCards(res.data);
    } catch (err) {
      console.error("Failed to fetch cards", err);
    }
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="flex flex-col items-start justify-center px-4 md:px-8">
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
  );
}
