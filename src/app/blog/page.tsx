import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Pest Control Tips & Resources",
  description:
    "Expert pest control tips, guides, and resources from EcoGuard. Learn about pest prevention, identification, and treatment for your home and business.",
};

const featuredPosts = [
  {
    title: "Cockroach Repellent: Natural and Commercial Solutions That Work",
    slug: "/blog/cockroaches/cockroach-repellent",
    category: "Cockroaches",
    excerpt: "Discover effective natural and commercial cockroach repellent solutions to keep your home roach-free.",
    readTime: "8 min read",
  },
  {
    title: "How to Repel Wasps: Natural and Effective Methods for Wasp Control",
    slug: "/blog/wasps/how-to-repel-wasps",
    category: "Wasps",
    excerpt: "Learn safe, proven methods to keep wasps away from your home and outdoor spaces.",
    readTime: "6 min read",
  },
  {
    title: "Winter Pest Control: Complete Guide to Cold Weather Pest Management",
    slug: "/blog/seasonal-pest-control/winter-pest-control",
    category: "Seasonal",
    excerpt: "Don't let pests find warmth inside your home this winter. Complete prevention and treatment guide.",
    readTime: "10 min read",
  },
  {
    title: "Where Do Maggots Come From? Complete Guide to Fly Larvae",
    slug: "/blog/flies/where-do-maggots-come-from",
    category: "Flies",
    excerpt: "Understanding the lifecycle of flies and how to prevent maggot infestations in your home.",
    readTime: "7 min read",
  },
  {
    title: "14 Natural Ant Repellent Strategies That Actually Work",
    slug: "/blog/ants/natural-ant-repellent",
    category: "Ants",
    excerpt: "Proven natural methods to repel ants without harsh chemicals. Safe for kids and pets.",
    readTime: "9 min read",
  },
  {
    title: "16 Common Types of Ants in California",
    slug: "/blog/ants/types-of-ants",
    category: "Ants",
    excerpt: "Identify the most common ant species in California and learn which ones require professional treatment.",
    readTime: "12 min read",
  },
  {
    title: "How to Get Rid of Ants Inside and Outside Your Home",
    slug: "/blog/ants/how-to-get-rid-of-ants",
    category: "Ants",
    excerpt: "Step-by-step guide to eliminating ant infestations from your home and preventing them from coming back.",
    readTime: "11 min read",
  },
  {
    title: "Fall Pest Control: Complete Guide to Seasonal Prevention & Treatment",
    slug: "/blog/seasonal-pest-control/fall-pest-control",
    category: "Seasonal",
    excerpt: "Prepare your home for fall pest invasions with our comprehensive prevention guide.",
    readTime: "9 min read",
  },
  {
    title: "Common Signs of Carpenter Ant Damage",
    slug: "/blog/ants/carpenter-ant-damage",
    category: "Ants",
    excerpt: "Learn to spot carpenter ant damage early before it becomes a costly structural problem.",
    readTime: "7 min read",
  },
];

const categories = [
  "All", "Ants", "Cockroaches", "Wasps", "Flies", "Seasonal", "Rodents", "Termites", "Bed Bugs", "Spiders",
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0f1f08] via-[#1a3311] to-[#0d2b06] text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-primary-light uppercase tracking-wider mb-3">Blog & Resources</p>
            <h1 className="text-4xl md:text-5xl font-bold">Expert pest control tips & guides</h1>
            <p className="mt-4 text-lg text-white/70">
              233 articles to help you identify, prevent, and eliminate pests. Written by our licensed technicians.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-white border-b border-border sticky top-16 md:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition ${
                  cat === "All"
                    ? "bg-primary text-white"
                    : "bg-surface text-muted hover:bg-surface-alt hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.slug}
                className="group bg-white rounded-2xl border border-border hover:border-primary/30 hover:shadow-lg transition-all overflow-hidden"
              >
                {/* Placeholder image area */}
                <div className="h-48 bg-gradient-to-br from-surface-alt to-surface flex items-center justify-center">
                  <span className="text-4xl opacity-40">
                    {post.category === "Ants" ? "🐜" : post.category === "Cockroaches" ? "🪳" : post.category === "Wasps" ? "🐝" : post.category === "Flies" ? "🪰" : "🌿"}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-alt text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-muted">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Read article <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <span className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium">1</span>
            {[2, 3, 4, 5].map((n) => (
              <button key={n} className="px-4 py-2 rounded-lg bg-surface text-muted text-sm font-medium hover:bg-surface-alt transition">
                {n}
              </button>
            ))}
            <span className="px-3 py-2 text-muted">...</span>
            <button className="px-4 py-2 rounded-lg bg-surface text-muted text-sm font-medium hover:bg-surface-alt transition">
              20
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
