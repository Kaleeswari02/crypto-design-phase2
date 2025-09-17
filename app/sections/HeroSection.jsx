import { useState, useEffect } from 'react';

export default function AnimatedIconsPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const icons = [
    { id: 1, bgColor: '#28d1af' },
    { id: 2, bgColor: '#7a28d3' },
    { id: 3, bgColor: '#3a9fea' },
  ];

  // Drop positions for 5 drops in a circular pattern
  const getDropStyle = (index, isHovered) => {
    const positions = [
      { x: -20,  y: -290, angle: -45 },
      { x: 200,  y: -100, angle: 27 },
      { x: 185,  y: 200,  angle:  98 },
      { x: -155, y: 230,  angle: 160 },
      { x: -300, y: -190, angle: 250 },
    ];
 // Calculate the angle for rotation so flat edge faces the circle
 const angle = positions[index].angle; // use the precomputed angle
    return {
      transform: isHovered
      ? `translate(${positions[index].x}px, ${positions[index].y}px) rotate(${angle + 90}deg) scale(1)`
      : `translate(${positions[index].x * 0.65}px, ${positions[index].y * 0.65}px) rotate(${angle + 90}deg) scale(0)`,
    transitionDelay: isHovered ? `${index * 50}ms` : '0ms',
    };
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] flex items-center justify-center p-8">
      <div className="flex gap-16 items-center">
        {icons.map((item, iconIndex) => (
          <div
            key={item.id}
            className={`relative transform transition-all duration-700 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
            }`}
            style={{ transitionDelay: `${iconIndex * 200}ms` }}
            onMouseEnter={() => setHoveredIndex(iconIndex)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Main Icon Circle */}
            {/* Main Icon Circle */}
<div
  tabIndex={0}
  className={`relative w-80 h-80 rounded-full flex items-center justify-center cursor-pointer transform transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-white/30 ${
    hoveredIndex === iconIndex ? 'scale-110' : 'scale-100'
  }`}
  style={{ backgroundColor: item.bgColor }}
>
  {/* Icon Image - Animated from bottom to center */}
  {iconIndex === 0 && (
    <img
      src="/play.webp"
      alt="Play"
      className={`object-contain opacity-90 transform transition-all duration-500 ease-out ${
        hoveredIndex === iconIndex ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    />
  )}
  {iconIndex === 1 && (
    <img
      src="/run.webp"
      alt="Run"
      className={`object-contain opacity-90 transform transition-all duration-500 ease-out ${
        hoveredIndex === iconIndex ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    />
  )}
  {iconIndex === 2 && (
    <img
      src="/earn.webp"
      alt="Earn"
      className={`object-contain opacity-90 transform transition-all duration-500 ease-out ${
        hoveredIndex === iconIndex ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
      }`}
    />
  )}
</div>

            {/* Bursting Drops - Only 5 drops */}
            <div className="absolute inset-0 pointer-events-none">
  {[0, 1, 2, 3, 4].map((dropIndex) => (
    <div
      key={dropIndex}
      className="absolute top-1/2 left-1/2 w-9 h-9 movingdrop"
      style={{
        backgroundColor: item.bgColor,
        marginLeft: "-5px",
        marginTop: "-5px",
        boxShadow: `0 0 15px ${item.bgColor}50`,
        transition: "transform 600ms cubic-bezier(0.2, 0, 0.2, 1), opacity 300ms ease-out",
        ...getDropStyle(dropIndex, hoveredIndex === iconIndex),
        ...(hoveredIndex === iconIndex
          ? {
              animation: `dropBurst 1s ${dropIndex * 80}ms forwards`,
            }
          : {
              opacity: 0.3,
              animation: `dropReturn 600ms ${dropIndex * 50}ms forwards`,
            }),
      }}
    />
  ))}
</div>
            {/* Ripple */}
            <div/>
          </div>
        ))}
      </div>
    </div>
  );
}
