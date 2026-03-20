import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { offices, serviceStates } from "@/data/service-areas";
import ZipChecker from "@/components/forms/ZipChecker";

export const metadata: Metadata = {
  title: "Locations - 18 Offices Across 5 States",
  description:
    "Find your local EcoGuard Pest Management office. 18 locations across California, Oregon, Washington, Tennessee & Nevada. Enter your zip code to check coverage.",
};

export default function LocationsPage() {
  const groupedOffices = serviceStates.map((state) => ({
    ...state,
    offices: offices.filter((o) => o.stateCode === state.code),
  }));

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f08] via-[#1a3311] to-[#0d2b06] text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">Our Locations</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                18 offices.
                <span className="block text-primary-light">5 states.</span>
              </h1>
              <p className="mt-6 text-lg text-white/70 leading-relaxed">
                Local expertise with regional reach. Every office is staffed with licensed technicians who know the specific pests in your area.
              </p>
            </div>
            <div>
              <p className="text-sm text-white/50 mb-3 font-medium uppercase tracking-wider">
                Check if we serve your area
              </p>
              <ZipChecker variant="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Offices by state */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          {groupedOffices.map((state) => (
            <div key={state.code} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold text-foreground">{state.name}</h2>
                <Link
                  href={`/locations/${state.slug}`}
                  className="ml-auto text-sm font-medium text-primary hover:text-primary-dark transition flex items-center gap-1"
                >
                  View all {state.name} locations <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {state.offices.map((office) => (
                  <div
                    key={`${office.city}-${office.stateCode}`}
                    className="bg-white rounded-xl p-5 border border-border hover:border-primary/20 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-foreground">{office.city}, {office.stateCode}</h3>
                    {office.address && (
                      <p className="text-sm text-muted mt-1">{office.address}</p>
                    )}
                    <a
                      href={`tel:${office.phone.replace(/\D/g, "")}`}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-dark transition"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      {office.phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
