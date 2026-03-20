import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { serviceStates } from "@/data/service-areas";

export default function ServiceAreas() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Coverage</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Serving 5 states, 18 offices
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            Local expertise, national reach. Each office is staffed with licensed technicians who know the pests in your region.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {serviceStates.map((state) => (
            <Link
              key={state.code}
              href={`/locations/${state.slug}`}
              className="group bg-white rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground">{state.name}</h3>
              <p className="text-sm text-muted mt-1">{state.code}</p>
              <div className="mt-2 flex items-center justify-center gap-1 text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View offices <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
