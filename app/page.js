'use client';
import React from "react";
import { useSelector } from "react-redux";
import HeroNav from "./components/Navbar";
import { VideoSection } from "./sections/VideoSection";
import FeatureCard from './sections/FeatureCard'
import {ReferEarnSection} from './sections/ReferEarnSection'
import {OurProductsSection} from './sections/OurProductsSection'
import BlogCommunityTabs from './sections/BlogCommunityTabs'
import Footer from "./components/Footer";

export default function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="relative min-h-screen">
      {/* Navbar floating above video */}
      <div className="fixed top-0 left-0 w-full z-[9999]">
        {/* <HeroNav /> */}
      </div>
{/* 
      <VideoSection />
      <FeatureCard/>
      <ReferEarnSection/>     
      <OurProductsSection/>
      <BlogCommunityTabs/> */}
      <Footer/>
    </div>
  );
}
