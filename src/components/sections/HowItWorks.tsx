import { Search, Calendar, ShieldCheck } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Check Your Coverage",
    description: "Enter your zip code to instantly see if we serve your area and connect with your local office.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Schedule Inspection",
    description: "Book a free, no-obligation inspection at a time that works for you. Same-day appointments available.",
  },
  {
    icon: ShieldCheck,
    step: "03",
    title: "Get Protected",
    description: "Our licensed technicians create a customized treatment plan using eco-friendly products. Guaranteed results.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Simple Process</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Three steps to a pest-free home
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div key={i} className="relative text-center group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-primary/30 to-primary/10" />
              )}

              <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-surface-alt group-hover:bg-primary/10 transition-colors duration-300 mb-6">
                <step.icon className="w-10 h-10 text-primary" />
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shadow-lg">
                  {step.step}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted leading-relaxed max-w-sm mx-auto">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
