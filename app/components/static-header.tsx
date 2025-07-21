"use client";

import { useState } from "react";
import { MapPin, User, ShoppingCartIcon, DownloadIcon } from "lucide-react";

export default function StaticHeader() {
  const [active, setActive] = useState("Home");

  const navItems = [
    "Home",
    "Browse Menu",
    "Special Offers",
    "Restaurants",
    "Track Order",
  ];

  return (
    <div className="w-full font-sans">
      <div className="flex items-center justify-between  text-sm border-2 border-[#0000001A] bg-[#FAFAFA] rounded-b-2xl shadow-none mx-[100px] h-16">
        <div className="flex items-center space-x-1 p-6">
          <span>🌟</span>
          <span>Get 5% Off your first order,</span>
          <span className="font-semibold" style={{ color: "#FC8A06" }}>
            Promo: ORDER5
          </span>
        </div>
        <div className="flex items-center space-x-1 text-sm p-6">
          <MapPin className="w-4 h-4" />
          <span>
            Regent Street, <span className="font-bold">A4</span>, A4201, London
          </span>
          <a
            href="#"
            className="ml-2 font-semibold"
            style={{ color: "#FC8A06" }}
          >
            Change Location
          </a>
        </div>
        <div className="flex w-96 h-full bg-[#028643] rounded-b-2xl overflow-hidden">
          {/* Basket Icon with Checkmark */}
          <div className="flex flex-1 items-center justify-center">
            <span className="relative">
              <img
                src="public/assests/shopicon.svg"
                className="h-[35px]"
                alt=""
              />
            </span>
          </div>
          {/* Separator */}
          <div className="w-px bg-white/50 h-4/5 self-center" />
          {/* 23 Items */}
          <div className="flex flex-1 items-center justify-center">
            <span className="text-white text-md font-bold">23 Items</span>
          </div>
          {/* Separator */}
          <div className="w-px bg-white/50 h-4/5 self-center" />
          {/* GBP 79.89 */}
          <div className="flex flex-1 items-center justify-center">
            <span className="text-white text-md font-bold">GBP 79.89</span>
          </div>
          {/* Separator */}
          <div className="w-px bg-white/50 h-4/5 self-center" />
          {/* Down Arrow in White Circle */}
          <div className="flex flex-1 items-center justify-center">
            <span className=" rounded-full p-3 flex items-center justify-center">
              <img src="public/assests/download.svg" alt="" />
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-9 mx-[70px] bg-white">
        <div>
          <img src="/assests/logo1.svg" alt="" className="w-[215px] h-[53px]" />
        </div>
        <div className="flex" style={{ gap: "20px" }}>
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`text-lg px-[34px] py-[9px] rounded-full transition-all duration-200 font-medium ${
                active === item ? "text-white" : "text-black"
              }`}
              style={{
                backgroundColor: active === item ? "#FC8A06" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (active !== item)
                  e.currentTarget.style.backgroundColor = "#FC8A0622";
              }}
              onMouseLeave={(e) => {
                if (active !== item)
                  e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-3 bg-black text-white px-[26px] py-4 rounded-full text-lg">
          <User className="w-5 h-5" style={{ color: "#FC8A06" }} />
          <span>Login/Signup</span>
        </button>
      </div>
    </div>
  );
}
