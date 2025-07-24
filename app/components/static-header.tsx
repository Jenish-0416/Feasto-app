"use client";

import { MapPin, User, Menu } from "lucide-react";

export default function StaticHeader() {
  const navItems = [
    "Home",
    "Browse Menu",
    "Special Offers",
    "Restaurants",
    "Track Order",
  ];

  return (
    <div className="w-full font-sans">
      {/* --- MOBILE HEADER --- */}
      <div className="md:hidden w-full bg-white shadow-md font-sans text-sm rounded-b-2xl overflow-hidden">
        {/* Top Row */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          {/* Logo */}
          <img
            src="/assests/logo1.svg"
            alt="Logo"
            className="h-6 object-contain"
          />

          {/* Cart Summary */}
          <div className="flex items-center bg-[#028643] text-white rounded px-2 py-1">
            <img src="/assests/shopicon.svg" alt="Basket" className="h-4 mr-1" />
            <span className="text-sm font-bold">GBP 79.89</span>
          </div>

          {/* Menu Icon */}
          <Menu className="w-6 h-6 text-black" />
        </div>

        {/* Profile Row */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#FC8A06] text-white">
          <div className="flex items-center gap-2">
            <img
              src="/assests/user.jpg"
              alt="User"
              className="h-6 w-6 rounded-full object-cover"
            />
            <span className="text-sm font-medium">Aycan</span>
          </div>
        </div>
      </div>

      {/* --- DESKTOP HEADER --- */}
      <div className="hidden md:flex items-center justify-between text-sm border-2 border-[#0000001A] bg-[#FAFAFA] rounded-b-2xl shadow-none mx-[100px] h-16">
        {/* Promo */}
        <div className="flex items-center space-x-1 p-6">
          <span>🌟</span>
          <span>Get 5% Off your first order,</span>
          <span className="font-semibold text-[#FC8A06]">Promo: ORDER5</span>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-1 text-sm p-6">
          <MapPin className="w-4 h-4" />
          <span>
            Regent Street, <span className="font-bold">A4</span>, A4201, London
          </span>
          <span className="ml-2 font-semibold text-[#FC8A06] cursor-pointer">
            Change Location
          </span>
        </div>

        {/* Cart Summary */}
        <div className="flex w-96 h-full bg-[#028643] rounded-b-2xl overflow-hidden">
          <div className="flex flex-1 items-center justify-center">
            <img
              src="/assests/shopicon.svg"
              className="h-[35px]"
              alt="shop"
            />
          </div>
          <div className="w-px bg-white/50 h-4/5 self-center" />
          <div className="flex flex-1 items-center justify-center">
            <span className="text-white text-md font-bold">23 Items</span>
          </div>
          <div className="w-px bg-white/50 h-4/5 self-center" />
          <div className="flex flex-1 items-center justify-center">
            <span className="text-white text-md font-bold">GBP 79.89</span>
          </div>
          <div className="w-px bg-white/50 h-4/5 self-center" />
          <div className="flex flex-1 items-center justify-center">
            <span className="rounded-full p-3 flex items-center justify-center">
              <img src="/assests/download.svg" alt="arrow" />
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Bar (only on desktop) */}
      <div className="hidden md:flex items-center justify-between px-6 py-9 mx-[70px] bg-white">
        <div>
          <img
            src="/assests/logo1.svg"
            alt="logo"
            className="w-[215px] h-[53px]"
          />
        </div>
        <div className="flex gap-[20px]">
          {navItems.map((item) => (
            <span
              key={item}
              className={`text-lg px-[34px] py-[9px] rounded-full font-medium text-white`}
              style={{ backgroundColor: "#FC8A06" }}
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 bg-black text-white px-[26px] py-4 rounded-full text-lg">
          <User className="w-5 h-5 text-[#FC8A06]" />
          <span>Login/Signup</span>
        </div>
      </div>
    </div>
  );
}
