"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Events", href: "/events" },
  { name: "Membership", href: "/membership" },
  { name: "Gallery", href: "/gallery" },
  { name: "Achievements", href: "/achievements" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16 relative">

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 z-10">
            <div className="bg-primary p-1.5 rounded-lg">
              <Code2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-headline font-bold text-xl tracking-tight text-primary">
              SQAT CONNECT
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-2">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

          </div>

          {/* Right Side (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button
              asChild
              variant="default"
              size="sm"
              className="rounded-full bg-primary hover:bg-primary/90 transition-all duration-300"
            >
              <Link href="/membership">Join Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground/80 hover:text-primary transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 border-t mt-2">

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-full text-base font-medium transition-all duration-300
                  ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="px-4 pt-2">
              <Button
                asChild
                className="w-full rounded-full transition-all duration-300"
              >
                <Link
                  href="/membership"
                  onClick={() => setIsOpen(false)}
                >
                  Join Now
                </Link>
              </Button>
            </div>

          </div>
        )}
      </div>
    </nav>
  );
}