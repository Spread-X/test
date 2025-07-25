import { BlogPost } from "./BlogPost";

export const BlogSection = () => {
  const posts = [
    {
      title: "Get Ready For The Biggest Crypto Surge Of 2025 | XRP XLM XDC & MORE!",
      excerpt: "The biggest crypto surge of 2025 is coming, and the projects leading it aren't just hype coins—they're utility-driven assets like XRP, XLM, XDC, and other ISO 20022-compliant networks.",
      date: "Jan 20, 2025",
      readTime: "12 min watch",
      tags: ["Crypto", "XRP", "Investment"],
      featured: true
    },
    {
      title: "If You Hold STELLAR XLM This Is CRUCIAL To Know",
      excerpt: "XLM is showing one of the strongest setups we've seen in years — with a potential golden cross, a bullish pennant formation, and the highly anticipated Protocol 23 upgrade all converging.",
      date: "Jan 15, 2025",
      readTime: "10 min watch",
      tags: ["Stellar", "XLM", "Trading"]
    },
    {
      title: "Master Crypto Trading Spreads in 5 Minutes",
      excerpt: "Learn the essential concept of bid ask spread in cryptocurrency trading and how liquidity affects your trading decisions. Understanding market dynamics can help you make better trades.",
      date: "Jan 10, 2025",
      readTime: "5 min watch",
      tags: ["Trading", "Spreads", "Education"]
    },
    {
      title: "Options Trading With Credit Spreads (FULL Trading Plan w/ Results)",
      excerpt: "Trading credit spreads is a very popular strategy among income-based traders. Learn data-driven options strategies with complete trading plan and real results.",
      date: "Dec 28, 2024",
      readTime: "15 min watch",
      tags: ["Options", "Credit Spreads", "Strategy"]
    },
    {
      title: "How to Manage Losing Credit Spread",
      excerpt: "Credit spreads can generate consistent income, but one costly mistake could erase months or even years of gains. Learn critical lessons from real trading experiences.",
      date: "Dec 20, 2024",
      readTime: "8 min watch",
      tags: ["Risk Management", "Options", "Trading"]
    },
    {
      title: "Why I Trade 10 Wide SPX Credit Spreads for 0 DTE",
      excerpt: "Delving into zero-day-to-expiration trading and sharing insights based on extensive analysis. Learn about 'The Sweet Spot' in 0 DTE trading and ideal spread widths.",
      date: "Dec 15, 2024",
      readTime: "12 min watch",
      tags: ["0 DTE", "SPX", "Options"]
    }
  ];

  return (
    <section id="posts" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">Latest Posts</h2>
          <div className="rounded-2xl border border-border p-8 bg-surface shadow-elegant-lg max-w-4xl mx-auto hover:shadow-elegant-xl hover:scale-105 transition-all duration-500 animate-slide-up elegant-glow">
            <p className="text-lg text-text-secondary leading-relaxed mb-4">
              Sharing insights, tutorials, and thoughts on web development, design, and technology. 
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              Each post explores practical solutions, best practices, and lessons learned from real-world projects.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogPost {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};