'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import HeroSection from './sections/HeroSection';

export default function Home() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="min-h-screen">
<HeroSection/>    
      
    </div>
  );
}
