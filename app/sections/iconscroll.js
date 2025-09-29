import React, { useEffect, useState } from 'react';

const CoinStokSectionone = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const orbitingCoins = [
    { id: 1, image: '/assets/rotateicon1.webp' },
    { id: 2, image: '/assets/rotateicon2.webp' },
    { id: 3, image: '/assets/rotateicon3.webp' },
    { id: 4, image: '/assets/rotateicon4.webp' },
    { id: 5, image: '/assets/rotateicon5.webp' },
    { id: 6, image: '/assets/rotateicon6.webp' },
    { id: 7, image: '/assets/rotateicon7.webp' },
  ];

  return (
    <div className="orbit-container">
      {/* Orbiting Coins Container */}
      <div className={`spinner-layer ${mounted ? 'animate-spin-trigger' : ''}`}>
        {/* Center Coin */}
        <div className="center-coin">
          <img src="/assets/stok.webp" alt="center coin" />
        </div>

        {/* Orbiting Coins */}
        {orbitingCoins.map((coin, index) => {
          const angle = (index / 7) * 360;
          const radians = (angle * Math.PI) / 180;
          const radius = 275;
          const x = Math.cos(radians) * radius;
          const y = Math.sin(radians) * radius;

          return (
            <div
              key={coin.id}
              className="rotating-coin"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
              }}
            >
              <img src={coin.image} alt="rotating coin" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoinStokSectionone;
