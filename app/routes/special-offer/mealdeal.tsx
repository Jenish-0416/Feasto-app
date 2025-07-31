"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useFlow } from "~/lib/flow-context";

const pizzaOptions = [
  { name: "Margherita", image: "/assests/poppizza1.svg" },
  { name: "Polo", image: "/assests/poppizza2.svg" },
  { name: "Meat Fiest", image: "/assests/poppizza3.svg" },
  { name: "Hawaiian", image: "/assests/poppizza4.svg" },
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

  const { currentStep, openCustomization, closeAll } = useFlow();

  const handleQuantity = (name: string, delta: number) => {
    setQuantities((prev) => ({
      ...prev,
      [name]: Math.max(0, (prev[name] || 0) + delta),
    }));
  };

  const handleNextStep = () => {
    openCustomization();
  };

  const isOpen = currentStep === "mealdeal";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeAll()}>
      <DialogContent className="max-w-[90vw] md:max-w-[600px] p-0 overflow-hidden">
        <div className="bg-white h-[600px] md:h-[800px] rounded-xl relative">
         
          <div className="w-full h-32 md:h-[200px] relative">
            <img
              src="/assests/pop-pop1.svg"
              alt="Pizza"
              className="w-full h-full object-cover"
            />
            <button
              onClick={closeAll}
              className="absolute top-2 right-2 bg-orange-500 text-white rounded-full"
            >
              <IoClose size={20} />
            </button>
          </div>

         
          <div className="px-4 md:px-8 py-4 md:py-6">
          
            <div className="text-xs md:text-[14px] text-black font-bold mb-2">
              <span className="text-black font-bold mr-2">Special Offers</span>
              &gt; Meal Deal 1
            </div>

           
            <h2 className="text-sm md:text-[16px] font-mono mb-4 text-gray-500">
              Please select your first Pizza
            </h2>

           
            <div className="space-y-3 md:space-y-4 max-h-[280px] md:max-h-[380px] overflow-y-auto pr-2">
              {pizzaOptions.map((pizza) => {
                const isActive = (quantities[pizza.name] || 0) > 0;

                return (
                  <div
                    key={pizza.name + Math.random()}
                    className={`flex items-center justify-between px-3 md:px-4 py-2 md:py-3 rounded-lg ${
                      isActive
                        ? "bg-[#070E2C] text-white"
                        : "bg-gray-100 text-black"
                    }`}
                  >
                    <div className="flex items-center gap-2 md:gap-4">
                      <img
                        src={pizza.image}
                        alt={pizza.name}
                        className="w-8 h-8 md:w-12 md:h-12 rounded-full object-cover"
                      />
                      <p className="font-bold text-sm md:text-base">
                        {pizza.name}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantity(pizza.name, -1)}
                        className={`w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded text-sm md:text-base ${
                          isActive
                            ? "bg-white text-black"
                            : "bg-black text-white"
                        }`}
                      >
                        -
                      </button>
                      <div className="w-6 md:w-8 text-center font-semibold text-sm md:text-base">
                        {quantities[pizza.name] || 0}
                      </div>
                      <button
                        onClick={() => handleQuantity(pizza.name, 1)}
                        className={`w-6 h-6 md:w-7 md:h-7 flex items-center justify-center rounded text-sm md:text-base ${
                          isActive
                            ? "bg-white text-black"
                            : "bg-black text-white"
                        }`}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

           
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-6 md:mt-8">
              <div>
                <button className="bg-[#F28A1E] text-white px-4 md:px-6 py-2 rounded font-semibold text-sm md:text-base">
                  Total to pay £127.90
                </button>
                <p className="text-xs text-gray-500 mt-1">
                  Delivery & Tax will be calculated in the next step
                </p>
              </div>

              <div className="flex items-center gap-2 md:gap-4">
                <button
                  onClick={closeAll}
                  className="underline text-xs md:text-sm text-black"
                >
                  Take me back
                </button>
                <button
                  onClick={handleNextStep}
                  className="bg-green-600 text-white px-4 md:px-6 py-2 rounded font-semibold text-sm md:text-base"
                >
                  Next Step
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MealDeal;
