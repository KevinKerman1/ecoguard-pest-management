import { ShieldCheck, RotateCcw, Zap, Heart } from "lucide-react";

const guarantees = [
  {
    icon: RotateCcw,
    title: "Free Return Visits",
    description: "If pests come back between treatments, so do we — at no additional cost.",
  },
  {
    icon: Zap,
    title: "Immediate Response",
    description: "Same-day and next-day service available for urgent pest situations.",
  },
  {
    icon: Heart,
    title: "100% Satisfaction",
    description: "We're not happy until you're happy. That's the EcoGuard guarantee.",
  },
];

export default function Guarantee() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary-dark to-[#0f1f08] text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Badge */}
          <div className="shrink-0">
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-primary-light/30 flex items-center justify-center">
              <div className="text-center">
                <ShieldCheck className="w-12 h-12 text-primary-light mx-auto mb-2" />
                <p className="text-xl font-bold">EcoGuard</p>
                <p className="text-sm text-white/70">Guarantee</p>
              </div>
              {/* Animated ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary-light/20 animate-ping" style={{ animationDuration: "3s" }} />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              We&apos;re not happy until you&apos;re happy
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-xl">
              Every service comes with our ironclad satisfaction guarantee. No fine print, no hassle.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {guarantees.map((g, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <g.icon className="w-6 h-6 text-primary-light" />
                  </div>
                  <h3 className="font-semibold text-lg">{g.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{g.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
