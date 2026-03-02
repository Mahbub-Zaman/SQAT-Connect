"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [theme, setTheme] = React.useState<"light" | "dark">("light");
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    const initialTheme =
      savedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  if (!mounted) return null; // prevents hydration mismatch

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative w-10 h-10 rounded-full
        border border-border/50
        bg-background/90
        backdrop-blur-md
        shadow-sm
        transition-all duration-300
        hover:shadow-md
        hover:scale-105
        active:scale-95
        hover:bg-accent/10
      "
    >
      {/* Sun Icon */}
      <Sun
        className="
          absolute h-5 w-5
          text-orange-500
          transition-all duration-500
          rotate-0 scale-100
          dark:-rotate-90 dark:scale-0
        "
      />
      {/* Moon Icon */}
      <Moon
        className="
          absolute h-5 w-5
          text-blue-400
          transition-all duration-500
          rotate-90 scale-0
          dark:rotate-0 dark:scale-100
        "
      />
    </Button>
  );
}