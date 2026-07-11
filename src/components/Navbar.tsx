"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services & Products" },
    { href: "/healthcare", label: "Healthcare Solutions" },
    { href: "/contact", label: "Contact & Partners" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <span className="font-serif text-2xl tracking-widest text-primary uppercase font-medium">
              Khashab<span className="text-accent font-light">SA</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-accent border-b border-accent pb-1"
                    : "text-stone-600 hover:text-primary link-underline pb-1"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-stone-600 hover:text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-stone-200 px-6 py-6 transition-all duration-300">
          <nav className="flex flex-col space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium tracking-wide uppercase py-2 border-b border-stone-50 ${
                  isActive(link.href)
                    ? "text-accent font-semibold"
                    : "text-stone-600 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
