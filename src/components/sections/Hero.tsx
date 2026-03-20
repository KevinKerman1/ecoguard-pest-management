import { Star, ShieldCheck, Clock, Leaf } from "lucide-react";
import ZipChecker from "../forms/ZipChecker";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#0f1f08] via-[#1a3311] to-[#0d2b06] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 25% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 20%, rgba(255,255,255,0.08) 0%, transparent 40%)"
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Trust badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-primary-light" />
              Licensed & Insured
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm">
              <Leaf className="w-3.5 h-3.5 text-primary-light" />
              Eco-Friendly Products
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium backdrop-blur-sm">
              <Clock className="w-3.5 h-3.5 text-primary-light" />
              Same-Day Service
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Pests don&apos;t stand
            <span className="block text-primary-light">a chance.</span>
          </h1>

          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl">
            Professional, eco-friendly pest control trusted by <strong className="text-white">26,000+ homeowners</strong> across California, Oregon, Washington, Tennessee & Nevada since 2011.
          </p>

          {/* Zip checker */}
          <div className="mt-8 md:mt-10">
            <p className="text-sm text-white/50 mb-3 font-medium uppercase tracking-wider">
              Check if we serve your area
            </p>
            <ZipChecker variant="hero" />
          </div>

          {/* Social proof */}
          <div className="mt-8 flex flex-wrap items-center gap-6 text-white/60">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm font-medium text-white/80">4.9 from 26,645+ reviews</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <span>Google</span>
              <span>•</span>
              <span>Yelp</span>
              <span>•</span>
              <span>BBB A+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
