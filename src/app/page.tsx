import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Services from "@/components/sections/Services";
import ServiceCategories from "@/components/sections/ServiceCategories";
import CommercialIndustries from "@/components/sections/CommercialIndustries";
import Guarantee from "@/components/sections/Guarantee";
import ServiceAreas from "@/components/sections/ServiceAreas";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <ServiceCategories />
      <CommercialIndustries />
      <Guarantee />
      <ServiceAreas />
      <Testimonials />
      <FAQ />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PestControlService",
            name: "EcoGuard Pest Management",
            url: "https://www.ecoguardpestmanagement.com",
            telephone: "+1-866-326-2847",
            email: "service@ecoguardpestmanagement.com",
            foundingDate: "2011",
            description:
              "Professional, eco-friendly pest control trusted by 26,000+ homeowners across California, Oregon, Washington, Tennessee & Nevada.",
            areaServed: [
              { "@type": "State", name: "California" },
              { "@type": "State", name: "Oregon" },
              { "@type": "State", name: "Washington" },
              { "@type": "State", name: "Tennessee" },
              { "@type": "State", name: "Nevada" },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "26645",
              bestRating: "5",
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
              ],
              opens: "07:00",
              closes: "21:00",
            },
            priceRange: "$$",
            sameAs: [
              "https://www.facebook.com/EcoGuardPestManagement",
              "https://www.linkedin.com/company/ecoguard-pest-management",
              "https://www.yelp.com/biz/ecoguard-pest-management-folsom-5",
            ],
          }),
        }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What types of pests do you treat?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We treat over 40 types of pests including ants, termites, rodents, cockroaches, bed bugs, spiders, mosquitoes, wasps, fleas, ticks, and many more.",
                },
              },
              {
                "@type": "Question",
                name: "Are your products safe for children and pets?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We use EPA-approved, eco-friendly products that are safe for your family and pets when applied as directed.",
                },
              },
              {
                "@type": "Question",
                name: "Do you offer emergency pest control services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes. We offer same-day and next-day service for urgent pest situations. Call (866) 326-2847 for emergency service.",
                },
              },
              {
                "@type": "Question",
                name: "What is your guarantee?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We offer a full satisfaction guarantee. If pests return between scheduled treatments, we'll come back at no additional cost.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
