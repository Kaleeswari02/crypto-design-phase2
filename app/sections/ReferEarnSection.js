import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GradientButton from "../components/GradientButton";

gsap.registerPlugin(ScrollTrigger);

export const ReferEarnSection = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const phoneRef = useRef(null);
  const tokensRef = useRef([]);
  const subtextRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
          markers: false,
        },
      });

      // Heading slide
      tl.fromTo(
        headingRef.current,
        { x: -300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
      );

      // Phone slide in
      tl.fromTo(
        phoneRef.current,
        { y: 200, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
        "+=0.2"
      );

      // Phone zoom in
      tl.to(phoneRef.current, { scale: 1.2, duration: 1.2, ease: "power2.out" });

      // Subtext + button fade in
      tl.fromTo(
        subtextRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Left & Right Cards slide in
      tl.fromTo(
        leftCardRef.current,
        { x: -150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5"
      );
      tl.fromTo(
        rightCardRef.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

      // Phone zoom out
      tl.to(phoneRef.current, { scale: 1, duration: 1, ease: "power2.out" });

      // Tokens floating animation
      tokensRef.current.forEach((token, i) => {
        gsap.to(token, {
          y: "-=20",
          repeat: -1,
          yoyo: true,
          duration: 4 + i,
          ease: "sine.inOut",
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-lightdark text-white flex flex-col items-center justify-center overflow-hidden px-4"
    >
      {/* Background */}
      <img
        src="/assets/refer-bg.png"
        alt="Background Shadow"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Heading */}
      <h2
        ref={headingRef}
        className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-[900] font-extrafett mb-6 leading-tight text-center"
      >
        Refer And{" "}
        <span className="bg-gradient-to-r from-[#7928D2] via-[#399FE9] to-[#14F195] bg-clip-text text-transparent">
          Earn
        </span>
      </h2>

      {/* Subtext + Button */}
      <div
        ref={subtextRef}
        className="relative z-10 flex flex-col items-center justify-center gap-4 mb-12 opacity-0 px-4 sm:px-6 text-center"
      >
        <p className="text-gray-300 font-kraeftig text-lg sm:text-xl md:text-2xl max-w-full sm:max-w-xl">
          Sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <GradientButton
          label="Get Link"
          onClick={() => alert("Pressed!")}
          className="px-6 sm:px-8 py-2 sm:py-3"
        />
      </div>

      {/* Phone + Cards */}
      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 w-full overflow-hidden">
        {/* Left Card */}
        <div
          ref={leftCardRef}
          className="bg-black/60 rounded-lg p-6 sm:p-8 md:p-10 w-full sm:w-64 md:w-72 text-left opacity-0"
        >
          <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrafett mb-2">Refer</h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-[18px] font-buch">
            Excepteur sint occaecat cupidatat non proident,
          </p>
        </div>

        {/* Phone */}
        <div className="relative w-64 sm:w-80 md:w-[400px]" ref={phoneRef}>
          <img
            src="/assets/refer-phone.png"
            alt="Phone with Hand"
            className="w-full h-auto relative z-10"
          />
          <img
            ref={(el) => (tokensRef.current[0] = el)}
            src="/assets/token.png"
            alt="Token"
            className="absolute left-[-10%] top-[75%] w-8 sm:w-10 md:w-auto h-auto"
          />
          <img
            ref={(el) => (tokensRef.current[1] = el)}
            src="/assets/token.png"
            alt="Token"
            className="absolute right-[-10%] top-[55%] w-8 sm:w-10 md:w-auto h-auto"
          />
        </div>

        {/* Right Card */}
        <div
          ref={rightCardRef}
          className="bg-black/60 rounded-lg p-6 sm:p-8 md:p-10 w-full sm:w-64 md:w-72 text-left opacity-0"
        >
          <h3 className="text-xl sm:text-2xl md:text-[28px] font-extrafett mb-2">Earn</h3>
          <p className="text-gray-400 text-sm sm:text-base md:text-[18px] font-buch">
            Excepteur sint occaecat cupidatat non proident,
          </p>
        </div>
      </div>
    </section>
  );
};
