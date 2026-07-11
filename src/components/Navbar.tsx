"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDb } from "@/context/DbContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { logo } = useDb();
  const { language, toggleLanguage, t } = useLanguage();

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/services", label: t("nav.services") },
    { href: "/healthcare", label: t("nav.healthcare") },
    { href: "/contact", label: t("nav.contact") },
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
            {logo.startsWith("http") || logo.startsWith("data:") ? (
              <img src={logo} alt="KhashabSA Logo" className="h-14 md:h-16 max-w-[240px] object-contain" />
            ) : (
              <span className="font-serif text-3xl md:text-4xl tracking-widest text-primary uppercase font-medium">
                {logo.toLowerCase().endsWith("sa") ? (
                  <>
                    {logo.slice(0, -2)}
                    <span className="text-accent font-light">{logo.slice(-2)}</span>
                  </>
                ) : (
                  logo
                )}
              </span>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <nav className="flex items-center gap-6 lg:gap-10">
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

            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              className="px-3 py-1.5 border border-stone-200 text-xs font-semibold tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-200 cursor-pointer bg-stone-50 text-stone-600 rounded-none shrink-0"
            >
              {language === "en" ? "العربية" : "English"}
            </button>
          </div>

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
                    ? "text-accent font-semibold text-left"
                    : "text-stone-600 hover:text-primary text-left"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Toggle */}
            <div className="pt-4 border-t border-stone-100 flex justify-start">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="px-4 py-2 border border-stone-200 text-xs font-semibold tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-200 bg-stone-50 text-stone-600 rounded-none cursor-pointer"
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
