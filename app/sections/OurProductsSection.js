import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const OurProductsSection = () => {
  const containerRef = useRef(null);
  const slideRefs = useRef([]);

  const products = [
    {
      title: "WALKING PAD",
      subtitle: "Lorem Ipsum Dolor Sit Amet, Consectetur...",
      leftImg: "/assets/walkingpad-cover.png",
      rightVideo: "/assets/products-video.mp4",
    },
    {
      title: "TREADMILL",
      subtitle: "Lorem Ipsum Dolor Sit Amet, Consectetur...",
      leftImg: "/assets/treadmill-cover.png",
      rightVideo: "/assets/products-video.mp4",
    },
    {
      title: "SMART BIKE",
      subtitle: "Lorem Ipsum Dolor Sit Amet, Consectetur...",
      leftImg: "/assets/sbike-cover.png",
      rightVideo: "/assets/products-video.mp4",
    },
  ];

  useGSAP(
    () => {
      const slides = slideRefs.current;

      // Set initial states - hide all except first
      gsap.set(slides, { 
        autoAlpha: 0,
        y: 100,
        scale: 0.95
      });
      gsap.set(slides[0], { 
        autoAlpha: 1,
        y: 0,
        scale: 1
      });

                // Set initial states for product detail elements
      slides.forEach((slide, index) => {
        if (index > 0) { // Skip the grid slide
          const leftCard = slide.querySelector('.left-card');
          const rightCard = slide.querySelector('.right-card');
          const centerHeading = slide.querySelector('.center-heading');
          
          gsap.set(leftCard, { y: 150, opacity: 0 }); // Float up from bottom
          gsap.set(rightCard, { y: -150, opacity: 0 }); // Float down from top
          gsap.set(centerHeading, { y: 30, opacity: 0 });
        }
      });

      // Timeline for perfect hide/show transitions
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1600%", // Much longer for very slow scrolling (16x viewport height)
          scrub: 3, // Very slow scrub for deliberate movement
          pin: true,
          snap: {
            snapTo: [0, 0.33, 0.66, 1], // Exact snap points for each slide
            duration: { min: 1.5, max: 1.5 }, // Long snap duration for pause effect
            delay: 0.5, // Longer delay to let users watch content
          },
        },
      });

      slides.forEach((slide, i) => {
        if (i === 0) return; // grid already visible

        const sectionProgress = (i - 1) / 3; // Progress for this section (0, 0.33, 0.66)
        const timePosition = sectionProgress * 12; // Much longer timeline spacing (0, 4, 8)
        
        // Hide previous slide (very slow)
        tl.to(slides[i - 1], { 
          autoAlpha: 0,
          y: -80,
          scale: 0.98,
          duration: 1.5, // Very slow hide transition
          ease: "power1.inOut"
        }, timePosition)
        
        // Show current slide (very slow)
        .fromTo(
          slides[i],
          { 
            autoAlpha: 0, 
            y: 80,
            scale: 0.98
          },
          { 
            autoAlpha: 1, 
            y: 0,
            scale: 1,
            duration: 1.5, // Very slow show transition
            ease: "power1.inOut"
          },
          timePosition + 1.0
        );

        // Animate product detail elements (extremely slow)
        if (i > 0) {
          const leftCard = slide.querySelector('.left-card');
          const rightCard = slide.querySelector('.right-card');
          const centerHeading = slide.querySelector('.center-heading');
          
          tl.to(centerHeading, {
            y: 0,
            opacity: 1,
            duration: 1.5, // Slow center heading
            ease: "power1.out",
          }, timePosition + 1.5)
          
          .to(leftCard, {
            y: 0,
            opacity: 1,
            duration: 1.5, // Extremely slow floating up
            ease: "power1.out",
          }, timePosition + 1.5)
          
          .to(rightCard, {
            y: 0,
            opacity: 1,
            duration: 1.5, // Extremely slow floating down
            ease: "power1.out",
          }, timePosition + 1.5);
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-lightdark overflow-hidden"
    >
      {/* Slide 0: Grid */}
      <div
        ref={(el) => (slideRefs.current[0] = el)}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-white text-6xl sm:text-7xl font-halbfett mb-4">Our</h2>
          <h2 className="text-white text-6xl sm:text-7xl font-halbfett flex items-center justify-center gap-2">
            Web2
            <img
              src="/assets/small-icon.png"
              alt="logo"
              className="w-12 inline-block"
            />
            Products
          </h2>
        </div>

        {/* Cards wrapper with background */}
        <div className="relative w-full max-w-6xl flex justify-center">
          <img
            src="/assets/product-bg-blur.png"
            alt="Cards Background"
            className="absolute bottom-0 left-0 w-auto object-contain pointer-events-none select-none z-0 mt-20"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full relative z-10">
            {products.map((p, i) => (
              <div
                key={i}
                className="relative flex flex-col items-center overflow-hidden rounded-[20px] transform transition-transform duration-500 hover:scale-105"
              >
                <img src={p.leftImg} alt={p.title} className="w-auto rounded-[20px]" />
                <div className="absolute bottom-4 w-full text-center px-6 py-4">
                  <h3 className="text-white text-[18px] mb-2 font-halbfett">{p.title}</h3>
                  <p className="text-white/90 text-[12px] font-buch line-clamp-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slide 1–3: Product showcase */}
      {products.map((p, i) => (
        <div
          key={i}
          ref={(el) => (slideRefs.current[i + 1] = el)}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Left card */}
          <div className="left-card absolute left-[5%] top-[40%] -translate-y-1/2 w-[240px] z-10">
            <div className="relative flex flex-col items-center overflow-hidden rounded-[20px] shadow-lg bg-black/30 backdrop-blur-md">
              <img src={p.leftImg} alt={p.title} className="w-full h-auto rounded-[20px]" />
              <div className="absolute bottom-3 left-0 w-full text-center px-4 py-2">
                <h3 className="text-white text-[18px] mb-1 font-halbfett">{p.title}</h3>
                <p className="text-white/90 text-[12px] font-buch line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </div>
            </div>
          </div>

          {/* Center heading */}
          <div className="center-heading text-center z-20">
            <h2 className="text-white text-[110px] font-[800] font-extrafett leading-none">
              {p.title}
            </h2>
            <span className="text-white text-[28px] font-kraeftig block mt-4">{p.subtitle}</span>
          </div>

          {/* Right video */}
          <div className="right-card absolute right-[5%] top-1/2 -translate-y-1/2 w-[240px] h-[280px] z-10">
            <div className="relative flex flex-col items-center overflow-hidden rounded-[20px] shadow-lg bg-black/30 backdrop-blur-md w-full h-full">
              <video
                src={p.rightVideo}
                poster={p.leftImg}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};