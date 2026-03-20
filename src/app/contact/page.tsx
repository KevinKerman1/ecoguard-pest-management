import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { offices } from "@/data/service-areas";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free pest control estimate from EcoGuard. Call (866) 326-2847 or fill out our form. 18 offices across CA, OR, WA, TN & NV. Same-day service available.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f08] via-[#1a3311] to-[#0d2b06] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-bold">Get your free pest inspection</h1>
            <p className="mt-4 text-lg text-white/70">
              Fill out the form below and a local technician will contact you within 24 hours to schedule your free, no-obligation inspection.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick contact */}
              <div className="bg-white rounded-2xl p-6 border border-border">
                <h3 className="font-bold text-lg text-foreground mb-4">Prefer to talk?</h3>
                <div className="space-y-4">
                  <a href="tel:8663262847" className="flex items-center gap-3 text-foreground hover:text-primary transition">
                    <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">(866) 326-2847</p>
                      <p className="text-sm text-muted">Mon - Sun, 7AM - 9PM</p>
                    </div>
                  </a>
                  <a href="mailto:service@ecoguardpestmanagement.com" className="flex items-center gap-3 text-foreground hover:text-primary transition">
                    <div className="w-10 h-10 rounded-xl bg-surface-alt flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">service@ecoguardpestmanagement.com</p>
                      <p className="text-sm text-muted">Response within 24 hours</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Process */}
              <div className="bg-surface rounded-2xl p-6">
                <h3 className="font-bold text-lg text-foreground mb-4">What happens next?</h3>
                <ol className="space-y-3">
                  {[
                    "You submit your info or call us directly",
                    "A local technician contacts you to schedule",
                    "We inspect your property and identify issues",
                    "You receive a customized treatment plan and estimate",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-muted">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 border border-border">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-foreground">Hours</h3>
                </div>
                <p className="text-muted">Monday - Sunday: 7:00 AM - 9:00 PM</p>
                <p className="text-sm text-primary font-medium mt-1">Emergency service available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office locations */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Offices</p>
            <h2 className="text-3xl font-bold text-foreground">18 locations across 5 states</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {offices.map((office) => (
              <div key={`${office.city}-${office.stateCode}`} className="bg-white rounded-xl p-5 border border-border">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {office.city}, {office.stateCode}
                    </h3>
                    {office.address && (
                      <p className="text-sm text-muted mt-1">{office.address}</p>
                    )}
                  </div>
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-1" />
                </div>
                <a
                  href={`tel:${office.phone.replace(/\D/g, "")}`}
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary-dark transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
