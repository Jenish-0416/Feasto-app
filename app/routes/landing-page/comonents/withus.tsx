import React from "react";

export default function Withus() {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12  py-8">
      <div
        className="relative w-full h-[425px] rounded-xl overflow-hidden bg-cover bg-center shadow-md"
        style={{ backgroundImage: "url('/public/assests/with1.png')" }}
      >
        <div className="absolute bottom-[39px] left-[119px]">
          <button
            className="bg-orange-400 text-white font-semibold hover:opacity-90 transition"
            style={{
              width: "205px",
              height: "52px",
              transform: "rotate(0deg)",
              opacity: 1,
              top: "3242px",
              left: "170px",
              borderRadius: "120px",
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      <div
        className="relative w-full h-[425px] rounded-xl overflow-hidden bg-cover bg-center shadow-md"
        style={{ backgroundImage: "url('/public/assests/with2.png')" }}
      >
        <div className="absolute bottom-[39px] left-[119px]">
          <button className="bg-orange-400 text-white font-semibold px-12 py-2 w-[205px] h-[52px] rounded-full hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
