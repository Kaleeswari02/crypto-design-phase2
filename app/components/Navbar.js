"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-lightdark">
      {/* Centered container */}
      <div className="flex justify-between items-center px-6 py-6 md:justify-center">
        {/* Left: Logo + Links inside pill */}
        <div className="flex items-center bg-black py-2 px-4 md:py-3 md:px-5 lg:py-4 lg:px-6 rounded-full border-2 border-[#2D2D2D]">
          <img src="assets/logo.webp" className="w-[120px] md:w-[160px] lg:w-[196px] h-[28px] md:h-[30px] object-contain miniTablet:w-[120px]" alt="Logo" />
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 font-dreiviertelfett text-[16px] miniTablet:text-[12px] font-[700] ml-8">
            <span className="text-white cursor-pointer">Features</span>
            <span className="text-white cursor-pointer">Application</span>
            <span className="text-white cursor-pointer">Game Equip</span>
            <span className="text-white cursor-pointer">Blog</span>
          </div>
        </div>

        {/* Right: Desktop Button */}
        <button className="bg-gradientBtn hidden md:flex rounded-full miniTablet:text-[12px] px-7 py-3 font-dreiviertelfett text-[16px] font-[700] text-lightdark ml-6" onClick={() => alert("Pressed!")}>
          Connect Wallet
        </button>

        {/* Mobile Hamburger / Close Button with background */}
        <button className="md:hidden flex items-center justify-center w-11 h-11 bg-black border border-[#2D2D2D] rounded-full text-white ml-4" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-2 px-6 pb-6">
          <div className="flex flex-col gap-4 bg-black rounded-2xl p-6 border border-[#2D2D2D] font-dreiviertelfett text-[16px] font-[700]">
            <span className="text-white cursor-pointer">Features</span>
            <span className="text-white cursor-pointer">Application</span>
            <span className="text-white cursor-pointer">Game Equip</span>
            <span className="text-white cursor-pointer">Blog</span>
            <button className="bg-gradientBtn w-full rounded-full px-7 py-3 font-dreiviertelfett text-[16px] font-[700] text-lightdark" onClick={() => alert("Pressed!")}>
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
