import { BlogPost } from "./BlogPost";

export const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Building Modern Web Applications",
      excerpt: "Exploring the latest trends in web development, from component architecture to performance optimization techniques that make applications fast and maintainable.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      tags: ["React", "Performance", "JavaScript"],
      featured: true
    },
    {
      id: 2,
      title: "The Art of Clean Code",
      excerpt: "Diving deep into writing code that not only works but is also readable, maintainable, and scalable. Best practices from industry experts.",
      date: "Dec 10, 2024",
      readTime: "6 min read",
      tags: ["Code Quality", "Best Practices", "Architecture"]
    },
    {
      id: 3,
      title: "Design Systems That Scale",
      excerpt: "Creating consistent design languages that grow with your product. From tokens to components, building systems that teams love to use.",
      date: "Dec 5, 2024",
      readTime: "5 min read",
      tags: ["Design Systems", "UI/UX", "Component Libraries"]
    },
    {
      id: 4,
      title: "Modern CSS Techniques",
      excerpt: "Exploring the latest CSS features like Grid, Flexbox, and Custom Properties to create beautiful and responsive layouts.",
      date: "Nov 28, 2024",
      readTime: "7 min read",
      tags: ["CSS", "Layout", "Responsive Design"]
    },
    {
      id: 5,
      title: "TypeScript in Practice",
      excerpt: "Moving beyond basic types to advanced TypeScript patterns that improve code quality and developer experience.",
      date: "Nov 20, 2024",
      readTime: "5 min read",
      tags: ["TypeScript", "Development", "JavaScript"]
    },
    {
      id: 6,
      title: "Year in Review: Growth & Learning",
      excerpt: "Reflecting on the journey of continuous learning in tech. Key insights, challenges overcome, and goals for the future.",
      date: "Nov 15, 2024",
      readTime: "4 min read",
      tags: ["Personal Growth", "Career", "Learning"]
    }
  ];

  return (
    <section id="posts" className="py-20 px-6 bg-gradient-to-b from-elegant-darker to-elegant-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-elegant-purple-light to-elegant-blue bg-clip-text text-transparent animate-slide-up">
            Recent Posts
          </h2>
          <div className="bg-card/50 backdrop-blur-lg p-8 rounded-3xl max-w-4xl mx-auto elegant-shadow hover:elegant-shadow-hover transition-all duration-500 hover:scale-[1.02] border border-border/50 animate-slide-up">
            <p className="text-lg text-elegant-light leading-relaxed mb-4">
              Sharing insights, experiences, and learnings from my journey in technology and design.
            </p>
            <p className="text-lg text-elegant-gray leading-relaxed">
              Each post explores different aspects of modern development, from technical deep-dives to 
              creative processes and industry trends.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <BlogPost post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};