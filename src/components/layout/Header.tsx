"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  Star,
  ChevronDown,
  Shield,
  Bug,
  Building2,
  Home,
  Leaf,
  MapPin,
  Info,
  Briefcase,
  Mail,
  BookOpen,
} from "lucide-react";

const pestLinks = [
  { name: "Rodent Control", href: "/pest-control/rodent-control" },
  { name: "Ant Control", href: "/pest-control/ant-control" },
  { name: "Termite Control", href: "/pest-control/termite-control" },
  { name: "Bed Bug Control", href: "/pest-control/bed-bug-control" },
  { name: "Mosquito Control", href: "/pest-control/mosquito-control" },
  { name: "Cockroach Control", href: "/pest-control/cockroach-control" },
  { name: "Spider Control", href: "/pest-control/spider-control" },
  { name: "Wasp Control", href: "/pest-control/wasp-control" },
];

const serviceLinks = [
  { name: "Residential", href: "/services/residential-pest-control", icon: Home },
  { name: "Commercial", href: "/services/commercial-pest-control", icon: Building2 },
  { name: "Insulation", href: "/services/pest-control-insulation", icon: Shield },
  { name: "Lawn Care", href: "/services/lawn-pest-control", icon: Leaf },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [pestDropdown, setPestDropdown] = useState(false);
  const [serviceDropdown, setServiceDropdown] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary-dark text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              Serving CA, OR, WA, TN & NV
            </span>
            <span>Mon - Sun, 7AM - 9PM</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="https://ecoguard.pestportals.com/landing/index" className="hover:text-accent transition">
              My Account
            </Link>
            <Link href="https://ecoguard.pestportals.com/landing/index" className="hover:text-accent transition">
              Make Payment
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Shield className="w-8 h-8 text-primary" />
            <div className="leading-tight">
              <span className="font-bold text-lg text-primary-dark tracking-tight">EcoGuard</span>
              <span className="block text-[10px] text-muted uppercase tracking-widest">Pest Management</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Pest Control dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setPestDropdown(true)}
              onMouseLeave={() => setPestDropdown(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition rounded-lg hover:bg-surface">
                <Bug className="w-4 h-4" />
                Pest Control
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {pestDropdown && (
                <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-border p-4 min-w-[280px] grid grid-cols-2 gap-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {pestLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-2 text-sm rounded-lg hover:bg-surface-alt hover:text-primary transition"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="/pest-control"
                    className="col-span-2 mt-2 px-3 py-2 text-sm font-semibold text-primary rounded-lg bg-surface-alt text-center hover:bg-primary hover:text-white transition"
                  >
                    View All Pests →
                  </Link>
                </div>
              )}
            </div>

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServiceDropdown(true)}
              onMouseLeave={() => setServiceDropdown(false)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition rounded-lg hover:bg-surface">
                Services
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              {serviceDropdown && (
                <div className="absolute top-full left-0 bg-white rounded-xl shadow-xl border border-border p-2 min-w-[220px] animate-in fade-in slide-in-from-top-2 duration-200">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 px-3 py-2.5 text-sm rounded-lg hover:bg-surface-alt hover:text-primary transition"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/locations" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition rounded-lg hover:bg-surface">
              <MapPin className="w-4 h-4" />
              Locations
            </Link>
            <Link href="/about" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition rounded-lg hover:bg-surface">
              <Info className="w-4 h-4" />
              About
            </Link>
            <Link href="/blog" className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition rounded-lg hover:bg-surface">
              <BookOpen className="w-4 h-4" />
              Blog
            </Link>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Review badge */}
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 bg-surface rounded-full">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-xs font-semibold text-foreground">4.9</span>
              <span className="text-xs text-muted">(26K+)</span>
            </div>

            {/* Phone */}
            <a
              href="tel:8663262847"
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-4 py-2.5 rounded-full text-sm font-semibold transition shadow-md hover:shadow-lg"
            >
              <Phone className="w-4 h-4" />
              (866) 326-2847
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-surface transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              <Link href="/pest-control" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-alt transition">
                <Bug className="w-5 h-5 text-primary" />
                <span className="font-medium">Pest Control</span>
              </Link>
              <Link href="/services" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-alt transition">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-medium">Services</span>
              </Link>
              <Link href="/locations" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-alt transition">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="font-medium">Locations</span>
              </Link>
              <Link href="/about" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-alt transition">
                <Info className="w-5 h-5 text-primary" />
                <span className="font-medium">About Us</span>
              </Link>
              <Link href="/blog" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-alt transition">
                <BookOpen className="w-5 h-5 text-primary" />
                <span className="font-medium">Blog</span>
              </Link>
              <Link href="/careers" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-alt transition">
                <Briefcase className="w-5 h-5 text-primary" />
                <span className="font-medium">Careers</span>
              </Link>
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-surface-alt transition">
                <Mail className="w-5 h-5 text-primary" />
                <span className="font-medium">Contact</span>
              </Link>
              <div className="pt-3 border-t border-border">
                <a
                  href="tel:8663262847"
                  className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-xl font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  Call (866) 326-2847
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
