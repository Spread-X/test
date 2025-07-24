import { BlogPost } from "./BlogPost";

export const BlogSection = () => {
  const posts = [
    {
      title: "Building Modern React Applications",
      excerpt: "Exploring the latest React patterns and best practices for creating scalable, maintainable applications with TypeScript and modern tooling.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "TypeScript", "Web Development"],
      featured: true
    },
    {
      title: "Designing Beautiful User Interfaces",
      excerpt: "A deep dive into modern UI/UX principles, from color theory and typography to creating intuitive user experiences that delight users.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      tags: ["UI/UX", "Design", "Frontend"]
    },
    {
      title: "Performance Optimization Strategies",
      excerpt: "Techniques for optimizing web applications, from code splitting and lazy loading to advanced caching strategies and bundle optimization.",
      date: "Dec 5, 2024",
      readTime: "5 min read",
      tags: ["Performance", "Optimization", "Web Vitals"]
    },
    {
      title: "API Design and Best Practices",
      excerpt: "Creating robust, scalable APIs with proper error handling, documentation, and security considerations for modern web applications.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      tags: ["API", "Backend", "Architecture"]
    },
    {
      title: "Modern CSS Techniques",
      excerpt: "Exploring CSS Grid, Flexbox, custom properties, and modern layout techniques for creating responsive, maintainable stylesheets.",
      date: "Nov 20, 2024",
      readTime: "5 min read",
      tags: ["CSS", "Responsive Design", "Frontend"]
    },
    {
      title: "My Development Journey",
      excerpt: "Reflecting on my path from learning the basics to becoming a full-stack developer, sharing lessons learned and advice for newcomers.",
      date: "Nov 15, 2024",
      readTime: "4 min read",
      tags: ["Career", "Learning", "Personal Growth"]
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