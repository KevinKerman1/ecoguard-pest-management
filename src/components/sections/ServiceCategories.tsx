import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { serviceCategories } from "@/data/services";

export default function ServiceCategories() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Complete pest management solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/services/${cat.slug}`}
              className="group relative bg-white rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />

              <div className="relative">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-2 text-muted leading-relaxed">{cat.description}</p>

                {cat.items && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="px-3 py-1 text-xs font-medium bg-surface rounded-full text-muted">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-primary">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
