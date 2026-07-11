"use client";

import React, { useState, useEffect } from "react";
import { useDb } from "@/context/DbContext";

export default function NewsletterPopup() {
  const { addInquiry } = useDb();
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    // Check if user already dismissed or subscribed
    const isDismissed = localStorage.getItem("khashab_newsletter_dismissed");
    if (!isDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2500); // 2.5 second delay
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("khashab_newsletter_dismissed", "true");
    setIsOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    try {
      // Connect newsletter subscription to inquiries database log
      await addInquiry({
        name: "Newsletter Subscriber",
        company: "Public Signup",
        email: email.trim(),
        phone: "N/A",
        category: "general",
        volume: "N/A",
        details: "Subscribed to KhashabSA updates, discounts, and custom woodwork catalogues.",
      });
      setSubscribed(true);
      localStorage.setItem("khashab_newsletter_dismissed", "true");
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (error) {
      console.error(error);
      alert("Subscription failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white border border-stone-200 p-8 max-w-md w-full shadow-2xl flex flex-col items-center text-center animate-slide-up">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-stone-400 hover:text-stone-950 transition-colors text-xl font-light cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Premium Ornament Icon */}
        <div className="w-12 h-12 border border-accent rounded-none flex items-center justify-center mb-6 shrink-0 bg-stone-50">
          <span className="font-serif text-accent text-lg font-light">K</span>
        </div>

        {/* Content */}
        {!subscribed ? (
          <>
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">
              Bespoke Woodwork Insights
            </span>
            <h3 className="font-serif text-2xl text-primary mb-3">
              Join the Collector's List
            </h3>
            <p className="text-stone-500 font-light text-xs leading-relaxed mb-6">
              Subscribe to receive exclusive catalogues, giga-project highlights, and seasonal private collections directly from our Riyadh joinery workshop.
            </p>

            <form onSubmit={handleSubmit} className="w-full space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-stone-200 text-xs focus:outline-none focus:border-accent bg-white text-stone-900 text-center"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary py-3 text-xs w-full cursor-pointer tracking-widest uppercase font-semibold"
              >
                {isSubmitting ? "Subscribing..." : "Request Access"}
              </button>
            </form>
          </>
        ) : (
          <div className="py-6 space-y-3 animate-fade-in">
            <span className="text-3xl block">✓</span>
            <h4 className="font-serif text-xl text-primary">Invitation Accepted</h4>
            <p className="text-stone-500 font-light text-xs">
              Thank you. You have been added to the KhashabSA private list.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
