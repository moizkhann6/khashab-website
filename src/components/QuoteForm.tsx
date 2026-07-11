"use client";

import { useState } from "react";
import { useDb } from "@/context/DbContext";
import { useLanguage } from "@/context/LanguageContext";

export default function QuoteForm() {
  const { addInquiry } = useDb();
  const { t, isRtl } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "Doors",
    volume: "10-50 units",
    details: "",
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Save in database inquiries log
    addInquiry({
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      category: formData.category,
      volume: formData.volume,
      details: formData.details,
    });

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        category: "Doors",
        volume: "10-50 units",
        details: "",
      });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const selectBgPosition = isRtl ? "left 1rem center" : "right 1rem center";

  return (
    <div className="border border-stone-200 p-8 lg:p-12 bg-white text-left">
      {isSubmitted ? (
        <div className="text-center py-12">
          <svg
            className="w-12 h-12 text-accent mx-auto mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h3 className="font-serif text-2xl text-primary mb-2 font-medium">{t("contact.success_title")}</h3>
          <p className="text-stone-550 font-light text-sm max-w-md mx-auto leading-relaxed">
            {t("contact.success_desc")}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-8 btn-primary shrink-0"
          >
            {t("contact.btn_another")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                {t("contact.input_name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Khalid Al-Otaibi"
                className="w-full px-4 py-3 border border-stone-200 rounded-none bg-white text-sm text-stone-900 focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="company" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                {t("contact.input_company")} *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                placeholder="e.g. Al-Fozan Contracting"
                className="w-full px-4 py-3 border border-stone-200 rounded-none bg-white text-sm text-stone-900 focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                {t("contact.input_email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="k.otaibi@company.sa"
                className="w-full px-4 py-3 border border-stone-200 rounded-none bg-white text-sm text-stone-900 focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                {t("contact.phone_label")} *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+966 50 000 0000"
                className="w-full px-4 py-3 border border-stone-200 rounded-none bg-white text-sm text-stone-900 focus:outline-none focus:border-accent transition-colors duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Product Category */}
            <div>
              <label htmlFor="category" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                {t("contact.input_category")} *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-200 rounded-none bg-white text-sm text-stone-900 focus:outline-none focus:border-accent transition-colors duration-200 appearance-none"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' stroke='%238c6239' stroke-width='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'></path></svg>")`, 
                  backgroundPosition: selectBgPosition, 
                  backgroundSize: '1.25rem', 
                  backgroundRepeat: 'no-repeat' 
                }}
              >
                <option value="Doors">{t("Bespoke Doors")}</option>
                <option value="Windows">{t("Premium Windows")}</option>
                <option value="Kitchens">{t("Bespoke Kitchens")}</option>
                <option value="Wardrobes">{t("Custom Wardrobes")}</option>
                <option value="Closets">{t("Luxury Closets")}</option>
                <option value="Bedrooms">{t("Bespoke Bedrooms")}</option>
                <option value="Office Furniture">{t("Office Furniture")}</option>
                <option value="Furniture">{t("Custom Furniture")}</option>
                <option value="Healthcare specialized">{t("health.label")}</option>
                <option value="Other fitting">{t("contact.cat_general")}</option>
              </select>
            </div>

            {/* Project Volume */}
            <div>
              <label htmlFor="volume" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
                {t("contact.input_volume")} *
              </label>
              <select
                id="volume"
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-stone-200 rounded-none bg-white text-sm text-stone-900 focus:outline-none focus:border-accent transition-colors duration-200 appearance-none"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml;utf8,<svg fill='none' stroke='%238c6239' stroke-width='1.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path stroke-linecap='round' stroke-linejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5'></path></svg>")`, 
                  backgroundPosition: selectBgPosition, 
                  backgroundSize: '1.25rem', 
                  backgroundRepeat: 'no-repeat' 
                }}
              >
                <option value="Single custom">{t("contact.vol_single")}</option>
                <option value="10-50 units">{t("contact.vol_mid")}</option>
                <option value="50-200 units">50 - 200 units (Medium Project)</option>
                <option value="200+ units">{t("contact.vol_large")}</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="details" className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-2">
              {t("contact.input_details")}
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={formData.details}
              onChange={handleChange}
              placeholder="Please describe dimensions, timber type preferences, Saudi MoH compliance needs, fire-ratings, or delivery schedules."
              className="w-full px-4 py-3 border border-stone-200 rounded-none bg-white text-sm text-stone-900 focus:outline-none focus:border-accent transition-colors duration-200 resize-y"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary py-4 text-sm font-semibold tracking-widest"
            >
              {isSubmitting ? t("contact.submitting") : t("contact.btn_submit")}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
