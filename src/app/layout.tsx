import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCTA from "@/components/layout/MobileCTA";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "EcoGuard Pest Management | Professional Eco-Friendly Pest Control",
    template: "%s | EcoGuard Pest Management",
  },
  description:
    "Professional, eco-friendly pest control trusted by 26,000+ homeowners across California, Oregon, Washington, Tennessee & Nevada. Free inspections. Satisfaction guaranteed.",
  keywords: [
    "pest control",
    "exterminator",
    "eco-friendly pest control",
    "rodent control",
    "termite control",
    "ant control",
    "bed bug treatment",
    "commercial pest control",
    "residential pest control",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "EcoGuard Pest Management",
    title: "EcoGuard Pest Management | Professional Eco-Friendly Pest Control",
    description:
      "Professional, eco-friendly pest control trusted by 26,000+ homeowners. Free inspections. Satisfaction guaranteed.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5JMBW5');`,
          }}
        />
      </head>
      <body className="antialiased">
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JMBW5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
