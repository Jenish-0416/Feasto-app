"use client";

import React from "react";

const cards = [
  {
    image: "/assests/burger.png",
    alt: "Burger",
    title: "Burgers & Fast food",
    description: "21 Restaurants",
  },
  {
    image: "/assests/salad.png",
    alt: "Salad",
    title: "Salads",
    description: "31 Restaurants",
  },
  {
    image: "/assests/pasta.png",
    alt: "Pasta",
    title: "Pasta & Casuals",
    description: "4 Restaurants",
  },
  {
    image: "/assests/pizza.png",
    alt: "Pizza",
    title: "Pizzas",
    description: "32 Restaurants",
  },
  {
    image: "/assests/breakfast.png",
    alt: "Breakfast",
    title: "Breakfast",
    description: "3 Restaurants",
  },
  {
    image: "/assests/soup.png",
    alt: "Soup",
    title: "Soups",
    description: "32 Restaurants",
  },
];

export default function CategoryCards() {
  return (
    <div className="flex flex-col items-start justify-center  ">
      <h2 className="text-[28px] font-bold text-black mb-8">
        Order.uk Popular Categories <span className="text-[#FC8A06]">🤩</span>
      </h2>
      <div className="flex justify-between gap-5 overflow-x-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            style={{
              width: "238px",
              height: "266px",
              transform: "rotate(0deg)",
              opacity: 1,
              top: "1463px",
              left: "100px",
              borderRadius: "12px",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: "#e5e7eb",
            }}
          >
            <img
              src={card.image}
              alt={card.alt}
              className="object-cover"
              style={{
                width: "238px",
                height: "203px",
                transform: "rotate(0deg)",
                opacity: 1,
                top: "1463px",
                left: "100px",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            />

            <div
              className="bg-gray-50 flex flex-col justify-center items-start px-4"
              style={{
                width: "238px",
                height: "63px",
                transform: "rotate(0deg)",
                opacity: 1,
                top: "1463px",
                left: "100px",
                borderRadius: "12px",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: "#e5e7eb",
              }}
            >
              <h3 className="text-[16px] font-bold text-black">{card.title}</h3>
              <p className="text-sm text-[#FC8A06] font-medium">
                {card.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
