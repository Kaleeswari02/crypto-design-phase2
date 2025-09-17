"use client";

import React from "react";
import { motion } from "framer-motion";
import GradientButton from "../components/GradientButton";

export const VideoSection = () => {
  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-black text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/section-2-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-10"></div>

      {/* Top-left Shadow Image */}
      <img
        src="/assets/left-shadow.png"
        alt="Shadow"
        className="absolute top-0 left-0 w-auto z-20 pointer-events-none"
      />

      {/* Section Content */}
      <section className="relative z-30 flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 md:px-16 lg:px-28 min-h-screen mt-[12rem] gap-6 md:gap-12">

        {/* Left Side */}
        <motion.div
          className="flex-1 flex flex-col justify-center max-w-sm md:max-w-md text-center md:text-left mb-24 md:mb-[250px]"
          initial="hidden"
          animate="visible"
          variants={leftVariants}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
            <img src="/assets/game-icon.png" alt="Game icon" className="w-10 sm:w-12 md:w-auto object-contain" />
            <div className="flex flex-col space-y-4">
              <h2 className="text-[18px] sm:text-[20px] md:text-[20px] font-dreiviertelfett leading-snug">
                Play Game and Earn <br /> Crypto
              </h2>
              <div className="flex space-x-2 justify-center md:justify-start">
                <div className="w-3 h-3 rounded-sm bg-green-400"></div>
                <div className="w-3 h-3 rounded-sm bg-blue-400"></div>
                <div className="w-3 h-3 rounded-sm bg-purple-600"></div>
              </div>
              <GradientButton label="Download App" onClick={() => alert("Pressed!")} className="w-fit mx-auto md:mx-0" />
            </div>
          </div>
        </motion.div>

        {/* Middle - Phone Image */}
        <div className="flex-[1] flex justify-center items-center">
          <img
            src="/assets/phone.png"
            alt="Phone mockup"
            className="w-[220px] sm:w-[280px] md:w-[360px] lg:w-[420px] xl:w-auto object-contain"
          />
        </div>

        {/* Right Side */}
        <motion.div
          className="flex-[0.8] flex flex-col justify-center max-w-md text-center md:text-left mt-12 md:mt-0"
          initial="hidden"
          animate="visible"
          variants={rightVariants}
        >
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-[700] font-dreiviertelfett mt-12 md:mt-16">
            Play exciting mobile games and earn crypto as you go! Every move you make brings you closer to valuable rewards. Start playing today, track your progress, and watch your earnings grow with each game you complete!
          </p>
          <h1 className="ml-0 sm:ml-8 md:ml-[120px] text-[40px] sm:text-[60px] md:text-[120px] lg:text-[160px] xl:text-[180px] font-dreiviertelfett text-transparent stroke-text leading-none">
            Play
          </h1>
        </motion.div>

      </section>
    </div>
  );
};
