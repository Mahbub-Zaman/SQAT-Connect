'use client';

import { useEffect, useRef, useState } from "react";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const requestRef = useRef<number | null>(null);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setScrollProgress(progress);
      requestRef.current = null;
    };

    const handleScroll = () => {
      if (requestRef.current === null) {
        requestRef.current = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    updateScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent pointer-events-none">
      <div
        className="h-full bg-accent transition-[width] duration-200 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}