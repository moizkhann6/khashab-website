"use client";

import { useDb } from "@/context/DbContext";

export default function ContactPartners() {
  const { clients, isLoaded } = useDb();

  if (!isLoaded) {
    return (
      <div className="w-full flex justify-center py-8">
        <div className="w-6 h-6 border-2 border-stone-200 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {clients.map((partner) => (
        <div
          key={partner.id}
          className="bg-white border border-stone-200 p-6 flex flex-col justify-center items-center text-center h-28 hover:border-accent transition-colors duration-200"
        >
          <span className="font-serif text-sm font-semibold tracking-wider text-stone-850 uppercase block mb-1">
            {partner.name}
          </span>
          <span className="text-[9px] font-light text-stone-400 uppercase tracking-widest block">
            {partner.role}
          </span>
        </div>
      ))}
    </div>
  );
}
