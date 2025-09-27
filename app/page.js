'use client';

import Link from 'next/link';

import HeroSection from './sections/HeroSection';
import Iconscroll from './sections/iconscroll';
import React from "react";
import { useSelector } from "react-redux";
import HeroNav from "./components/Navbar";
import { VideoSection } from "./sections/VideoSection";
import PreIconTransition from './sections/scrolltrig';
import FitnessAppSection from './sections/mobilescroll';
import DownloadSection from './sections/mobileapp';
import CoinStokSection from './sections/stokcoin';

export default function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen">

      
    <div className="relative min-h-screen">
      {/* Navbar floating above video */}
      <div className="absolute top-0 left-0 w-full z-20">
        <HeroNav />
      </div>
      <HeroSection/> 
      {/* <Iconscroll/>   */}
      <PreIconTransition/> 
      {/* Video Background Section */}
      {/* <VideoSection /> */}
      <FitnessAppSection/>
      <DownloadSection/>
      <CoinStokSection/>
    </div>
    </div>
  );
}
