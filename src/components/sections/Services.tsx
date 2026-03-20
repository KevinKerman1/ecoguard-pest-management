import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pestTypes } from "@/data/services";

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What We Treat</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Expert control for every pest
          </h2>
          <p className="mt-3 text-muted max-w-2xl mx-auto">
            From rodents to roaches, our licensed technicians use eco-friendly treatments tailored to your specific pest problem.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {pestTypes.map((pest) => (
            <Link
              key={pest.slug}
              href={`/pest-control/${pest.slug}`}
              className="group relative bg-white rounded-2xl p-5 md:p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-3">{pest.icon}</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {pest.name}
              </h3>
              <p className="mt-1.5 text-sm text-muted leading-relaxed line-clamp-2">
                {pest.description}
              </p>
              <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/pest-control"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition"
          >
            View full pest library <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
