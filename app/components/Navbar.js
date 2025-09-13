"use client";
import React, { useState } from "react";

export default function HeroNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white">
      <div className="bg-[#1E1E1E] pt-6">
        {/* Navbar */}
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 px-6">
          {/* Left: Logo + Links */}
          <div className="flex flex-1 items-center bg-black py-4 px-6 rounded-full border-2 border-[#2D2D2D]">
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wdbxHpkCoL/bfqkpvla_expires_30_days.png"
              className="w-[196px] h-[30px] object-contain"
              alt="Logo"
            />
            <div className="hidden md:flex flex-1 justify-end">
              <span className="text-white text-lg font-bold mr-6 cursor-pointer">
                Features
              </span>
              <span className="text-white text-lg font-bold mr-6 cursor-pointer">
                Application
              </span>
              <span className="text-white text-lg font-bold mr-6 cursor-pointer">
                Game Equip
              </span>
              <span className="text-white text-lg font-bold mr-6 cursor-pointer">
                Blog
              </span>
            </div>
          </div>

          {/* Right: Desktop Button */}
          <button
            className="hidden md:flex rounded-full px-7 py-3 font-bold text-lg text-[#1E1E1E]"
            style={{
              background:
                "linear-gradient(270deg, #7928D2 0%, #399FE9 50%, #14F195 100%)",
            }}
            onClick={() => alert("Pressed!")}
          >
            Connect Wallet
          </button>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden text-white text-2xl ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden mt-4 px-6">
            <div className="flex flex-col gap-4 bg-black rounded-2xl p-6 border border-[#2D2D2D]">
              <span className="text-white text-lg font-bold cursor-pointer">
                Features
              </span>
              <span className="text-white text-lg font-bold cursor-pointer">
                Application
              </span>
              <span className="text-white text-lg font-bold cursor-pointer">
                Game Equip
              </span>
              <span className="text-white text-lg font-bold cursor-pointer">
                Blog
              </span>
              <button
                className="w-full rounded-full px-7 py-3 font-bold text-lg text-[#1E1E1E]"
                style={{
                  background:
                    "linear-gradient(270deg, #7928D2 0%, #399FE9 50%, #14F195 100%)",
                }}
                onClick={() => alert("Pressed!")}
              >
                Connect Wallet
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
