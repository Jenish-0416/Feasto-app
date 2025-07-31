"use client";

import { Clock, FileText, Bike } from "lucide-react";

export default function SecondHeader() {
  return (
    <div className="relative bg-[url('/public/assests/secheader.svg')] rounded-2xl py-8 md:py-12 lg:py-[60px] px-4 md:px-8 lg:px-[100px]">
      <div className="absolute inset-0 bg-[#F4F4F4E5] rounded-2xl z-0" />

      {/* ✅ Desktop Layout */}
      <div className="relative z-10 hidden lg:flex flex-row items-center justify-between max-w-[1520px] mx-auto gap-6">
        <div className="space-y-4 max-w-[666px]">
          <p className="text-[20px] text-[#03081F]">I'm lovin' it!</p>
          <h1 className="text-[48px] font-extrabold text-[#03081F] leading-tight">
            McDonald's East London
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
            src="/public/assests/secondheader.svg"
            alt="mcdonald"
            className="object-contain w-full h-full"
          />
          <div className="absolute left-[-60px] transform -translate-y-1/2 bg-white text-black shadow-xl px-6 py-6 h-[158px] w-[120px] rounded-2xl">
            <p className="text-4xl font-semibold">3.4</p>
            <p className="text-yellow-500 text-lg leading-none">★★★★☆</p>
            <p className="text-sm text-gray-600">1,360 reviews</p>
          </div>
        </div>
      </div>
      {/* Open Time */}
      <div
  className="hidden md:inline-flex absolute bottom-0 left-0 items-center justify-center gap-2 bg-[#FF9100] text-black font-semibold text-sm md:text-base"
  style={{
    borderTopRightRadius: "12px",
    borderBottomRightRadius: "12px",
    width: "280px",
    height: "50px",
  }}
>
  <Clock className="w-4 md:w-5 h-4 md:h-5" />
  Open until 3:00 AM
</div>


      {/* ✅ Mobile Layout */}
      <div className="relative z-10 flex lg:hidden flex-col items-center justify-center text-center gap-4 bg-[#F4F4F4E5] p-6 rounded-2xl">
        <p className="text-sm text-[#03081F]">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h2 className="text-2xl font-medium text-[#03081F]">
          Feast Your Senses,
          <br />
          <span className="text-[#FF9100]">Fast and Fresh</span>
        </h2>
        <p className="text-sm text-[#03081F]">
          Enter a postcode to see what we deliver
        </p>
        <div className="flex items-center bg-white shadow-md rounded-full px-4 py-2 w-full max-w-md">
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className="flex-1 outline-none text-sm"
          />
          <div className="bg-[#FF9100] text-white rounded-full p-2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
