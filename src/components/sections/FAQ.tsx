"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What types of pests do you treat?",
    a: "We treat over 40 types of pests including ants, termites, rodents, cockroaches, bed bugs, spiders, mosquitoes, wasps, fleas, ticks, and many more. Our technicians are trained to identify and eliminate virtually any pest common to your region.",
  },
  {
    q: "Are your products safe for children and pets?",
    a: "Yes. We use EPA-approved, eco-friendly products that are safe for your family and pets when applied as directed. Our Integrated Pest Management (IPM) approach minimizes chemical use by targeting pests at the source.",
  },
  {
    q: "How much does pest control cost?",
    a: "Pricing depends on the type of pest, severity of the infestation, and size of your property. We offer free inspections and estimates — enter your zip code above or call us at (866) 326-2847 for a personalized quote.",
  },
  {
    q: "Do you offer emergency pest control services?",
    a: "Absolutely. We offer same-day and next-day service for urgent pest situations. Call (866) 326-2847 and let us know it's an emergency — we'll get a technician to you as fast as possible.",
  },
  {
    q: "What is your guarantee?",
    a: "We offer a full satisfaction guarantee. If pests return between scheduled treatments, we'll come back at no additional cost. We also provide immediate response for any concerns and free return visits until the problem is completely resolved.",
  },
  {
    q: "What makes EcoGuard different from other exterminators?",
    a: "Three things: our eco-friendly approach using IPM methods, our local presence with 18 offices across 5 states for fast response, and our satisfaction guarantee backed by 26,000+ five-star reviews. We treat your home like it's our own.",
  },
  {
    q: "Do you offer commercial pest control?",
    a: "Yes. We serve restaurants, offices, warehouses, hotels, healthcare facilities, schools, grocery stores, and apartment complexes. Our commercial team understands health code requirements and works discreetly to protect your business reputation.",
  },
  {
    q: "How do I know if you serve my area?",
    a: "Enter your zip code in the checker at the top of this page for an instant answer. We currently serve California, Oregon, Washington, Tennessee, and Nevada — and we're expanding. If we're not in your area yet, leave your info and we'll notify you.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Common questions answered
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden bg-white"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-surface transition"
              >
                <span className="font-medium text-foreground pr-4">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-4 text-muted leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
