"use client";

import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaFish, FaDrumstickBite, FaCarrot } from "react-icons/fa";
import { Dialog, DialogTrigger, DialogContent } from "~/components/ui/dialog";
import { useFlow } from "~/lib/flow-context";

const maxSelections = 4;

const toppings = {
  vegetables: [
    "Cheese",
    "Green peppers",
    "Tomato",
    "Mushrooms",
    "Sweetcorn",
    "Jalapeneos",
    "Olives",
    "Pineapples",
    "Onions",
  ],
  meat: ["Chicken", "Beef", "Salami", "Pepperoni", "Chicken Tikka", "Fish"],
  seafood: ["Tuna", "Anchovies", "Prawns"],
};

const MealCustomization = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const { currentStep, openAddRequest, closeAll } = useFlow();

  const toggleTopping = (topping: string) => {
    if (selected.includes(topping)) {
      setSelected(selected.filter((item) => item !== topping));
    } else if (selected.length < maxSelections) {
      setSelected([...selected, topping]);
    }
  };

  const isChecked = (topping: string) => selected.includes(topping);

  const handleNextStep = () => {
    openAddRequest();
  };

  const isOpen = currentStep === "customization";

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeAll()}>
      <DialogContent className="w-full max-w-[640px] p-0 overflow-hidden">
        <div className="bg-white h-[760px] rounded-xl overflow-hidden relative shadow-lg flex flex-col">
         
          <div className="w-full h-[200px] relative overflow-hidden">
            <img
              src="/assests/pop-pop1.svg"
              alt="Pizza"
              className="w-full h-full object-cover"
            />
            <button
              onClick={closeAll}
              className="absolute top-4 right-4 bg-white text-black rounded-full p-1 shadow"
            >
              <IoClose size={24} />
            </button>
          </div>

         
          <div className="flex flex-col h-full px-8 py-6">
          
            <div className="text-[14px] text-black font-semibold mb-2">
              <span>Special Offers</span> &gt; <span>Meal Deal 1</span> &gt;{" "}
              <span className="font-bold">Customise Pizza 1</span>
              <span className="float-right text-sm text-black font-bold">
                {selected.length}/4 Selected
              </span>
            </div>

           
            <h2 className="text-[16px] font-mono mb-2">
              Customise your chicken Pizza
            </h2>

           
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/assests/poppizza2.svg"
                alt="Pizza icon"
                className="w-12 h-12 rounded-full border border-gray-200"
              />
              <div className="h-10 w-px bg-gray-300"></div>
              <p className="text-[#F28A1E] gap-3 font-bold text-lg">
                Please select up to 4 options free!
              </p>
            </div>

           
            <div className="flex-1 overflow-y-auto pr-2 space-y-6">
             
              <div className="border border-gray-300 rounded-xl p-4 relative">
                <div className="absolute -top-4 left-4 flex items-center z-10">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
                    <FaCarrot size={16} />
                  </div>
                  <div className="bg-[#070E2C] text-white text-sm font-bold rounded-md px-4 py-2 ml-[-12px]">
                    Vegetable Toppings
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {toppings.vegetables.map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 cursor-pointer font-bold"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(item)}
                        onChange={() => toggleTopping(item)}
                        className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm checked:bg-green-600 checked:border-green-600"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

             
              <div className="border border-gray-300 rounded-xl p-4 relative">
                <div className="absolute -top-4 left-4 flex items-center z-10">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
                    <FaDrumstickBite size={16} />
                  </div>
                  <div className="bg-[#070E2C] text-white text-sm font-bold rounded-md px-4 py-2 ml-[-12px]">
                    Meat Toppings
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {toppings.meat.map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 cursor-pointer font-bold"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(item)}
                        onChange={() => toggleTopping(item)}
                        className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm checked:bg-green-600 checked:border-green-600"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>

             
              <div className="border border-gray-300 rounded-xl p-4 relative">
                <div className="absolute -top-4 left-4 flex items-center z-10">
                  <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-md">
                    <FaFish size={16} />
                  </div>
                  <div className="bg-[#070E2C] text-white text-sm font-bold rounded-md px-4 py-2 ml-[-12px]">
                    Seafood Toppings
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  {toppings.seafood.map((item) => (
                    <label
                      key={item}
                      className="flex items-center gap-2 cursor-pointer font-bold"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked(item)}
                        onChange={() => toggleTopping(item)}
                        className="appearance-none w-5 h-5 border-2 border-gray-400 rounded-sm checked:bg-green-600 checked:border-green-600"
                      />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

           
            <div className="mt-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col">
                  <button className="bg-[#F28A1E] text-white text-sm font-semibold px-6 py-2 rounded-md">
                    <span className="text-white opacity-90">Total to pay </span>
                    <span className="text-lg font-bold">£127.90</span>
                  </button>
                  <p className="text-xs text-gray-600 mt-1">
                    Delivery & Tax will be calculated in the next step
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    onClick={closeAll}
                    className="underline text-sm text-black font-semibold"
                  >
                    Take me back
                  </button>
                  <button
                    onClick={handleNextStep}
                    className="bg-green-700 hover:bg-green-800 text-white font-semibold px-6 py-2 rounded-md flex items-center gap-2"
                  >
                    <span className="bg-white text-green-700 rounded-full w-5 h-5 flex items-center justify-center text-sm font-bold">
                      →
                    </span>
                    <span>Next Step</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MealCustomization;
