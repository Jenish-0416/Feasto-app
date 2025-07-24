import React from "react";

export default function MapCard() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-white">

      <iframe
        title="McDonald's Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.2144986345943!2d-0.0889579!3d51.5054564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760354c35ec61f%3A0x2a7d3f1739297a51!2sTooley%20St%2C%20London%20SE1%202TF%2C%20UK!5e0!3m2!1sen!2sin!4v1628779657995!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
        className="absolute top-0 left-0 w-full h-full border-none rounded-xl"
      ></iframe>

     
      <div className="relative z-10 bg-[#0d0f1d] text-white rounded-xl p-6 max-w-md h-[400px] w-[366px] shadow-lg right-120">
        <h2 className="text-2xl font-bold mb-1">McDonald's</h2>
        <p className="text-orange-500 text-lg font-semibold mb-3">
          South London
        </p>
        <p className="text-sm mb-4 leading-relaxed">
          Tooley St, London Bridge, London SE1 2TF,
          <br />
          United Kingdom
        </p>

        <p className="font-semibold text-sm">Phone number</p>
        <p className="text-orange-400 text-base mb-4">+934443–43</p>

        <p className="font-semibold text-sm">Website</p>
        <a
          href="http://mcdonalds.uk/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-400 text-base underline break-all"
        >
          http://mcdonalds.uk/
        </a>
      </div>
    </div>
  );
}
