import { BlogPost } from "./BlogPost";

export const BlogSection = () => {
  const posts = [
    {
      title: "Building My First SaaS: Lessons Learned",
      excerpt: "After months of development, I finally launched my first SaaS product. Here's what I learned about user feedback, iterative development, and the importance of solving real problems.",
      date: "Dec 15, 2024",
      readTime: "5 min read",
      tags: ["SaaS", "Startup", "Development"],
      featured: true
    },
    {
      title: "Why I Switched to TypeScript",
      excerpt: "Making the transition from JavaScript to TypeScript has been a game-changer for my development workflow. Here's why type safety matters more than you think.",
      date: "Dec 10, 2024",
      readTime: "3 min read",
      tags: ["TypeScript", "JavaScript", "Web Development"]
    },
    {
      title: "Remote Work: Finding Balance",
      excerpt: "Working remotely has its challenges and rewards. After two years of remote work, here are my tips for staying productive and maintaining work-life balance.",
      date: "Dec 5, 2024",
      readTime: "4 min read",
      tags: ["Remote Work", "Productivity", "Life"]
    },
    {
      title: "The Art of Code Reviews",
      excerpt: "Code reviews are more than just catching bugs. They're about knowledge sharing, maintaining standards, and building better teams. Here's how to do them right.",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      tags: ["Code Review", "Team", "Best Practices"]
    },
    {
      title: "Weekend Project: AI-Powered Todo App",
      excerpt: "I spent last weekend building a todo app that uses AI to help prioritize tasks. The results were surprisingly useful, and the learning experience was invaluable.",
      date: "Nov 20, 2024",
      readTime: "4 min read",
      tags: ["AI", "Side Project", "Productivity"]
    },
    {
      title: "Reflections on 2024",
      excerpt: "As the year comes to an end, I'm looking back at the projects I've built, the lessons I've learned, and the goals I want to pursue in the coming year.",
      date: "Nov 15, 2024",
      readTime: "3 min read",
      tags: ["Reflection", "Goals", "Personal Growth"]
    }
  ];

  return (
    <section id="posts" className="py-20 px-6 bg-surface-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">Life Updates</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Sharing thoughts, experiences, and lessons from my journey in tech and life. 
            Each post is a glimpse into what I'm learning and building.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};