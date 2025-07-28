"use client";

import { MapPin, User, Menu } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export default function StaticHeader() {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Browse Menu", path: "/menu" },
    { name: "Special Offers", path: "/special-offer" },
    { name: "Restaurants", path: "/restaurants" },
    { name: "Order", path: "/ordering" },
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full font-sans">
      {/* Mobile Header */}
      <div className="md:hidden w-full bg-white shadow-md font-sans text-sm rounded-b-2xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <img
            src="/assests/logo1.svg"
            alt="Logo"
            className="h-6 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div className="flex items-center bg-[#028643] text-white rounded px-2 py-1">
            <img
              src="/assests/shopicon.svg"
              alt="Basket"
              className="h-4 mr-1"
            />
            <span className="text-sm font-bold">GBP 79.89</span>
          </div>
          <Menu className="w-6 h-6 text-black" />
        </div>
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

      {/* Top Bar */}
      <div className="hidden md:flex items-center justify-between text-sm border-2 border-[#0000001A] bg-[#FAFAFA] rounded-b-2xl shadow-none mx-4 lg:mx-[100px] h-16">
        <div className="flex items-center space-x-1 p-4 lg:p-6">
          <span>🌟</span>
          <span className="hidden lg:inline">Get 5% Off your first order,</span>
          <span className="lg:hidden">5% Off first order,</span>
          <span className="font-semibold text-[#FC8A06]">Promo: ORDER5</span>
        </div>
        <div className="hidden lg:flex items-center space-x-1 text-sm p-6">
          <MapPin className="w-4 h-4" />
          <span>
            Regent Street, <span className="font-bold">A4</span>, A4201, London
          </span>
          <span className="ml-2 font-semibold text-[#FC8A06] cursor-pointer">
            Change Location
          </span>
        </div>
        <div className="flex w-64 lg:w-96 h-full bg-[#028643] rounded-b-2xl overflow-hidden">
          <div className="flex flex-1 items-center justify-center">
            <img src="/assests/shopicon.svg" className="h-[35px]" alt="shop" />
          </div>
          <div className="w-px bg-white/50 h-4/5 self-center" />
          <div className="flex flex-1 items-center justify-center">
            <span className="text-white text-sm lg:text-md font-bold">
              23 Items
            </span>
          </div>
          <div className="w-px bg-white/50 h-4/5 self-center" />
          <div className="flex flex-1 items-center justify-center">
            <span className="text-white text-sm lg:text-md font-bold">
              GBP 79.89
            </span>
          </div>
          <div className="w-px bg-white/50 h-4/5 self-center" />
          <div className="flex flex-1 items-center justify-center">
            <span className="rounded-full p-3 flex items-center justify-center">
              <img src="/assests/download.svg" alt="arrow" />
            </span>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="hidden md:flex items-center justify-between px-4 lg:px-6 py-6 lg:py-9 mx-4 lg:mx-[70px] bg-white">
        <div>
          <img
            src="/assests/logo1.svg"
            alt="logo"
            className="w-[150px] lg:w-[215px] h-[40px] lg:h-[53px] cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-[20px]">
          {navItems.map((item) => (
            <span
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={`text-lg px-[34px] py-[9px] rounded-full font-medium cursor-pointer transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-[#FC8A06] text-white"
                  : "text-black hover:bg-[#FC8A06] hover:text-white"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Tablet Nav */}
        <div className="flex lg:hidden gap-2">
          {navItems.slice(0, 3).map((item) => (
            <span
              key={item.name}
              onClick={() => handleNavigation(item.path)}
              className={`text-sm px-3 py-2 rounded-full font-medium cursor-pointer transition-all duration-200 ${
                isActive(item.path)
                  ? "bg-[#FC8A06] text-white"
                  : "text-black hover:bg-[#FC8A06] hover:text-white"
              }`}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Login Button */}
        <div
          className="flex items-center gap-3 bg-black text-white px-4 lg:px-[26px] py-3 lg:py-4 rounded-full text-sm lg:text-lg cursor-pointer"
          onClick={() => navigate("/login")}
        >
          <User className="w-4 lg:w-5 h-4 lg:h-5 text-[#FC8A06]" />
          <span className="hidden lg:inline">Login/Signup</span>
          <span className="lg:hidden">Login</span>
        </div>
      </div>
    </div>
  );
}
