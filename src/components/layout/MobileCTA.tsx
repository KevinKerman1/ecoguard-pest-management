"use client";

import { Phone, Search } from "lucide-react";

export default function MobileCTA() {
  const scrollToHero = () => {
    const hero = document.getElementById("zip-checker");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
      hero.focus();
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-2xl z-50 md:hidden">
      <div className="flex">
        <a
          href="tel:8663262847"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white font-semibold text-sm"
        >
          <Phone className="w-4 h-4" />
          Call Now
        </a>
        <button
          onClick={scrollToHero}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-white font-semibold text-sm"
        >
          <Search className="w-4 h-4" />
          Check Coverage
        </button>
      </div>
    </div>
  );
}
