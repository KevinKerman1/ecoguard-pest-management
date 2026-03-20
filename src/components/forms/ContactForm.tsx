"use client";

import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle, Loader2, Send } from "lucide-react";

const serviceOptions = [
  "Residential Pest Control",
  "Commercial Pest Control",
  "Termite Inspection",
  "Rodent Control",
  "Bed Bug Treatment",
  "Mosquito Control",
  "Insulation Services",
  "Lawn Care",
  "Other",
];

const propertyTypes = [
  "Single Family Home",
  "Apartment / Condo",
  "Townhouse",
  "Office / Commercial",
  "Restaurant",
  "Warehouse / Industrial",
  "Multi-Family / HOA",
  "Other",
];

const urgencyOptions = [
  { label: "Emergency — I need help today", value: "emergency" },
  { label: "This week", value: "this_week" },
  { label: "Within 2 weeks", value: "two_weeks" },
  { label: "Just exploring options", value: "exploring" },
];

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    service: "",
    propertyType: "",
    urgency: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    message: "",
  });

  const updateForm = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return form.service !== "";
      case 2: return form.propertyType !== "";
      case 3: return form.urgency !== "";
      case 4: return form.firstName && form.email && form.phone && form.zip;
      default: return false;
    }
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    // In production, this would POST to HubSpot or your CRM
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl p-8 md:p-12 border border-border text-center">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank you!</h3>
        <p className="text-muted max-w-md mx-auto">
          A local technician will contact you within 24 hours to schedule your free inspection. For immediate assistance, call{" "}
          <a href="tel:8663262847" className="text-primary font-semibold">(866) 326-2847</a>.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 md:p-8 border border-border">
      {/* Progress bar */}
      <div className="flex items-center gap-2 mb-8">
        {[1, 2, 3, 4].map((s) => (
          <div key={s} className="flex-1 flex items-center gap-2">
            <div
              className={`h-2 flex-1 rounded-full transition-colors ${
                s <= step ? "bg-primary" : "bg-border"
              }`}
            />
          </div>
        ))}
        <span className="text-sm text-muted ml-2">Step {step} of 4</span>
      </div>

      {/* Step 1: Service */}
      {step === 1 && (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">What service do you need?</h3>
          <p className="text-sm text-muted mb-6">Select the type of service you&apos;re interested in.</p>
          <div className="grid grid-cols-2 gap-2">
            {serviceOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => updateForm("service", opt)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition border ${
                  form.service === opt
                    ? "border-primary bg-surface-alt text-primary"
                    : "border-border hover:border-primary/30 text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Property type */}
      {step === 2 && (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">What type of property?</h3>
          <p className="text-sm text-muted mb-6">This helps us assign the right specialist.</p>
          <div className="grid grid-cols-2 gap-2">
            {propertyTypes.map((opt) => (
              <button
                key={opt}
                onClick={() => updateForm("propertyType", opt)}
                className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition border ${
                  form.propertyType === opt
                    ? "border-primary bg-surface-alt text-primary"
                    : "border-border hover:border-primary/30 text-foreground"
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Urgency */}
      {step === 3 && (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">How soon do you need service?</h3>
          <p className="text-sm text-muted mb-6">We offer same-day service for emergencies.</p>
          <div className="space-y-2">
            {urgencyOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => updateForm("urgency", opt.value)}
                className={`w-full px-4 py-3 rounded-xl text-sm font-medium text-left transition border ${
                  form.urgency === opt.value
                    ? "border-primary bg-surface-alt text-primary"
                    : "border-border hover:border-primary/30 text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Contact info */}
      {step === 4 && (
        <div>
          <h3 className="text-xl font-bold text-foreground mb-1">Your contact information</h3>
          <p className="text-sm text-muted mb-6">We&apos;ll reach out to schedule your free inspection.</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">First Name *</label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) => updateForm("firstName", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-sm"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Last Name</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => updateForm("lastName", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-sm"
                placeholder="Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateForm("email", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-sm"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Phone *</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => updateForm("phone", e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-sm"
                placeholder="(555) 123-4567"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1">Zip Code *</label>
              <input
                type="text"
                inputMode="numeric"
                maxLength={5}
                value={form.zip}
                onChange={(e) => updateForm("zip", e.target.value.replace(/\D/g, "").slice(0, 5))}
                className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-sm"
                placeholder="Enter your zip code"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-foreground mb-1">Anything else we should know?</label>
              <textarea
                value={form.message}
                onChange={(e) => updateForm("message", e.target.value)}
                rows={3}
                className="w-full px-4 py-2.5 rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition text-sm resize-none"
                placeholder="Describe your pest issue (optional)"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex justify-between mt-8">
        {step > 1 ? (
          <button
            onClick={() => setStep(step - 1)}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-muted hover:text-foreground transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            onClick={() => setStep(step + 1)}
            disabled={!canProceed()}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-full transition text-sm"
          >
            Continue
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!canProceed() || submitting}
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold px-6 py-2.5 rounded-full transition text-sm"
          >
            {submitting ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {submitting ? "Submitting..." : "Get Free Estimate"}
          </button>
        )}
      </div>
    </div>
  );
}
