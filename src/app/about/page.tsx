import type { Metadata } from "next";
import { Shield, Leaf, Award, Users, Clock, MapPin, ShieldCheck, Heart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "EcoGuard Pest Management is a family-owned pest control company serving 5 states with eco-friendly solutions since 2011. Licensed, bonded, and insured.",
};

const values = [
  {
    icon: Leaf,
    title: "Eco-Friendly First",
    description:
      "We prioritize Integrated Pest Management (IPM), using EPA-approved products that are safe for your family, pets, and the environment.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Certified",
    description:
      "Every technician is state-licensed, background-checked, and continuously trained on the latest pest control methods.",
  },
  {
    icon: Heart,
    title: "Community-Focused",
    description:
      "As a family-owned business, we treat every customer like a neighbor. Your satisfaction is our reputation.",
  },
  {
    icon: Clock,
    title: "Responsive Service",
    description:
      "Same-day and next-day appointments available. When pests can't wait, neither do we.",
  },
];

const stats = [
  { value: "26,645+", label: "5-Star Reviews" },
  { value: "18", label: "Office Locations" },
  { value: "5", label: "States Served" },
  { value: "40+", label: "Pests Treated" },
];

const milestones = [
  { year: "2011", event: "EcoGuard Pest Management founded in California" },
  { year: "2014", event: "Expanded to Oregon and Washington" },
  { year: "2017", event: "10,000th customer served; added commercial division" },
  { year: "2019", event: "Opened Nashville, Tennessee office" },
  { year: "2021", event: "Expanded to Nevada; 20,000+ reviews milestone" },
  { year: "2024", event: "18 offices across 5 states; 26,000+ reviews" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f08] via-[#1a3311] to-[#0d2b06] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">About EcoGuard</p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Family-owned. Eco-friendly.
              <span className="block text-primary-light">Community-driven.</span>
            </h1>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Since 2011, EcoGuard Pest Management has been protecting homes and businesses with effective, environmentally responsible pest control. What started as a local operation has grown into a trusted name across five states — but we still treat every customer like a neighbor.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Shield className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-lg text-muted leading-relaxed">
              &ldquo;To provide effective pest management using natural, eco-friendly products while building a stronger local community. We believe in protecting your home <em>and</em> the environment — without compromise.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our values in action</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-border">
                <div className="w-12 h-12 rounded-xl bg-surface-alt flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Journey</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Growing with our communities</h2>
          </div>
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0 w-16 text-right">
                  <span className="font-bold text-primary">{m.year}</span>
                </div>
                <div className="relative pb-6">
                  <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-primary" />
                  {i < milestones.length - 1 && (
                    <div className="absolute left-1.5 top-5 w-px h-full bg-border" />
                  )}
                  <p className="ml-6 text-foreground">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-muted text-lg mb-8">
            Join 26,000+ homeowners who trust EcoGuard to keep their homes pest-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-full transition shadow-lg"
            >
              Get Your Free Inspection
            </Link>
            <a
              href="tel:8663262847"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-8 py-3 rounded-full hover:bg-surface-alt transition"
            >
              Call (866) 326-2847
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
