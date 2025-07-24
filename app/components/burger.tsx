"use client";

import React from "react";
import { FaPlus } from "react-icons/fa";

const burgers = [
  {
    title: "Royal Cheese Burger with extra Fries",
    description: "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium",
    price: "GBP 23.10",
    image: "/assests/burger1.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "/assests/burger2.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "/assests/burger3.svg",
  },
  {
    title: "The classics for 3",
    description: "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drink",
    price: "GBP 23.10",
    image: "/assests/burger4.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™,  1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drink",
    price: "GBP 23.10",
    image: "/assests/burger5.svg",
  },
  {
    title: "The classics for 3",
    description:
      "1 McChicken™, 1 Big Mac™, 1 Royal Cheeseburger, 3 medium sized French Fries , 3 cold drinks",
    price: "GBP 23.10",
    image: "/assests/burger6.svg",
  }
  // Add more as needed
];

export default function Burger() {
  return (
    <div className="bg-white py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Burgers</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {burgers.map((item, index) => (
          <div
            key={index}
            className={`flex justify-between items-center bg-white rounded-xl shadow-md overflow-hidden relative hover:shadow-lg transition-shadow duration-200 border ${
              index === 4 ? "border-" : ""
            }`}
          >
            {/* Left side - Text */}
            <div className="p-10 flex-1">
              <h3 className="text-lg font-semibold text-black mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 mb-3">{item.description}</p>
              <p className="font-bold text-[#0A1026]">{item.price}</p>
            </div>

            {/* Right side - Image */}
            <div className="relative w-[180px] h-[180px] flex-shrink-1 rounded-xl rounded-br-xl overflow-hidden right-5">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />

              {/* White corner with + icon */}
              <div className="absolute bottom-0 right-0">
                <div className="w-[70px] h-[70px] bg-white/80 rounded-tl-[30px] flex items-center justify-center backdrop-blur-sm">
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
