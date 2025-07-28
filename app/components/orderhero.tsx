"use client";

import { Clock, FileText, Bike } from "lucide-react";
import { categories, foodItems, pizzaItems } from "../lib/constants";

export default function SecondHeader() {
  return (
    <div className="relative bg-[url('/public/assests/secheader.svg')] rounded-2xl py-[60px] px-[100px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F4F4F4E5] rounded-2xl z-0" />

      <div
        className="absolute bottom-0 left-0 z-20 flex items-center gap-2 px-6 py-4 bg-[#FF9100] text-black font-semibold rounded-tr-xl rounded-br-xl m-4"
        style={{
          width: "335px",
          height: "61px",
        }}
      >
        <Clock className="w-5 h-5" />
        Open until 3:00 AM
      </div>

      <div className="relative z-10 flex items-center justify-between max-w-[1520px] mx-auto">
        {/* Left Section */}
        <div className="space-y-4 h-[66px] max-w-[666px]">
          <p className="text-[20px] text-[#03081F]">
            Desi Flavours with a blend of Italian aesthetics
          </p>

          <h1 className="text-[48px] font-extrabold text-[#03081F] leading-tight">
            Tandoori Pizza London
          </h1>

          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#03081F] text-white">
              <FileText className="w-5 h-5" />
              <span className="text-base font-medium">
                Minimum Order: 12 GBP
              </span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#03081F] text-white">
              <Bike className="w-5 h-5" />
              <span className="text-base font-medium">
                Delivery in 20–25 Minutes
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-[581px] h-[361px]">
          <img
            src="public/assests/orderhero.svg"
            alt="mcdonald"
            className="object-contain w-full h-full"
          />

          <div className="absolute left-[-60px]  transform -translate-y-1/2 bg-white text-black shadow-xl px-6 py-6 h-[158px] w-[120px] rounded-2xl">
            <p className="text-4xl font-semibold">3.4</p>
            <p className="text-yellow-500 text-lg leading-none">★★★★☆</p>
            <p className="text-sm text-gray-600">1,360 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
}
