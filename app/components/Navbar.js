"use client";
import React, { useState } from "react";

export default function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-lightdark">
      {/* Centered container */}
      <div className="flex justify-center py-6">
        <div className="flex items-center gap-6">
          {/* Left: Logo + Links inside pill */}
          <div className="flex items-center bg-black py-4 px-6 rounded-full border-2 border-[#2D2D2D]">
            <img
              src="assets/logo.webp"
              className="w-[196px] h-[30px] object-contain"
              alt="Logo"
            />
            <div className="hidden md:flex items-center gap-8 font-dreiviertelfett text-[16px] font-[700] ml-8">
              <span className="text-white cursor-pointer">Features</span>
              <span className="text-white cursor-pointer">Application</span>
              <span className="text-white cursor-pointer">Game Equip</span>
              <span className="text-white cursor-pointer">Blog</span>
            </div>
          </div>

          {/* Right: Desktop Button */}
          <button
            className="bg-gradientBtn hidden md:flex rounded-full px-7 py-3 font-dreiviertelfett text-[16px] font-[700] text-lightdark"
            onClick={() => alert("Pressed!")}
          >
            Connect Wallet
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 px-6">
          <div className="flex flex-col gap-4 bg-black rounded-2xl p-6 border border-[#2D2D2D] font-dreiviertelfett text-[16px] font-[700]">
            <span className="text-white cursor-pointer">Features</span>
            <span className="text-white cursor-pointer">Application</span>
            <span className="text-white cursor-pointer">Game Equip</span>
            <span className="text-white cursor-pointer">Blog</span>
            <button
              className="bg-gradientBtn w-full rounded-full px-7 py-3 font-dreiviertelfett text-[16px] font-[700] text-lightdark"
              onClick={() => alert("Pressed!")}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
