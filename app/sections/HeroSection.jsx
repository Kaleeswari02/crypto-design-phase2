import React from "react";

export default function HeroSection() {
  return (
    <section className="flex flex-col bg-white">
      <div className="bg-[#1E1E1E] flex flex-col pt-[20px]">
        
        {/* Logo / Image */}
        <img
          src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wdbxHpkCoL/mbhwz4r6_expires_30_days.png"
          alt="Hero Logo"
          className="mx-auto h-[223px] mb-[58px] object-contain"
        />

        {/* Heading + Description */}
        <div className="flex flex-col items-center text-center mb-[31px] mx-auto max-w-[826px]">
          <span className="text-white text-3xl font-bold">
            Feel the rush with every move, like the next big crypto spike! Where
            movement meets excitement—get ready for fun-filled workouts!
          </span>
        </div>

        {/* Background Play/Run/Earn Section */}
        <div
          className="bg-[url('https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wdbxHpkCoL/qpw8g4k6_expires_30_days.png')] 
          bg-cover bg-center w-full max-w-[1100px] mx-auto pt-[236px] pb-[76px]"
        >
          <div className="flex justify-between items-center px-[87px]">
            <span className="text-white text-3xl font-bold">Play</span>
            <span className="text-white text-3xl font-bold">Run</span>
            <span className="text-white text-3xl font-bold">Earn</span>
          </div>
        </div>

        <div className="h-[158px]" />
      </div>
    </section>
  );
}
