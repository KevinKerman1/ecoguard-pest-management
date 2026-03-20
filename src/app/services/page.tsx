import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Leaf, Clock, Award } from "lucide-react";
import { serviceCategories, pestTypes } from "@/data/services";

export const metadata: Metadata = {
  title: "Pest Control Services",
  description:
    "EcoGuard offers residential & commercial pest control, termite treatment, rodent exclusion, insulation, and lawn care across CA, OR, WA, TN & NV.",
};

const whyChoose = [
  { icon: Leaf, title: "Eco-Friendly Products", desc: "EPA-approved, safe for kids & pets" },
  { icon: ShieldCheck, title: "Licensed Technicians", desc: "State-certified, background-checked" },
  { icon: Clock, title: "Same-Day Service", desc: "Emergency appointments available" },
  { icon: Award, title: "Satisfaction Guarantee", desc: "Free return visits if pests come back" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f08] via-[#1a3311] to-[#0d2b06] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Complete pest management
              <span className="block text-primary-light">for every need</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              From single-family homes to commercial facilities, we provide comprehensive pest control solutions tailored to your property and situation.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:8663262847" className="flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-surface transition">
                <Phone className="w-4 h-4" />
                (866) 326-2847
              </a>
              <Link href="/contact" className="flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChoose.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.icon className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-sm">{item.title}</p>
                  <p className="text-xs text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Service Categories</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {serviceCategories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                <p className="mt-2 text-muted leading-relaxed">{cat.description}</p>
                {cat.items && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="px-3 py-1 text-xs font-medium bg-surface rounded-full text-muted">{item}</span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pest types grid */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Common Pests We Treat</h2>
            <p className="mt-3 text-muted">Click any pest for detailed information and treatment options.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {pestTypes.map((pest) => (
              <Link
                key={pest.slug}
                href={`/pest-control/${pest.slug}`}
                className="group bg-white rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all text-center"
              >
                <div className="text-4xl mb-2">{pest.icon}</div>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{pest.name}</h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/pest-control" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition">
              View full pest library <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
