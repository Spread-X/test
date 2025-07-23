import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";

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
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
      featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-surface to-accent/5' : 'bg-surface'
    }`}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between text-sm text-text-secondary">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{readTime}</span>
            </div>
          </div>
          {featured && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Featured
            </Badge>
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-text-primary group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-text-secondary leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};