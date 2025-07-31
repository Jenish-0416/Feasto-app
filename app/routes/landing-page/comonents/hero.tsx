import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

export function Hero() {
  return (
    <>
      {/* Mobile only */}
      <div className="md:hidden w-full flex justify-center items-center py-8 px-2">
        <div className="w-full max-w-2xl bg-[#E9E9E9] border border-[#D3D3D3] rounded-2xl p-6 flex flex-col items-center shadow-sm">
          <p className="text-[#03081F] text-center font-medium text-base mb-4">
            Order Restaurant food, takeaway and groceries.
          </p>
          <h1 className="text-center font-extrabold text-3xl leading-tight text-[#03081F] mb-0">
            Feast Your Senses,
          </h1>
          <h2 className="text-center font-extrabold text-3xl leading-tight text-[#FC8A06] mb-4">
            Fast and Fresh
          </h2>
          <p className="text-[#03081F] text-center text-base font-medium mb-8">
            Enter a postcode to see what we deliver
          </p>
          <form className="w-full flex flex-col items-center">
            <div className="relative w-full flex items-center justify-center">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="w-full pr-20 pl-6 py-5 text-lg text-[#232323] bg-white rounded-full shadow focus:outline-none border border-gray-300 placeholder:text-[#232323]"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#FC8A06] hover:bg-[#e67a00] w-16 h-16 rounded-full flex items-center justify-center transition-colors shadow-md"
              >
                <img src="public/assests/nextbutton.svg" alt="" 
                className="w-[34px] h-[34px]"/>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Desktop/Tablet only: original design */}
      <div className="hidden md:block">
        <Box className="relative w-full overflow-hidden rounded-2xl">
          <img
            src="/assests/herose.png"
            alt="Hero"
            className="w-full h-auto object-cover"
          />

          <Flex
            direction="column"
            className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 md:left-[80px] space-y-4 md:space-y-6 max-w-[300px] sm:max-w-[400px] md:max-w-[550px]"
          >
            <div className="flex flex-col space-y-2 md:space-y-4">
              <p className="text-[#03081F] font-medium text-sm md:text-lg">
                Order Restaurant food, takeaway and groceries.
              </p>

              <div className="space-y-1 md:space-y-2">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[54px] font-extrabold text-[#03081F]">
                  Feast Your Senses,
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[54px] font-extrabold text-[#FC8A06]">
                  Fast and Fresh
                </p>
              </div>

              <p className="text-xs md:text-sm text-[#03081F] font-medium">
                Enter a postcode to see what we deliver
              </p>
            </div>

            <form className="flex flex-col sm:flex-row items-center w-full max-w-md bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm">
              <input
                type="text"
                placeholder="e.g. EC4R 3TE"
                className="flex-grow px-4 md:px-6 py-3 md:py-4 text-sm md:text-base text-gray-800 focus:outline-none rounded-l-full w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-[#FC8A06] text-white font-bold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base rounded-r-full hover:bg-[#e67a00] transition-colors w-full sm:w-auto mt-2 sm:mt-0"
              >
                Search
              </button>
            </form>
          </Flex>
        </Box>
      </div>
    </>
  );
}
