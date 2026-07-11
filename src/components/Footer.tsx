"use client";

import Link from "next/link";
import { useDb } from "@/context/DbContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { logo } = useDb();
  const { t } = useLanguage();

  return (
    <footer className="bg-stone-900 text-stone-300 border-t border-stone-800">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Company Bio */}
          <div>
            {logo.startsWith("http") || logo.startsWith("data:") ? (
              <img src={logo} alt="KhashabSA Logo" className="h-14 md:h-16 max-w-[240px] object-contain mb-6 brightness-0 invert" />
            ) : (
              <span className="font-serif text-3xl md:text-4xl tracking-widest text-white uppercase font-medium">
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
            <p className="mt-6 text-sm text-stone-400 leading-relaxed font-light text-left">
              {t("brand.desc_1")}
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-5 mt-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-accent transition-colors duration-200" title="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-accent transition-colors duration-200" title="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0 3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-accent transition-colors duration-200" title="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-accent transition-colors duration-200" title="Snapchat">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.052c-1.338 0-2.614.341-3.71 1.002-1.121-.682-2.428-1.042-3.8-1.002-3.415.105-6.177 2.879-6.262 6.294-.047 1.944.698 3.738 1.961 4.996C.426 14.654-.002 16.326 0 18.118c.003 1.258.468 2.457 1.31 3.376s2.007 1.444 3.284 1.478c1.372.036 2.686-.341 3.766-.998 1.096.657 2.378 1.018 3.714.998 3.415-.052 6.183-2.822 6.273-6.237.049-1.92-.681-3.722-1.944-4.992 1.066-1.092 1.636-2.52 1.614-4.02-.047-3.421-2.823-6.189-6.243-6.273-1.338-.032-2.618.349-3.71.996-1.121-.659-2.424-1.016-3.8-.996zm0 1.948c.959.006 1.884.283 2.686.81l.362.235.347-.253c.8-.579 1.761-.885 2.766-.889 2.474.062 4.475 2.062 4.509 4.536.016 1.085-.395 2.12-.99 2.915l-.299.404.408.291c.915.653 1.458 1.547 1.472 2.666.012 1.09-.434 2.115-1.062 2.9l-.364.456.549.19c.813.277 1.428.846 1.728 1.6l.245.617-.614.249c-.752.304-1.32.919-1.6 1.733l-.19.553-.553-.19c-.836-.289-1.748-.445-2.664-.447-.978.006-1.916.291-2.723.829l-.36.237-.349-.253c-.8-.579-1.765-.885-2.77-.889-2.472-.062-4.471-2.062-4.505-4.536-.016-1.087.395-2.122.99-2.917l.299-.404-.408-.291c-.917-.655-1.46-1.549-1.474-2.67-.012-1.088.434-2.113 1.062-2.898l.364-.456-.549-.19c-.815-.279-1.428-.848-1.728-1.602l-.245-.615.614-.249c.754-.306 1.322-.921 1.602-1.735l.19-.553.553.19c.838.289 1.748.445 2.664.447z"/></svg>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-accent transition-colors duration-200" title="X (Twitter)">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://wa.me/966560603222" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-accent transition-colors duration-200" title="WhatsApp">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.247 2.248 3.485 5.235 3.485 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.992-.001-3.951-.5-5.688-1.448l-6.31 1.654zm6.59-3.807c1.616.96 3.2 1.48 4.954 1.486 5.54 0 10.047-4.507 10.05-10.051.002-2.686-1.043-5.212-2.94-7.111-1.897-1.897-4.425-2.943-7.11-2.943-5.545 0-10.051 4.506-10.054 10.052-.001 1.84.49 3.64 1.422 5.197l-1.026 3.75 3.845-.989zm11.366-7.64c-.327-.164-1.938-.955-2.239-1.064-.3-.11-.518-.165-.736.165-.219.329-.846 1.064-1.037 1.282-.19.219-.382.245-.709.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.329-.02-.507.144-.67.147-.146.327-.382.49-.573.163-.19.218-.328.327-.546.11-.219.054-.41-.028-.573-.082-.164-.736-1.774-1.009-2.43-.265-.637-.534-.55-.736-.56l-.629-.01c-.218 0-.573.082-.873.41-.3.327-1.147 1.12-1.147 2.733 0 1.614 1.174 3.172 1.338 3.391.164.218 2.307 3.523 5.589 4.941.78.337 1.39.539 1.865.69.784.249 1.497.214 2.061.129.629-.095 1.938-.792 2.21-1.558.271-.766.271-1.422.19-1.557-.08-.137-.3-.22-.627-.384z"/></svg>
              </a>
            </div>
          </div>

          {/* Site Pages Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-white uppercase mb-6 text-left">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-4 text-left">
              <li>
                <Link href="/about" className="text-sm font-light hover:text-white transition-colors duration-200">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm font-light hover:text-white transition-colors duration-200">
                  {t("nav.services")}
                </Link>
              </li>
              <li>
                <Link href="/healthcare" className="text-sm font-light hover:text-white transition-colors duration-200">
                  {t("nav.healthcare")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-light hover:text-white transition-colors duration-200">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-white uppercase mb-6 text-left">
              {t("footer.hq")}
            </h3>
            <ul className="space-y-4 text-sm font-light text-stone-400 text-left">
              <li>
                <span className="block text-white font-medium">{t("footer.factory")}</span>
                <span className="whitespace-pre-line">{t("footer.address")}</span>
              </li>
              <li>
                <span className="block text-white font-medium">{t("footer.contact")}</span>
                {t("contact.input_phone")}: +966 56 060 3222<br />
                Email: info@khashab.net
              </li>
            </ul>
          </div>

          {/* Trust Compliance Info */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-wider text-white uppercase mb-6 text-left">
              {t("about.standards_label")}
            </h3>
            <div className="bg-stone-850 p-5 border border-stone-800 rounded-none text-left">
              <span className="text-accent text-xs font-semibold uppercase tracking-wider block mb-2">
                {t("health.label")}
              </span>
              <p className="text-xs text-stone-400 font-light leading-relaxed">
                {t("health.desc")}
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer */}
      <div className="border-t border-stone-800 bg-stone-950 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 font-light gap-4">
          <p>
            &copy; {currentYear} KhashabSA. {t("footer.copy")}
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link href="/admin" className="hover:text-white transition-colors">Admin Dashboard</Link>
            <a href="https://www.khashab.net" className="hover:text-white transition-colors">www.khashab.net</a>
            <span>{t("footer.cr")}: 1010484920</span>
            <span>{t("footer.vat")}: 300482930200003</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
