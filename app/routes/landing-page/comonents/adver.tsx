import React from "react";
import { Box } from "@radix-ui/themes";

export default function Adver() {
  return (
    <Box className="w-full py-6 md:py-8 px-4 md:px-8">
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
  );
}
