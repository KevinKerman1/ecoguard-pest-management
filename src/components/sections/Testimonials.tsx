"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Maria Rodriguez",
    source: "Google",
    timeAgo: "2 weeks ago",
    text: "EcoGuard truly delivered! The technicians were professional, knowledgeable, and thorough. They took time to explain the treatment process and haven't seen a single pest since!",
    rating: 5,
  },
  {
    name: "James Chen",
    source: "Google",
    timeAgo: "1 month ago",
    text: "We had a serious rodent problem in our restaurant and EcoGuard responded immediately. Their commercial team was discreet, efficient, and helped us pass our health inspection with flying colors.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    source: "Google",
    timeAgo: "3 weeks ago",
    text: "Best pest control service we've ever used! The eco-friendly products give us peace of mind with kids and pets. Their guarantee is real — they came back twice at no charge until everything was resolved.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Customer Reviews</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Trusted by 26,000+ homeowners
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-xl font-bold text-foreground">4.9</span>
            <span className="text-muted">out of 5</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 md:p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-primary/20 mb-4" />
              <p className="text-foreground leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted">{t.source} · {t.timeAgo}</p>
                </div>
                <div className="flex">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://g.page/r/CVwjin2t_MmaEBM/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition"
          >
            Leave us a review →
          </a>
        </div>
      </div>
    </section>
  );
}
