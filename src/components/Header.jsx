"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Header() {
  const headerRef = useRef(null);
  const loginBtnRef = useRef(null);
  const loginTextRef = useRef(null);
  const loginAltTextRef = useRef(null);

  // Header hide/show on scroll
  useEffect(() => {
    const header = headerRef.current;
    let lastScroll = window.scrollY;

    const onScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scroll down → hide
        gsap.to(header, { y: -header.offsetHeight, duration: 0.5, ease: "power2.out" });
      } else {
        // Scroll up → show
        gsap.to(header, { y: 0, duration: 0.5, ease: "power2.out" });
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Login button hover animation
  useEffect(() => {
    const btn = loginBtnRef.current;
    const text = loginTextRef.current;
    const altText = loginAltTextRef.current;

    // Initial setup
    gsap.set(altText, { y: -20, opacity: 0, position: "absolute", left: 0, right: 0, textAlign: "center" });

    const hoverTimeline = gsap.timeline({ paused: true });
    hoverTimeline
      .to(btn, { scale: 0.95, duration: 0.3, ease: "power2.out" }, 0)
      .to(text, { y: 20, opacity: 0, duration: 0.3, ease: "power2.out" }, 0)
      .to(altText, { y: 0, opacity: 1, duration: 0.3, ease: "power2.out" }, 0);

    const hoverIn = () => hoverTimeline.play();
    const hoverOut = () => hoverTimeline.reverse();

    btn.addEventListener("mouseenter", hoverIn);
    btn.addEventListener("mouseleave", hoverOut);

    return () => {
      btn.removeEventListener("mouseenter", hoverIn);
      btn.removeEventListener("mouseleave", hoverOut);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full bg-white shadow z-50 transform"
    >
      <div className="h-16 relative w-full">
        {/* Logo - far left */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2">
          <img src="/your-logo.svg" alt="Logo" className="h-8 w-auto" />
        </div>

        {/* Buttons - far right */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center space-x-8">
          <a
            href="#products"
            className="relative text-gray-700 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Products
          </a>
          <a
            href="#developers"
            className="relative text-gray-700 font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
          >
            Developers
          </a>
          <button
            ref={loginBtnRef}
            className="relative overflow-hidden bg-black text-white font-medium px-6 py-3 rounded-full h-12 flex items-center justify-center"
          >
            <span ref={loginTextRef} className="inline-block relative">
              Login
            </span>
            <span ref={loginAltTextRef} className="inline-block relative">
              Sign In
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
