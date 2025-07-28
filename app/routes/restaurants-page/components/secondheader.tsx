"use client";

import { Clock, FileText, Bike } from "lucide-react";

export default function SecondHeader() {
  return (
    <div className="relative bg-[url('/public/assests/secheader.svg')] rounded-2xl py-8 md:py-12 lg:py-[60px] px-4 md:px-8 lg:px-[100px]">
      <div className="absolute inset-0 bg-[#F4F4F4E5] rounded-2xl z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between max-w-[1520px] mx-auto gap-6 lg:gap-0">
        <div className="space-y-3 md:space-y-4 h-auto lg:h-[66px] max-w-full lg:max-w-[666px]">
          <p className="text-sm md:text-base lg:text-[20px] text-[#03081F]">
            I'm lovin' it!
          </p>

          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-[48px] font-extrabold text-[#03081F] leading-tight">
            McDonald's East London
          </h1>

          <div className="flex  flex-col sm:flex-row flex-wrap gap-2 md:gap-4 pt-2 md:pt-4 ">
            <div className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#03081F] text-white">
              <FileText className="w-4 md:w-5 h-4 md:h-5" />
              <span className="text-sm md:text-base font-medium">
                Minimum Order: 12 GBP
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full bg-[#03081F] text-white">
              <Bike className="w-4 md:w-5 h-4 md:h-5" />
              <span className="text-sm md:text-base font-medium">
                Delivery in 20–25 Minutes
              </span>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[400px] lg:w-[581px] h-48 md:h-64 lg:h-[361px]">
          <img
            src="/public/assests/secondheader.svg"
            alt="mcdonald"
            className="object-contain w-full h-full"
          />

          <div className="absolute left-[-30px] md:left-[-60px] transform -translate-y-1/2 bg-white text-black shadow-xl px-3 md:px-6 py-3 md:py-6 h-24 md:h-32 lg:h-[158px] w-20 md:w-24 lg:w-[120px] rounded-2xl">
            <p className="text-lg md:text-2xl lg:text-4xl font-semibold">3.4</p>
            <p className="text-yellow-500 text-sm md:text-lg leading-none">
              ★★★★☆
            </p>
            <p className="text-xs md:text-sm text-gray-600">1,360 reviews</p>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 items-center justify-center inline-flex gap-2  bg-[#FF9100] text-black font-semibold text-sm md:text-base"
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
    </div>
  );
}
