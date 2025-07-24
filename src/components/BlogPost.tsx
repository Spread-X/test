import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, FileText } from "lucide-react";

interface BlogPostProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featured?: boolean;
}

export const BlogPost = ({ title, excerpt, date, readTime, tags, featured = false }: BlogPostProps) => {
  return (
    <Card className={`group cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2 rounded-2xl border border-border shadow-elegant hover:shadow-elegant-xl backdrop-blur-lg elegant-glow ${
      featured ? 'bg-primary/5 ring-2 ring-primary/20 shadow-elegant-lg' : 'bg-surface hover:bg-surface-hover'
    }`}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between text-sm text-text-muted">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-primary" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-primary" />
              <span>{readTime}</span>
            </div>
          </div>
          {featured && (
            <Badge variant="outline" className="rounded-lg border border-primary bg-primary/10 text-primary font-medium hover:scale-105 transition-transform shadow-elegant">
              Featured
            </Badge>
          )}
        </div>
        
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
          <h3 className="text-xl font-bold text-text-primary group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-text-secondary leading-relaxed text-sm group-hover:text-text-primary transition-colors duration-300">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs rounded-lg border border-border bg-background text-text-muted hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105 shadow-elegant">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};