'use client';
import Link from 'next/link';
import HeroSection from './sections/HeroSection';
import React from "react";
import { useSelector } from "react-redux";
import HeroNav from "./components/Navbar";
import { VideoSection } from "./sections/VideoSection";
import FeatureCard from './sections/FeatureCard'
import {ReferEarnSection} from './sections/ReferEarnSection'
import {OurProductsSection} from './sections/OurProductsSection'
import BlogCommunityTabs from './sections/BlogCommunityTabs'
import Footer from "./components/Footer";
import PreIconTransition from './sections/scrolltrig';
import FitnessAppSection from './sections/mobilescroll';
import DownloadSection from './sections/mobileapp';
import CoinStokSection from './sections/stokcoin';
import FitnessAndIconsPage from './sections/mobilescroll';
import CoinStokSectionone from './sections/iconscroll';
// import FixedFooter from './sections/fixedfooter';
export default function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen">
    <div className="relative min-h-screen">
      <div className="fixed top-0 left-0 w-full z-[9999]">
        <HeroNav />
      </div>
      <HeroSection/> 
      <PreIconTransition/> 
      <VideoSection />
      <FeatureCard/>
      {/* <FitnessAndIconsPage/> */}
      <DownloadSection/>
      <CoinStokSection/>
      <ReferEarnSection/>   
      <OurProductsSection/>
      <BlogCommunityTabs/>
      {/* <CoinStokSectionone/> */}
      <Footer/>
      {/* <FixedFooter/> */}

    </div>
    </div>
  );
}
