import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Globe } from "lucide-react";

export const NewsSection = () => {
  const newsPost = {
    title: "Welcome to My Digital Space",
    excerpt: "After years of sharing trading insights and crypto analysis on YouTube, I decided it was time to create a dedicated platform where I could connect with my community beyond video content.",
    content: "Building this website has been an exciting journey of bringing together my passion for trading, technology, and community building. As the SpreadX YouTube channel has grown, I realized the need for a central hub where subscribers and fellow traders could access resources, insights, and updates in a more structured format. This platform represents the next evolution of how I share knowledge about cryptocurrency trading, options strategies, and market analysis. Here, you'll find curated content, exclusive insights, and a direct way to stay connected with the latest developments in both my trading journey and the broader financial markets.",
    date: "Jan 25, 2025",
    readTime: "2 min read",
    tags: ["Announcement", "Website Launch", "Community"]
  };

  return (
    <section id="news" className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">Latest News</h2>
          <div className="rounded-2xl border border-border p-8 bg-surface shadow-elegant-lg hover:shadow-elegant-xl hover:scale-105 transition-all duration-500 animate-slide-up elegant-glow">
            <p className="text-lg text-text-secondary leading-relaxed">
              Stay updated with the latest announcements, website updates, and insights from the SpreadX community.
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