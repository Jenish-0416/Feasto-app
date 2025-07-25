"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const pizzaOptions = [
  { name: "Margherita", image: "/assests/poppizza1.svg" },
  { name: "Polo", image: "/assests/poppizza2.svg" },
  { name: "Meat Fiest", image: "/assests/poppizza3.svg" },
  { name: "Hawaiian", image: "/assests/poppizza4.svg" },
  { name: "Toscana", image: "/assests/poppizza5.svg" },
  { name: "Toscana", image: "/assests/poppizza5.svg" },
];

const MealDeal: React.FC = () => {
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    Margherita: 1,
    Polo: 1,
    "Meat Fiest": 1,
    Hawaiian: 2,
    Toscana: 1,
  });

  const handleQuantity = (name: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] || 0) + delta),
    }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-6">
      <div className="bg-white max-w-[600px] h-[800px] rounded-xl overflow-hidden relative">
        {/* Top Image */}
        <div className="w-full h-[200px] overflow-hidden relative">
          <img
            src="public/assests/pop-pop1.svg"
            alt="Pizza"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-2 right-2 bg-orange-500 text-white rounded-full ">
            <IoClose size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6">
          {/* Breadcrumb */}
          <div className="text-[14px] text-black font-bold mb-2">
            <span className="text-black font-bold mr-2">Special Offers</span>{" "}
            &gt; Meal Deal 1
          </div>

          {/* Heading */}
          <h2 className="text-[16px] font-mono mb-4 text-gray-500">
            Please select your first Pizza
          </h2>

          {/* Pizza List */}
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
            {pizzaOptions.map((pizza) => {
              const isActive = (quantities[pizza.name] || 0) > 0;

              return (
                <div
                  key={pizza.name + Math.random()}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg ${
                    isActive
                      ? "bg-[#070E2C] text-white"
                      : "bg-gray-100 text-black"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={pizza.image}
                      alt={pizza.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <p className="font-bold">{pizza.name}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleQuantity(pizza.name, -1)}
                      className={`w-7 h-7 flex items-center justify-center rounded ${
                        isActive ? "bg-white text-black" : "bg-black text-white"
                      }`}
                    >
                      -
                    </button>
                    <div className="w-8 text-center font-semibold">
                      {quantities[pizza.name] || 0}
                    </div>
                    <button
                      onClick={() => handleQuantity(pizza.name, 1)}
                      className={`w-7 h-7 flex items-center justify-center rounded ${
                        isActive ? "bg-white text-black" : "bg-black text-white"
                      }`}
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8">
            <div>
              <button className="bg-[#F28A1E] text-white px-6 py-2 rounded font-semibold">
                Total to pay £127.90
              </button>
              <p className="text-xs text-gray-500 mt-1">
                Delivery & Tax will be calculated in the next step
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="underline text-sm text-black">
                Take me back
              </button>
              <button className="bg-green-600 text-white px-6 py-2 rounded font-semibold">
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDeal;
