"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";

const drinks = [
    {
        title: "Royal Cheese Burger with extra Fries",
        description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
        price: "GBP 23.10",
        image: "public/assests/drink1.svg",
      },
      {
        title: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "GBP 23.10",
        image: "public/assests/drink2.svg",
      },
      {
        title: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "GBP 23.10",
        image: "public/assests/drink3.svg",
      },
      {
        title: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "GBP 23.10",
        image: "public/assests/drink4.svg",
      },
      {
        title: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "GBP 23.10",
        image: "public/assests/drink5.svg",
      },
      {
        title: "The classics for 3",
        description:
          "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
        price: "GBP 23.10",
        image: "public/assests/drink6.svg",
      },
];

export default function Drinks() {
  return (
    <div className="bg-white py-10 px-6">
      <h2 className="text-4xl font-extrabold text-[#ff7a00] mb-8">Drinks</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {drinks.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white rounded-2xl shadow-lg overflow-hidden transition duration-200 border border-gray-200 hover:shadow-xl"
          >
            {/* Left: Text */}
            <div className="p-5 flex-1">
              <h3 className="text-lg font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{item.description}</p>
              <p className="font-bold text-[#0A1026]">{item.price}</p>
            </div>

            {/* Right: Image with corner icon */}
            <div className="relative w-[160px] h-[160px] flex-shrink-0 rounded-tr-2xl rounded-br-2xl overflow-hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 right-0">
                <div className="w-[50px] h-[50px] bg-white/80 rounded-tl-[30px] flex items-center justify-center backdrop-blur-md">
                  <div className="w-8 h-8 bg-[#0A1026] rounded-full flex items-center justify-center">
                    <FaPlus className="text-white text-xs" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
