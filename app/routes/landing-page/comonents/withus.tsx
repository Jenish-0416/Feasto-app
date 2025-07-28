import React from "react";

export default function Withus() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-12 py-6 md:py-8 px-4 md:px-8">
      <div
        className="relative w-full h-64 md:h-80 lg:h-[425px] rounded-xl overflow-hidden bg-cover bg-center shadow-md"
        style={{ backgroundImage: "url('/public/assests/with1.png')" }}
      >
        <div className="absolute bottom-4 md:bottom-8 lg:bottom-[39px] left-4 md:left-8 lg:left-[119px]">
          <button
            className="bg-orange-400 text-white font-semibold hover:opacity-90 transition text-sm md:text-base px-4 md:px-6 py-2 md:py-3 rounded-full"
            style={{
              width: "160px",
              height: "40px",
              transform: "rotate(0deg)",
              opacity: 1,
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      <div
        className="relative w-full h-64 md:h-80 lg:h-[425px] rounded-xl overflow-hidden bg-cover bg-center shadow-md"
        style={{ backgroundImage: "url('/public/assests/with2.png')" }}
      >
        <div className="absolute bottom-4 md:bottom-8 lg:bottom-[39px] left-4 md:left-8 lg:left-[119px]">
          <button className="bg-orange-400 text-white font-semibold px-4 md:px-6 py-2 md:py-3 w-40 md:w-[205px] h-10 md:h-[52px] rounded-full hover:opacity-90 transition text-sm md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
