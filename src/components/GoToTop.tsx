"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-[60] transition-all duration-500 flex items-center justify-center",
        isVisible
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      )}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-xl transition-all hover:scale-110 active:scale-95"
      >
        {/* Rotating Circular Text */}
        <div className="absolute inset-0 h-full w-full animate-spin-slow">
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <path
              id="circlePath"
              d="M 50,50 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
              fill="transparent"
            />
            <text
              fontSize="12"
              fontWeight="bold"
              letterSpacing="2"
              fill="white"
            >
              <textPath href="#circlePath" startOffset="0%">
                GO TO TOP • GO TO TOP •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Central Icon */}
        <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-md transition-transform group-hover:-translate-y-1">
          <ArrowUp className="h-4 w-4" />
        </div>
      </button>
    </div>
  );
}