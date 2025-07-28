import React from "react";

const stats = [
  { value: "546+", label: "Registered Riders" },
  { value: "789,900+", label: "Orders Delivered" },
  { value: "690+", label: "Restaurants Partnered" },
  { value: "17,457+", label: "Food items" },
];

export default function Statesoverview() {
  return (
    <div className="bg-[#FC8A06] text-white rounded-xl p-4 md:p-6 w-full mx-auto shadow-lg">
      {/* Mobile View: Vertical layout with dividers */}
      <div className="flex flex-col md:hidden">
        {stats.map((stat, index) => (
          <div key={index} className="text-center py-3 md:py-4">
            <div className="text-2xl md:text-4xl font-semibold mb-1">
              {stat.value}
            </div>
            <div className="text-sm md:text-[15px] font-medium">
              {stat.label}
            </div>
            {index < stats.length - 1 && (
              <hr className="border-white border-opacity-40 mt-3 md:mt-4" />
            )}
          </div>
        ))}
      </div>

      {/* Desktop View: Horizontal layout */}
      <div className="hidden md:flex justify-between text-center">
        {stats.map((stat, index) => (
          <div key={index} className="w-1/4 px-2 md:px-4 py-4 md:py-6">
            <div className="text-2xl lg:text-4xl font-semibold mb-1">
              {stat.value}
            </div>
            <div className="text-sm lg:text-[16px] font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
