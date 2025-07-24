import React from "react";

const stats = [
  { value: "546+", label: "Registered Riders" },
  { value: "789,900+", label: "Orders Delivered" },
  { value: "690+", label: "Restaurants Partnered" },
  { value: "17,457+", label: "Food items" },
];

export default function Statesoverview() {
  return (
    <div className="bg-[#FC8A06] items-center text-white px-right-6  py-10 shadow-lg rounded-xl ">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-center">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/2 md:w-1/4 py-4 px-2">
            <span className="text-5xl block mb-2">{stat.value}</span>
            <span className="text-lg md:text-xl font-semibold">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
