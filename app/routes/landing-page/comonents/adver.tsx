import React from "react";
import { Box } from "@radix-ui/themes";

export default function Adver() {
  return (
    <>
      {/* Mobile only: new card design */}
      <div className="md:hidden w-full flex justify-center py-6 px-2">
        <div className="w-full max-w-[370px] bg-[#F7F7F7] rounded-2xl p-5 flex flex-col items-center shadow-sm">
          {/* Headline */}
          <div className="w-full flex flex-col items-center mb-2">
            <div className="flex items-center text-2xl font-extrabold mb-1">
              <span className="text-[#03081F]">Order</span>
              <span className="inline-block align-middle mx-0.5">
                <span className="bg-[#FC8A06] text-white px-1 rounded-sm text-base font-bold align-middle">
                  .uk
                </span>
              </span>
              <span className="text-[#03081F]">ing</span>
              <span className="text-[#03081F] ml-2">is more</span>
            </div>
            <div className="flex items-center text-xl font-bold mb-1">
              <span className="text-[#FC8A06] relative mr-1">
                Personalised
                <span className="block h-1 w-full bg-[#FC8A06] absolute left-0 -bottom-1 rounded-full"></span>
              </span>
              <span className="text-[#03081F]">&nbsp;&amp; Instant</span>
            </div>
          </div>
          {/* Subheading */}
          <div className="text-center text-base text-[#232323] mb-4 font-medium">
            Download the Order.uk app for faster ordering
          </div>
          {/* App badges */}
          <div className="flex flex-row gap-3 justify-center mb-4">
            <img
              src="/assests/applelogo.png"
              alt="App Store"
              className="w-32 h-10 object-contain"
            />
            <img
              src="/assests/andlogo.png"
              alt="Google Play"
              className="w-32 h-10 object-contain"
            />
          </div>
          {/* Couple image */}
          <img
            src="public/assests/coupleimg.svg"
            alt="Download the app"
            className="w-[322px] h-[253px] object-contain rounded-xl mt-2"
          />
        </div>
      </div>
      {/* Desktop/Tablet only: original layout */}
      <Box className="hidden md:block w-full py-6 md:py-8 px-4 md:px-8">
        <div className="relative w-full overflow-hidden rounded-xl">
          <img
            src="/public/assests/adver.png"
            alt="Download the app"
            className="w-full h-auto object-cover"
          />
          <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6 flex gap-2 md:gap-4">
            <img
              src="public/assests/applelogo.png"
              alt="App Store"
              className="w-20 md:w-28 lg:w-[140px] h-auto"
            />
            <img
              src="public/assests/andlogo.png"
              alt="Google Play"
              className="w-20 md:w-28 lg:w-[140px] h-auto"
            />
          </div>
        </div>
      </Box>
    </>
  );
}
