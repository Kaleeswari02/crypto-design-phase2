import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 
gsap.registerPlugin(ScrollTrigger);
 
export const OurProductsSection = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const sectionRefs = useRef([]);
  const leftCardRefs = useRef([]);
  const rightCardRefs = useRef([]);
 
  const addToRefs = (el, type) => {
    if (!el) return;
    if (type === "section") sectionRefs.current.push(el);
    if (type === "left") leftCardRefs.current.push(el);
    if (type === "right") rightCardRefs.current.push(el);
  };
 
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
 
  // Initial fade-in for first section cards
  useEffect(() => {
    gsap.set(cardRefs.current, { opacity: 0, y: 50 });
    gsap.to(cardRefs.current, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      stagger: 0.3,
      ease: "power3.out",
    });
  }, []);
 
  // Scroll-triggered section animations
  useEffect(() => {
    const sections = sectionRefs.current;
    gsap.set(sections, { opacity: 0, y: 50 });
 
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=" + containerRef.current.clientHeight * sections.length,
        scrub: 1.2,
        pin: true,
      },
    });
 
    sections.forEach((sec) => {
      tl.to(sec, { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" })
        .to(sec, { opacity: 0, y: -50, duration: 1.2, ease: "power2.out" }, "+=0.3");
    });
 
    return () => {
      ScrollTrigger.killAll();
    };
  }, []);
 
  // Cursor-based parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const xRatio = (e.clientX / innerWidth - 0.5) * 2;
      const yRatio = (e.clientY / innerHeight - 0.5) * 2;
 
      leftCardRefs.current.forEach((el) => {
        gsap.to(el, {
          x: xRatio * 20,
          y: yRatio * 20,
          rotationY: xRatio * 10,
          rotationX: -yRatio * 10,
          duration: 0.3,
        });
      });
 
      rightCardRefs.current.forEach((el) => {
        gsap.to(el, {
          x: xRatio * 20,
          y: yRatio * 20,
          rotationY: xRatio * 10,
          rotationX: -yRatio * 10,
          duration: 0.3,
        });
      });
    };
 
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
 
  // Continuous swipe animation for left/right cards
  useEffect(() => {
    // Left cards swipe top → bottom
    leftCardRefs.current.forEach((el) => {
      gsap.to(el, {
        y: "+=300", // distance to scroll
        duration: 8,
        ease: "linear",
        repeat: -1,
        modifiers: {
          y: (y) => {
            let val = parseFloat(y);
            return (val % 600) - 300 + "px"; // wrap around
          },
        },
      });
    });
 
    // Right cards swipe bottom → top
    rightCardRefs.current.forEach((el) => {
      gsap.to(el, {
        y: "-=300", // distance to scroll
        duration: 8,
        ease: "linear",
        repeat: -1,
        modifiers: {
          y: (y) => {
            let val = parseFloat(y);
            return (val % 600) - 300 + "px"; // wrap around
          },
        },
      });
    });
  }, []);
 
  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden bg-lightdark">
      {/* Web2 Products Section */}
      <section
        ref={(el) => addToRefs(el, "section")}
        className="web-products-section absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-white text-6xl sm:text-7xl font-halbfett mb-4">Our</h2>
          <h2 className="text-white text-6xl sm:text-7xl font-halbfett flex items-center justify-center gap-2">
            Web2
            <img src="/assets/small-icon.png" alt="logo" className="w-12 inline-block" />
            Products
          </h2>
        </div>
 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl w-full">
          {products.map((p, i) => (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="relative flex flex-col items-center overflow-hidden rounded-[20px]"
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
      </section>
 
      {/* Product Sections */}
      {products.map((p, idx) => (
        <div
          key={idx}
          ref={(el) => addToRefs(el, "section")}
          className="carousel-section absolute inset-0 flex items-center justify-center opacity-0"
        >
          {/* Left Card */}
          <div
            ref={(el) => addToRefs(el, "left")}
            className="absolute left-[-2%] top-[40%] -translate-y-1/2 w-[240px] z-10"
          >
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
 
          {/* Center Heading */}
          <div className="text-center z-20">
            <h2 className="text-white text-[110px] font-[800] font-extrafett leading-none">{p.title}</h2>
            <span className="text-white text-[28px] font-kraeftig block mt-4">{p.subtitle}</span>
          </div>
 
          {/* Right Video */}
          <div
            ref={(el) => addToRefs(el, "right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-[240px] h-[280px] z-10"
          >
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
 