'use client';

import React, { useEffect, useRef, useState } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Iconscroll
 *
 * Behavior:
 *  - Section has a fixed height (100vh) so all animation occurs inside it.
 *  - We compute a normalized `progress` (0..1) for how far the user has scrolled THROUGH the section.
 *  - Phase 1: last icon (index 2) lifts up between pLiftStart..pLiftEnd.
 *  - Phase 2: content fades and moves up between pContentStart..pContentEnd while all icons move to bottom.
 */

const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const lerp = (a, b, t) => a + (b - a) * t;
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const Iconscroll = () => {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0); // normalized 0..1

  /* --------------------------- TUNABLE CONSTANTS --------------------------- */
  const SECTION_VH = 150; // section height is now 100vh
  const ICON_SPACING_START = 250; // px, horizontal distance between icons at start
  const ICON_SPACING_END = 120; // px, horizontal distance between icons at final state
  const ICON_LIFT_Y = -150; // px: how far the last icon moves upwards
  const ICON_BOTTOM_Y = 750; // px: how far icons move down at the end

  // normalized progress ranges (0..1). Adjust these to change when each part starts/ends.
  const pLiftStart = 0.05;   // when last icon starts lifting
  const pLiftEnd = 0.44;     // when last icon finishes lifting and holds position
  const pContentStart = 0.45; // when content starts to appear & icons move down
  const pContentEnd = 0.85;   // when content animation & icons-down finish
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      const sectionH = rect.height;
      const totalScrollable = Math.max(sectionH - windowH, 1);
      const scrolled = clamp(-rect.top, 0, totalScrollable);
      const p = scrolled / totalScrollable;
      setProgress(clamp(p, 0, 1));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    // Cleanup scroll events
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Helper function to compute transforms for each icon
  const getIconStyle = (index) => {
    const baseX = (index - 1) * ICON_SPACING_START;
    const finalX = (index - 1) * ICON_SPACING_END;

    // Phase 1 (lift last icon)
    const tLift = clamp((progress - pLiftStart) / (pLiftEnd - pLiftStart), 0, 1);
    const liftAmount = easeOutCubic(tLift);
    const yAfterLift = index === 2 ? lerp(0, ICON_LIFT_Y, liftAmount) : 0;

    // Phase 2 (content in + icons to bottom)
    const tContent = clamp((progress - pContentStart) / (pContentEnd - pContentStart), 0, 1);
    const contentAmount = easeOutCubic(tContent);

    const x = lerp(baseX, finalX, contentAmount);
    const y = lerp(yAfterLift, ICON_BOTTOM_Y, contentAmount);

    // Scale the icons from 100px (1) to 60px (0.6)
    const scale = lerp(1, 0.6, contentAmount); // Scale down to 60px when icons reach the bottom

    const transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;

    return {
      transform,
      WebkitTransform: transform,
      transition: "transform 120ms linear", // small smoothing; actual position is driven by progress
    };
  };

  // Content style (appears between pContentStart .. pContentEnd)
  const contentT = clamp((progress - pContentStart) / (pContentEnd - pContentStart), 0, 1);
  const contentEase = easeOutCubic(contentT);
  const contentOpacity = contentEase;
  const contentTranslateY = lerp(120, -40, contentEase);

  /* ------------------------------ COLORS / ICONS --------------------------- */
  const bgClasses = ["bg-cyan-400", "bg-purple-500", "bg-blue-500"];
  const iconImgs = ["/play.webp", "/run.webp", "/earn.webp"];
  const iconTitles = ["Play", "Run", "Earn"]; // Headings for the icons
  /* ------------------------------------------------------------------------ */

  useEffect(() => {
    // GSAP ScrollTrigger for the scroll animation
    gsap.fromTo(
      '.icon-container .icon', 
      { opacity: 0, y: -100 }, 
      {
        opacity: 1, 
        y: 0, 
        stagger: 0.1, // Add stagger effect for the icons
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top', // Start when section hits the top of the viewport
          end: '+=1000', // Adjust if you need longer scroll effect within 100vh
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      '.content-container', 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1, 
        y: 0, 
        ease: 'power2.out', 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%', // Start when 50% of the section is visible
          end: '+=500', // Adjust to control content fade-in duration
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ height: `${SECTION_VH}vh`, overflow: 'hidden' }} // Make sure section is 100vh and no overflow
      className="relative bg-[#1E1E1E] text-white"
    >
      {/* center stage container */}
      <div className="w-full h-full relative">
        {/* ICONS: absolutely centered horizontally, placed visually near the top portion of the section.
            We apply per-icon translate3d transforms (x,y) calculated from normalized progress. */}
        <div
          className="absolute left-1/2 icon-container"
          style={{
            top: "40vh",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 30,
          }}
        >
          <div className="relative flex items-center justify-center">
            {bgClasses.map((bg, i) => (
              <div
                key={i}
                className="absolute icon"
                style={getIconStyle(i)}
              >
                <div
                  className={`${bg} rounded-full shadow-lg flex items-center justify-center`}
                  style={{
                    width: 200, // Initial size is 100px
                    height: 200, // Initial size is 100px
                    display: "flex",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={iconImgs[i]}
                    alt={`icon-${i}`}
                    style={{ width: 156, height: 156, objectFit: "contain" }}
                  />
                </div>
                {/* Add Heading for the icons */}
                <div
                  style={{
                    position: "absolute",
                    top: "110%", // Position it below the icon when it moves down
                    width: "100%",
                    textAlign: "center",
                    gap:'20px',
                    fontSize: "20px",
                    opacity: progress > 0.8 ? 1 : 0, // Fade in heading when icons are near the bottom
                  }}
                >
                  {iconTitles[i]}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONTENT: centered horizontally, initially hidden and below; it fades up when content phase activates */}
        <div
          className="absolute left-1/2 content-container text-center px-6"
          style={{
            top: "70vh",
            transform: `translateX(-50%) translateY(${contentTranslateY}px)`,
            opacity: contentOpacity,
            transition: "opacity 160ms linear, transform 160ms linear",
            zIndex: 20,
            width: "100%",
            maxWidth: 980,
            // because translateX(-50%) already used, ensure centering with maxWidth
            // Note: If you prefer simpler centering, replace marginLeft trick with other layout.
          }}
        >
          <h1 className="text-4xl md:text-8xl font-bold mb-4 leading-tight">
            Transform
            <br />
            your workout
            <br />
            <span className="text-4xl md:text-8xl font-bold mb-4 leading-tight">
              into fun!
            </span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed ">
          Feel the rush with every move, like the next big crypto spike! Where movement meets excitement—get ready for fun-filled workouts!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Iconscroll;
