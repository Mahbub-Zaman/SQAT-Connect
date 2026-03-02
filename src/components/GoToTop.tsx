"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
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
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-50 pointer-events-none"
      )}
    >
      <button
        onClick={scrollToTop}
        className="group relative flex h-20 w-20 items-center justify-center rounded-full bg-primary shadow-xl transition-all hover:scale-110 active:scale-95"
      >
        {/* Rotating Circular Text */}
        <div className="absolute inset-0 h-full w-full animate-spin-slow">
          <svg viewBox="0 0 100 100" className="h-full w-full overflow-visible">
            <path
              id="circlePath"
              d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
              fill="transparent"
            />
            <text className="text-[10px] font-bold uppercase tracking-[0.2em] fill-white/80">
              <textPath href="#circlePath" startOffset="0%">
                Go to top • Go to top • Go to top •
              </textPath>
            </text>
          </svg>
        </div>

        {/* Central Icon */}
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary shadow-md transition-transform group-hover:-translate-y-1">
          <ArrowUp className="h-6 w-6" />
        </div>
      </button>
    </div>
  );
}
