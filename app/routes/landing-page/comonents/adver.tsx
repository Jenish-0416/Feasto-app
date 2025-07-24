import React from "react";
import { Box } from "@radix-ui/themes";

export default function Adver() {
  return (
    <Box className="w-full  py-8">
      <div className="relative w-full overflow-hidden rounded-xl">
        <img
          src="/public/assests/adver.png"
          alt="Download the app"
          className="w-full h-auto object-cover"
        />

        <div className="absolute bottom-6 right-6 flex gap-4">
          <img
            src="public/assests/applelogo.png"
            alt="App Store"
            className="w-[140px] h-auto"
          />
          <img
            src="public/assests/andlogo.png"
            alt="Google Play"
            className="w-[140px] h-auto"
          />
        </div>
      </div>
    </Box>
  );
}
