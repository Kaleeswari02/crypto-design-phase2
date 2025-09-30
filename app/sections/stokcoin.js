import React from 'react';
import { useEffect, useState } from 'react';

const CoinStokSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  // const [isAboveCenter, setIsAboveCenter] = useState(false);

  // useEffect(() => {
  //   // Simulating coin movement. In a real scenario, you can replace it with your animation logic.
  //   setTimeout(() => setIsAboveCenter(true), 2000); // After 2 seconds, the coin will move above the center.
  //   setTimeout(() => setIsAboveCenter(false), 4000); // After 4 seconds, it will move below the center again.
  // }, []);
  // Sample coin icons - replace with your actual icons
  const orbitingCoins = [
    { id: 1, image: '/assets/rotateicon1.webp', },
    { id: 2, image: '/assets/rotateicon2.webp',  },
    { id: 3, image: '/assets/rotateicon3.webp',    },
    { id: 4, image: '/assets/rotateicon4.webp',},
    { id: 5, image: '/assets/rotateicon5.webp',  },
    { id: 6, image: '/assets/rotateicon6.webp',  },
    { id: 7, image: '/assets/rotateicon7.webp',  },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E1E] relative overflow-hidden p-5">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Rotating Coins */}
          <div className="relative flex items-center justify-center backgroundgreen">
            <div className="relative w-96 h-96">
              {/* Green glow effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-green-500/20 rounded-full blur-3xl">
                </div>
              </div>
        {/* Central STOK Coin */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 centerCoinindex ">
            <div className="rounded-full stockCoinShape flex center-coin">
              <img src="/assets/stok.webp" alt="stok.webp" />
            </div>
        </div>


{/* Orbiting Coins */}
<div className={`absolute spinner-layer inset-0 ${mounted ? 'animate-spin-trigger' : ''}`}>
  {orbitingCoins.map((coin, index) => {
    const angle = (index / 7) * 360;
    const radians = (angle * Math.PI) / 180;
    const radius = 285;
    const x = Math.cos(radians) * radius;
    const y = Math.sin(radians) * radius;

    return (
<div
  key={coin.id}
  className="absolute top-1/2 left-1/2 rotatingcoinindex "
  style={{
    transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
    zIndex: -12, /* Ensure they are behind the central coin */
  }}
>
  <div className="w-40 h-40 flex items-center justify-center transform hover:scale-110 transition-transform ">
    <div className="text-white text-xl font-bold rotatingCoin">
      <img src={coin.image} alt="rotatingcoin" className='rotatingcoinindex  '/>
    </div>
  </div>
</div>

    );
  })}
</div>

            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="relative z-10 rightSidecontent">
                  <div className='stockheadpart'>
                    <img src='/assets/stockheading.webp' alt='stockheading'/>
                  </div>
            
            {/* Description */}
            <p className="text-gray-400 text-lg mb-8 stockDes mt-5">
            Key to Fitness
            </p>
            
            {/* Icons */}
            <div className="stocksmallicons">
              {/* Play Icon */}
              <div className="text-center mt-10">
                <div className="w-16 h-16 rounded-full bg-[#28d1af] flex items-center justify-center mb-2 ">
                   <img src='/assets/play.webp' alt='play' className='stockIconsize'/>
                </div>
                <p className="text-gray-400 text-sm icontextfont">PLAY</p>
              </div>
              
              {/* Run Icon */}
              <div className="text-center mt-10">
                <div className="w-16 h-16 rounded-full bg-[#7a28d3] flex items-center justify-center mb-2 ">
                  <img src='/assets/run.webp' alt='run' className='stockIconsize'/>
                </div>
                <p className="text-gray-400 text-sm icontextfont">RUN</p>
              </div>
              
              {/* Earn Icon */}
              <div className="text-center mt-10">
                <div className="w-16 h-16 rounded-full bg-[#3a9fea] flex items-center justify-center mb-2 ">
                    <img src='/assets/earn.webp' alt='earn' className='stockIconsize'/>
                </div>
                <p className="text-gray-400 text-sm icontextfont">EARN</p>
              </div>
              <div className="glasssquare mt-20">
                  <img src='/assets/glasssquare.webp' alt=''/>
              </div>
            </div>
            
            {/* Buy Button */}
            <div className='Buybtnarea'>
                <button className="px-8 py-3 bg-gradient-to-r from-[#14F195] via-[#399FE9] to-[#7928D2] rounded-full text-white font-semibold text-lg hover:shadow-lg hover:shadow-green-500/25 transition-all transform hover:scale-105">
                  Buy
                </button>
            </div>
            
            {/* Decorative Particles */}
             
          </div>
        </div>
      </div>
      <div className='glassRec'>
          <img src='/assets/glassrec.webp' alt=''/>
      </div>

  
    </div>
  );
};

export default CoinStokSection;