import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Globe } from "lucide-react";

export const NewsSection = () => {
  const newsPost = {
    title: "Welcome to My Digital Portfolio",
    excerpt: "After wanting a professional online presence for quite some time, I finally decided to build this website from scratch using modern web technologies and design principles.",
    content: "Creating this website has been an exciting personal project that allowed me to showcase my skills in web development and design. Built with React, TypeScript, and Tailwind CSS, this platform represents hours of careful planning, coding, and refinement. From choosing the right color palette and typography to implementing smooth animations and responsive design, every detail was crafted with intention. The goal was to create a clean, modern, and engaging digital space that effectively communicates who I am and what I do. This website serves as both a portfolio and a testament to my commitment to quality development and user experience design.",
    date: "Jan 25, 2025",
    readTime: "2 min read",
    tags: ["Web Development", "Portfolio", "React"]
  };

  return (
    <section id="news" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">Latest News</h2>
          <div className="rounded-2xl border border-border p-8 bg-surface shadow-elegant-lg hover:shadow-elegant-xl hover:scale-105 transition-all duration-500 animate-slide-up elegant-glow">
            <p className="text-lg text-text-secondary leading-relaxed">
              Stay updated with the latest announcements, development progress, and insights about this website.
            </p>
          </div>
        </div>
        
        <div className="animate-slide-up">
          <Card className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-2xl border border-border shadow-elegant hover:shadow-elegant-xl backdrop-blur-lg elegant-glow bg-primary/5 ring-2 ring-primary/20 shadow-elegant-lg">
            <CardHeader className="space-y-4">
              <div className="flex items-center justify-between text-sm text-text-muted">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{newsPost.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{newsPost.readTime}</span>
                  </div>
                </div>
                <Badge variant="outline" className="rounded-lg border border-primary bg-primary/10 text-primary font-medium hover:scale-105 transition-transform shadow-elegant">
                  Featured
                </Badge>
              </div>
              
              <div className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
                  {newsPost.title}
                </h3>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300 font-medium">
                {newsPost.excerpt}
              </p>
              
              <p className="text-text-secondary leading-relaxed text-sm group-hover:text-text-primary transition-colors duration-300">
                {newsPost.content}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {newsPost.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs rounded-lg border border-border bg-background text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-elegant">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};