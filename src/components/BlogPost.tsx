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
    <Card className={`group cursor-pointer transition-all duration-500 hover:scale-105 rounded-2xl border border-terminal-green-dim backdrop-blur-lg hover:border-terminal-green hover:shadow-lg hover:shadow-terminal-green/10 ${
      featured ? 'bg-terminal-green/10 ring-2 ring-terminal-green/30' : 'bg-background-darker/50 hover:bg-terminal-green/5'
    }`}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between text-sm text-text-dim font-mono">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-terminal-green" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-terminal-green" />
              <span>{readTime}</span>
            </div>
          </div>
          {featured && (
            <Badge variant="outline" className="rounded-lg border border-terminal-green bg-terminal-green/20 text-terminal-green font-mono hover:scale-105 transition-transform">
              [FEATURED]
            </Badge>
          )}
        </div>
        
        <div className="flex items-start gap-3">
          <FileText className="w-5 h-5 text-terminal-green mt-1 flex-shrink-0" />
          <h3 className="text-xl font-bold text-terminal-green group-hover:text-matrix-green transition-colors font-mono leading-tight">
            {title}
          </h3>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <p className="text-text-terminal leading-relaxed font-mono text-sm">
          <span className="text-terminal-green">&gt; </span>
          {excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs font-mono rounded-lg border border-terminal-green-dim bg-background-darker/50 text-text-dim hover:text-terminal-green hover:bg-terminal-green/10 transition-all duration-300 hover:scale-105">
              #{tag.toLowerCase().replace(' ', '_')}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};