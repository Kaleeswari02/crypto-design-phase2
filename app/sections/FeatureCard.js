"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import Tilt from "react-parallax-tilt";
import { CardAnimation } from "./animations/CardAnimation";
import { CardHoverAnimation } from "./animations/CardHoverAnimation";

const FeatureCard = () => {
  useGSAP(() => {
    CardAnimation();
    CardHoverAnimation()
  });

  return (
   <section className="card_section bg-lightdark relative left-0 w-full remove_scrollbar flex items-center justify-center overflow-x-hidden">

   <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 py-6 px-2 h-full remove_scrollbar overflow-visible pt-20 items-center max-w-5xl">
        
        {/* Left Side Card */}
        <div className="slide_contents flex flex-col gap-3">
      <div className="flex flex-col gap-8">
      {/* ✅ First Card - STAKING */}
      <div
        className="flex flex-col bg-[#14F195] rounded-[32px] p-8 hover:scale-105 hover:-translate-y-2 transition-all duration-300 will-change-transform"
      >
        <span className="text-darkBlue font-extrafett text-[28px] mb-3.5">
          STAKING
        </span>
        <span className="text-darkBlue text-lg mb-4 font-kraeftig">
          Stake your SROK coin to <br /> receive passive income.
        </span>
        <div className="flex justify-end">
          <img
            src="/assets/feature-icon1.png"
            className="w-[150px] h-[164px] object-contain"
            alt="staking"
          />
        </div>
      </div>

      {/* ✅ Second Card - Web2 Web3 */}
      <div
        className="bg-[#DF8EFF] text-black text-[30px] font-extrafett py-[49px] px-10 rounded-[32px] text-center hover:scale-105 hover:-translate-y-2 transition-all duration-300"
      >
        Web2 - Web3
      </div>
    </div>        </div>

        {/* Center Animated Cards */}
        <Tilt className="z-[999999999] relative flex justify-center">
          <div className="card_border rounded-xl lg:max-w-[20rem] flex justify-center relative">
            
            {/* Title */}
            <div className="absolute top-1/3 left-0 -translate-y-1/2 title z-[999999] flex flex-col items-center text-center w-full card_title">
              <h1
                className="font-extrafettkursiv text-5xl sm:text-6xl font-bold leading-[1.2] will-change-transform px-4"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
              >
                A <br /> Thriving Ecosystem for Web3 Innovation
              </h1>
            </div>

            {/* Two stacked cards */}
          <div className="flex justify-center relative">
          <div className="rounded-lg overflow-hidden card_component relative h-[520px]">
            {/* Purple Card */}
            <img
              src="/assets/purple-card.png"
              alt="Purple Card"
              className="w-auto h-full object-cover purple_card rounded-[30px]"
            />
            {/* Feature Card */}
            <img
              src="/assets/feature-card.png"
              alt="Feature Card"
              className="w-auto h-full  rounded-[30px] object-cover absolute top-0 left-0 feature_card opacity-0"
            />
          </div>
        </div>

          </div>
        </Tilt>

        {/* Right Side Card */}
        <div className="slide_contents">
              <div className="flex flex-col gap-8">
      {/* ✅ Wallet Card */}
      <div
        className="relative flex flex-col bg-[#DFFFF9] rounded-[32px] p-8 overflow-hidden 
        hover:scale-105 hover:-translate-y-2 transition-all duration-300"
      >
        <span className="text-[#1E1E1E] text-[28px] mb-4 font-extrafett">
          Wallet
        </span>
        <span className="text-[#1E1E1E] text-lg mb-16 font-kraeftig">
          Buy, Sell and transfer your <br /> STOK coin in wallet.
        </span>
        <img
          src="/assets/feature-icon2.png"
          alt="wallet"
          width={160}
          height={160}
          className="absolute bottom-0 right-0 w-auto object-contain"
        />
      </div>

      {/* ✅ Mini-Game Card */}
      <div
        className="relative flex flex-col bg-[#D1FFC4] rounded-[32px] p-8 overflow-hidden hover:scale-105 hover:-translate-y-2 transition-all duration-300"
      >
        <span className="text-[#1E1E1E] text-[32px] mb-4 font-extrafett">
          Mini-Game
        </span>
        <span className="text-[#1E1E1E] text-lg mb-16 font-kraeftig">
          Play mini-game and get exclusive rewards.
        </span>
        <img
          src="/assets/feature-icon3.png"
          alt="mini-game"
          width={160}
          height={160}
          className="absolute bottom-0 right-0 w-auto object-contain"
        />
      </div>
    </div>  
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
