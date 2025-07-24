import { BlogPost } from "./BlogPost";

export const BlogSection = () => {
  const posts = [
    {
      title: "Exploiting Buffer Overflows: A Deep Dive",
      excerpt: "After months of studying binary exploitation, I successfully crafted my first buffer overflow exploit. Here's the technical breakdown of how stack-based overflows work and why memory protection matters.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["Security", "Binary Exploitation", "Assembly"],
      featured: true
    },
    {
      title: "Building My Custom Linux Kernel Module",
      excerpt: "Diving into kernel space programming to create a custom rootkit detection module. The learning curve was steep, but understanding how the kernel works at this level is invaluable.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      tags: ["Linux", "Kernel", "C Programming"]
    },
    {
      title: "Reverse Engineering Android APKs",
      excerpt: "Using tools like jadx, apktool, and frida to analyze Android applications. Found some interesting security vulnerabilities along the way.",
      date: "Dec 5, 2024",
      readTime: "5 min read",
      tags: ["Android", "Reverse Engineering", "Mobile Security"]
    },
    {
      title: "My Homelab Setup: From Pi to Proxmox",
      excerpt: "Building a professional-grade homelab for security research and development. From network segmentation to virtualization, here's my complete setup.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      tags: ["Homelab", "Networking", "Virtualization"]
    },
    {
      title: "Cracking WPA2 Handshakes with Hashcat",
      excerpt: "Exploring wireless security by capturing and cracking WPA2 handshakes. A practical demonstration of why strong passwords matter in wireless networks.",
      date: "Nov 20, 2024",
      readTime: "5 min read",
      tags: ["WiFi Security", "Hashcat", "Penetration Testing"]
    },
    {
      title: "Year in Review: From Script Kiddie to Security Researcher",
      excerpt: "Reflecting on my journey from basic scripting to understanding complex security vulnerabilities. The path of continuous learning in cybersecurity.",
      date: "Nov 15, 2024",
      readTime: "4 min read",
      tags: ["Personal Growth", "Security Career", "Learning"]
    }
  ];

  return (
    <section id="posts" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-terminal-green font-mono text-lg">&gt;</span>
            <h2 className="text-4xl font-bold text-terminal-green font-mono neon-glow">LOG_ENTRIES.DB</h2>
          </div>
          <div className="rounded-2xl border border-terminal-green-dim p-8 bg-background-darker/60 backdrop-blur-lg max-w-4xl mx-auto hover:bg-background-darker/70 transition-all duration-500 animate-slide-up">
            <p className="text-lg text-text-terminal font-mono leading-relaxed mb-4">
              <span className="text-terminal-green">$</span> tail -f /var/log/hacker_journey.log
            </p>
            <p className="text-lg text-text-terminal font-mono leading-relaxed">
              Real-time updates from the digital frontier. Each entry documents discoveries, 
              exploits, and insights from my ongoing exploration of cybersecurity and system architecture.
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