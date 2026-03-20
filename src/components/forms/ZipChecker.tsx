"use client";

import { useState, useRef } from "react";
import { Search, MapPin, Phone, CheckCircle, XCircle, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CoverageResult {
  covered: boolean;
  office?: {
    city: string;
    state: string;
    stateCode: string;
    phone: string;
    address?: string;
  };
  distance?: number;
  message: string;
  error?: string;
}

export default function ZipChecker({ variant = "hero" }: { variant?: "hero" | "inline" | "compact" }) {
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<CoverageResult | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCheck = async () => {
    if (!/^\d{5}$/.test(zip)) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`/api/check-coverage?zip=${zip}`);
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ covered: false, message: "Something went wrong. Please call us at (866) 326-2847." });
    }
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleCheck();
  };

  const isHero = variant === "hero";

  return (
    <div className={isHero ? "w-full max-w-xl" : "w-full"}>
      {/* Input group */}
      <div className={`flex ${isHero ? "shadow-2xl shadow-black/20" : "shadow-lg"} rounded-full overflow-hidden bg-white`}>
        <div className="relative flex-1">
          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
          <input
            ref={inputRef}
            id="zip-checker"
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={5}
            placeholder="Enter your zip code"
            value={zip}
            onChange={(e) => {
              setZip(e.target.value.replace(/\D/g, "").slice(0, 5));
              setResult(null);
            }}
            onKeyDown={handleKeyDown}
            className={`w-full pl-12 pr-4 ${isHero ? "py-4 md:py-5 text-lg" : "py-3 text-base"} text-foreground bg-transparent outline-none placeholder:text-muted/60`}
          />
        </div>
        <button
          onClick={handleCheck}
          disabled={zip.length !== 5 || loading}
          className={`flex items-center gap-2 ${
            isHero ? "px-6 md:px-8 text-base" : "px-5 text-sm"
          } font-semibold text-white bg-primary hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition shrink-0`}
        >
          {loading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <>
              <Search className="w-4 h-4 md:hidden" />
              <span className="hidden md:inline">Check Coverage</span>
              <Search className="hidden md:inline w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Result */}
      {result && (
        <div
          className={`mt-4 ${
            isHero ? "p-5 md:p-6" : "p-4"
          } rounded-2xl backdrop-blur-sm ${
            result.covered
              ? "bg-white/95 border-2 border-primary-light"
              : "bg-white/95 border-2 border-accent"
          } shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300`}
        >
          {result.covered ? (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">{result.message}</p>
                  {result.office?.address && (
                    <p className="text-sm text-muted mt-1">{result.office.address}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-full transition text-sm"
                >
                  Schedule Free Inspection
                  <ArrowRight className="w-4 h-4" />
                </Link>
                {result.office?.phone && (
                  <a
                    href={`tel:${result.office.phone.replace(/\D/g, "")}`}
                    className="flex items-center justify-center gap-2 border-2 border-primary text-primary font-semibold px-5 py-2.5 rounded-full hover:bg-surface-alt transition text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    Call {result.office.phone}
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <XCircle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground">{result.message}</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <a
                  href="tel:8663262847"
                  className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-5 py-2.5 rounded-full transition text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call (866) 326-2847
                </a>
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 border-2 border-foreground/20 text-foreground font-semibold px-5 py-2.5 rounded-full hover:bg-surface transition text-sm"
                >
                  Get Notified When We Expand
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
