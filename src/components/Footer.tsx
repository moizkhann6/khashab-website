"use client";

import Link from "next/link";
import { useDb } from "@/context/DbContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { logo } = useDb();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Bio */}
          <div>
            {logo.startsWith("http") || logo.startsWith("data:") ? (
              <img src={logo} alt="KhashabSA Logo" className="h-10 max-w-[180px] object-contain mb-6 brightness-0 invert" />
            ) : (
              <span className="font-serif text-2xl tracking-widest text-white uppercase font-medium">
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
            <p className="mt-6 text-sm text-stone-400 leading-relaxed font-light">
              We design and manufacture unique, high-end wood icons that bring beauty and joy to spaces. 
              Serving corporate, residential, and clinical healthcare sectors in Saudi Arabia since 2015.
            </p>
          </div>

          {/* Site Pages Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-white uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm font-light hover:text-white transition-colors duration-200">
                  Our Story & Mission
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm font-light hover:text-white transition-colors duration-200">
                  Services & Custom Products
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-sm font-light hover:text-white transition-colors duration-200">
                  Healthcare Specialized Wood
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-light hover:text-white transition-colors duration-200">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-white uppercase mb-6">
              Headquarters
            </h3>
            <ul className="space-y-4 text-sm font-light text-stone-400">
              <li>
                <span className="block text-white font-medium">KhashabSA Factory</span>
                Second Industrial City, Riyadh,<br />Kingdom of Saudi Arabia
              </li>
              <li>
                <span className="block text-white font-medium">Contact Details</span>
                Phone: +966 56 060 3222<br />
                Email: info@khashab.net
              </li>
            </ul>
          </div>

          {/* Trust Compliance Info */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-white uppercase mb-6">
              Regulatory Standards
            </h3>
            <div className="bg-stone-850 p-5 border border-stone-800 rounded-none">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block mb-2">
                MOH Standards Compliant
              </span>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                All healthcare-specific wood products match Saudi Ministry of Health standards: moisture and bacteria resistant, fire resistant, and easy to sterilize and clean.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-stone-800 bg-stone-950 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-light">
          <p>
            &copy; {currentYear} KhashabSA. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/admin" className="hover:text-white transition-colors">Admin Dashboard</Link>
            <a href="https://www.khashab.net" className="hover:text-white transition-colors">www.khashab.net</a>
            <span>CR No: 1010484920</span>
            <span>Made in Saudi Arabia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
