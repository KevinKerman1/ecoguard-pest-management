export interface PestService {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  name: string;
  slug: string;
  description: string;
  icon: string;
  items?: string[];
}

export const pestTypes: PestService[] = [
  { name: "Rodent Control", slug: "rodent-control", description: "Complete rodent management including inspection, trapping, exclusion, and sanitation.", icon: "🐀" },
  { name: "Ant Control", slug: "ant-control", description: "Eliminate ant colonies at the source with targeted baiting and barrier treatments.", icon: "🐜" },
  { name: "Termite Control", slug: "termite-control", description: "Comprehensive termite protection from inspection through treatment and repair.", icon: "🪲" },
  { name: "Bed Bug Control", slug: "bed-bug-control", description: "Heat treatments and targeted applications to eliminate bed bugs at every life stage.", icon: "🛏️" },
  { name: "Mosquito Control", slug: "mosquito-control", description: "Reduce mosquito populations with larvicide treatments and barrier sprays.", icon: "🦟" },
  { name: "Cockroach Control", slug: "cockroach-control", description: "Professional-grade baits and treatments to eliminate roach infestations fast.", icon: "🪳" },
  { name: "Spider Control", slug: "spider-control", description: "Remove webs, treat entry points, and reduce spider populations around your home.", icon: "🕷️" },
  { name: "Wasp Control", slug: "wasp-control", description: "Safe nest removal and preventive treatments for wasps, hornets, and yellow jackets.", icon: "🐝" },
];

export const serviceCategories: ServiceCategory[] = [
  {
    name: "Residential Pest Control",
    slug: "residential-pest-control",
    description: "Customized treatment plans for your home, designed to eliminate pests and keep them from coming back. Family-safe products and flexible scheduling.",
    icon: "🏠",
    items: ["Interior Treatment", "Exterior Perimeter", "Attic & Crawlspace", "Garage Protection"],
  },
  {
    name: "Commercial Pest Control",
    slug: "commercial-pest-control",
    description: "Discreet, effective pest management for businesses of all sizes. Meet health code requirements and protect your reputation.",
    icon: "🏢",
    items: ["Restaurants", "Offices", "Warehouses", "Hotels", "Healthcare", "Schools"],
  },
  {
    name: "Insulation Services",
    slug: "pest-control-insulation",
    description: "Pest control insulation that protects your home from pests while improving energy efficiency.",
    icon: "🏗️",
  },
  {
    name: "Lawn Care & Weed Control",
    slug: "lawn-pest-control",
    description: "Keep your lawn healthy and pest-free with targeted treatments for grubs, chinch bugs, and invasive weeds.",
    icon: "🌿",
  },
];

export const commercialIndustries = [
  { name: "Restaurants", slug: "restaurants", icon: "🍽️" },
  { name: "Office Buildings", slug: "offices", icon: "🏢" },
  { name: "Warehouses", slug: "warehouses", icon: "📦" },
  { name: "Hotels", slug: "hotels", icon: "🏨" },
  { name: "Grocery Stores", slug: "supermarkets", icon: "🛒" },
  { name: "Healthcare", slug: "hospitals", icon: "🏥" },
  { name: "Schools", slug: "schools", icon: "🏫" },
  { name: "Apartments", slug: "apartments", icon: "🏘️" },
];
