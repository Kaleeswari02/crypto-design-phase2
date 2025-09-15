'use client';
import React from "react";
import { useSelector } from "react-redux";
import HeroNav from "./components/Navbar";
import { VideoSection } from "./sections/VideoSection";

export default function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="relative min-h-screen">
      {/* Navbar floating above video */}
      <div className="absolute top-0 left-0 w-full z-20">
        <HeroNav />
      </div>

      {/* Video Background Section */}
      <VideoSection />
    </div>
  );
}
