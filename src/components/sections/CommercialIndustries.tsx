import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { commercialIndustries } from "@/data/services";

export default function CommercialIndustries() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Commercial</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted pest control for every industry
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            Discreet, compliant, and effective. We help businesses maintain pest-free environments while meeting health code requirements.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {commercialIndustries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/services/commercial-pest-control/${industry.slug}`}
              className="group bg-white rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="text-3xl mb-3">{industry.icon}</div>
              <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {industry.name}
              </h3>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/services/commercial-pest-control"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition"
          >
            Explore commercial services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
