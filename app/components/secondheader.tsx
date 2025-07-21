"use client";

import { Clock, FileText, Bike } from "lucide-react";

export default function SecondHeader() {
  return (
    <div className="relative bg-[url('/public/assests/secheader.svg')] rounded-2xl py-[60px] px-[100px]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#F4F4F4E5] rounded-2xl z-0" />


      {/* Content */}
      <div className="relative z-10 flex items-center justify-between max-w-[1520px] mx-auto">
        {/* Left Section */}
        <div className="space-y-4 h-[66px] max-w-[666px]">
          <p className="text-[20px] text-[#03081F]">I'm lovin' it!</p>

          <h1 className="text-[48px] font-extrabold text-[#03081F] leading-tight">
            McDonald’s East London
          </h1>

          {/* Order Info */}
          <div className="flex flex-wrap gap-4 pt-4">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#03081F] text-white">
              <FileText className="w-5 h-5" />
              <span className="text-base font-medium">Minimum Order: 12 GBP</span>
            </div>
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#03081F] text-white">
              <Bike className="w-5 h-5" />
              <span className="text-base font-medium">Delivery in 20–25 Minutes</span>
            </div>
          </div>

          {/* Open Until */}
          <div
            className="mt-6 inline-flex items-start gap-2 px-6 py-4 bg-[#FF9100] text-black text-base font-semibold"
            style={{
              borderTopRightRadius: "12px",
              borderBottomRightRadius: "12px",
              width: "335px",
              height: "61px",
            }}
          >
            <Clock className="w-5 h-5" />
            Open until 3:00 AM
          </div>
        </div>

        {/* Right Section: Image + Rating */}
        <div className="relative w-[581px] h-[361px]">
          <img
            src="/public/assests/secondheader.svg"
            alt="mcdonald"
            className="object-contain w-full h-full"
          />

          <div className="absolute left-[-60px] top-1/2 transform -translate-y-1/2 bg-white text-black shadow-xl px-6 py-4 h-[130px] w-[120px]">
            <p className="text-4xl font-semibold">3.4</p>
            <p className="text-yellow-500 text-lg leading-none">★★★★☆</p>
            <p className="text-sm text-gray-600">1,360 reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
            {/* Top Row: Title + Search */}
            <div className="relative z-10 flex items-center justify-between mb-12">
              <h2 className="text-3xl font-extrabold text-black">
                All Offers from McDonald’s East London
              </h2>
              <form className="flex items-center w-[420px] bg-white border border-gray-400 rounded-full overflow-hidden shadow-sm">
                <span className="pl-5 text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                    />
                  </svg>
                </span>
                <input
                  type="text"
                  placeholder="Search from menu..."
                  className="flex-grow px-4 py-4 text-base text-gray-600 focus:outline-none bg-transparent"
                />
              </form>
            </div>
}
