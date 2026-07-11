import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Bio */}
          <div>
            <span className="font-serif text-2xl tracking-widest text-white uppercase font-medium">
              Khashab<span className="text-accent font-light">SA</span>
            </span>
            <p className="mt-6 text-sm text-stone-400 leading-relaxed font-light">
              Premium wood manufacturing and custom bespoke carpentry based in Saudi Arabia. 
              Delivering high-end solutions for healthcare, commercial, and residential sectors since 2015.
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
                Phone: +966 11 498 7788<br />
                Email: info@khashab.sa
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
                All healthcare-specific doors, cabinets, and clinical paneling are manufactured in 
                compliance with Saudi Ministry of Health specifications, featuring anti-microbial surfaces, 
                moisture resistance, and certified fire ratings.
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
            <span>CR No: 1010484920</span>
            <span>Made in Saudi Arabia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
