"use client";

import Link from "next/link";
import { Shield, Phone, Mail, MapPin, Facebook, Linkedin, Star } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Residential Pest Control", href: "/services/residential-pest-control" },
    { name: "Commercial Pest Control", href: "/services/commercial-pest-control" },
    { name: "Termite Control", href: "/pest-control/termite-control" },
    { name: "Rodent Control", href: "/pest-control/rodent-control" },
    { name: "Insulation Services", href: "/services/pest-control-insulation" },
    { name: "Lawn Care", href: "/services/lawn-pest-control" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Locations", href: "/locations" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Eco-Friendly", href: "/eco-friendly" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms-of-use" },
    { name: "CCPA", href: "/ccpa" },
    { name: "Accessibility", href: "/website-accessibility" },
    { name: "DMCA Notice", href: "/dmca-notice" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0f1f08] text-white">
      {/* CTA banner */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-4 py-10 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">Ready to live pest-free?</h2>
            <p className="text-white/80 mt-1">Get your free inspection today. No obligation, no pressure.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:8663262847"
              className="flex items-center justify-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-full hover:bg-surface transition shadow-lg"
            >
              <Phone className="w-5 h-5" />
              (866) 326-2847
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition"
            >
              <Mail className="w-5 h-5" />
              Request Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="w-8 h-8 text-primary-light" />
              <div>
                <span className="font-bold text-lg">EcoGuard</span>
                <span className="block text-[10px] text-white/60 uppercase tracking-widest">Pest Management</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Professional, eco-friendly pest management since 2011. Protecting homes and businesses across 5 states.
            </p>
            <div className="flex items-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
              <span className="ml-2 text-sm text-white/80">4.9 / 26,645+ reviews</span>
            </div>
            {/* Social */}
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/EcoGuardPestManagement" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary transition" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/company/ecoguard-pest-management" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary transition" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.yelp.com/biz/ecoguard-pest-management-folsom-5" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-white/10 hover:bg-primary transition" aria-label="Yelp">
                <Star className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:8663262847" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
                  <Phone className="w-4 h-4 text-primary-light" />
                  (866) 326-2847
                </a>
              </li>
              <li>
                <a href="mailto:service@ecoguardpestmanagement.com" className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition">
                  <Mail className="w-4 h-4 text-primary-light" />
                  service@ecoguard...
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-primary-light shrink-0 mt-0.5" />
                <span>CA · OR · WA · TN · NV</span>
              </li>
            </ul>
            <div className="mt-4 text-sm text-white/50">
              Mon - Sun, 7:00 AM - 9:00 PM
            </div>
          </div>

          {/* Legal (hidden on mobile, shown inline) */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 hidden lg:block">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/70 hover:text-white transition">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} EcoGuard Pest Management. All rights reserved.
          </p>
          <div className="flex gap-4 lg:hidden">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs text-white/40 hover:text-white/70 transition">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
