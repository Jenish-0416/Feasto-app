import React from "react";

export default function Withus() {
  const cards = [
    {
      title: "Partner with us",
      subtitle: "Signup as a business",
      badge: "Earn more with lower fees",
      image: "/public/assests/with1.png",
    },
    {
      title: "Ride with us",
      subtitle: "Signup as a rider",
      badge: "Avail exclusive perks",
      image: "/public/assests/with2.png",
    },
  ];

  return (
    <>
      {/* Mobile only: match screenshot exactly */}
      <div className="md:hidden flex flex-col gap-6 py-4 px-2">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-2">
            <div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{ height: 220 }}
            >
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Top badge */}
              <div className="absolute top-0 left-0 w-full flex items-start pl-6 z-20">
                <div className="bg-white rounded-b-xl px-2 py-3 text-[13px] font-bold text-[#232323] shadow-md">
                  {card.badge}
                </div>
              </div>
              {/* Overlay for text and button */}
              <div className="absolute left-6 bottom-6 flex flex-col items-start gap-2 w-[80%] z-10">
                <div className="text-[#FC8A06] text-base font-semibold mb-0">
                  {card.subtitle}
                </div>
                <div className="text-white text-2xl font-extrabold leading-tight mb-2 drop-shadow-lg">
                  {card.title}
                </div>
                <button
                  className="bg-[#FC8A06] text-white font-bold text-base rounded-full px-6 py-2 mt-1 shadow"
                  style={{ minWidth: 120 }}
                >
                  Get Started
                </button>
              </div>
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>
            </div>
          </div>
        ))}
      </div>
      {/* Desktop/Tablet: original layout */}
      <div className="hidden md:flex flex-col md:flex-row justify-between gap-4 md:gap-6 lg:gap-12 py-6 md:py-8 px-4 md:px-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="relative w-full h-64 md:h-80 lg:h-[425px] rounded-xl overflow-hidden bg-cover bg-center shadow-md"
            style={{ backgroundImage: `url('${card.image}')` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 z-0" />

            {/* Top badge */}
            <div className="absolute top-0 left-18 z-10">
              <div className="bg-white text-black text-xs md:text-sm font-semibold rounded-b-lg p-3 shadow">
                {card.badge}
              </div>
            </div>

            {/* Text content + Button */}
            <div className="absolute flex flex-col gap-4 bottom-4 md:bottom-8 lg:bottom-[39px] left-4 md:left-10 lg:left-[72px] z-10">
              <div>
                <p className="text-orange-400 text-sm md:text-base lg:text-[18px]">
                  {card.subtitle}
                </p>
                <h3 className="text-white text-lg md:text-2xl lg:text-[44px] font-extrabold leading-tight">
                  {card.title}
                </h3>
              </div>
              <button
                className="bg-orange-400 text-white font-semibold text-sm md:text-base px-6 py-2 rounded-full hover:opacity-90 transition"
                style={{ width: "160px", height: "40px" }}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
