import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

export function Hero() {
  return (
    <Box className="relative w-full overflow-hidden rounded-2xl ">
      <img
        src="/assests/herose.png"
        alt="Hero"
        className="w-full h-auto object-cover"
      />

      <Flex
        direction="column"
        className="absolute top-1/2 -translate-y-1/2 left-[150px] space-y-6 max-w-[550px]"
      >
        <div className="flex flex-col space-y-4">
          <p className="text-[#03081F] font-medium text-lg">
            Order Restaurant food, takeaway and groceries.
          </p>

          <div className="space-y-2">
            <p className="text-[48px] leading-[54px] font-extrabold text-[#03081F]">
              Feast Your Senses,
            </p>
            <p className="text-[48px] leading-[54px] font-extrabold text-[#FC8A06]">
              Fast and Fresh
            </p>
          </div>

          <p className="text-sm text-[#03081F] font-medium">
            Enter a postcode to see what we deliver
          </p>
        </div>

        <form className="flex items-center w-full max-w-md bg-white border border-gray-300 rounded-full overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="e.g. EC4R 3TE"
            className="flex-grow px-6 py-4 text-base text-gray-800 focus:outline-none rounded-l-full"
          />
          <button
            type="submit"
            className="bg-[#FC8A06] text-white font-bold px-8 py-4 text-base rounded-r-full hover:bg-[#e67a00] transition-colors"
          >
            Search
          </button>
        </form>
      </Flex>
    </Box>
  );
}
