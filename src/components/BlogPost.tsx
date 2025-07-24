import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPostProps {
  post: {
    id?: number;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    tags: string[];
    featured?: boolean;
  };
}

export const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <article className="bg-card/50 backdrop-blur-lg border border-border/50 p-6 rounded-3xl hover:border-elegant-purple/50 transition-all duration-500 group cursor-pointer hover:scale-[1.02] hover:-translate-y-2 elegant-shadow hover:elegant-shadow-hover">
      <div className="flex items-center gap-2 mb-3">
        <Calendar className="w-4 h-4 text-elegant-gray group-hover:text-elegant-purple transition-colors" />
        <time className="text-elegant-gray text-sm group-hover:text-elegant-purple transition-colors">{post.date}</time>
        <Clock className="w-4 h-4 text-elegant-gray ml-4 group-hover:text-elegant-purple transition-colors" />
        <span className="text-elegant-gray text-sm group-hover:text-elegant-purple transition-colors">{post.readTime}</span>
      </div>
      
      <h3 className="text-xl font-bold text-elegant-light mb-3 group-hover:text-elegant-purple-light transition-all duration-500">
        {post.title}
      </h3>
      
      <p className="text-elegant-gray mb-4 leading-relaxed group-hover:text-elegant-light transition-colors duration-300">
        {post.excerpt}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag, index) => (
          <Badge key={tag} variant="outline" className="text-xs rounded-lg border-elegant-gray/30 bg-elegant-purple/10 text-elegant-gray hover:bg-elegant-purple/20 hover:text-elegant-purple-light hover:border-elegant-purple/50 transition-all duration-300 hover:scale-105">
            #{tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center text-elegant-purple font-medium text-sm group-hover:translate-x-2 transition-all duration-500">
        <span className="mr-2">Read More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </article>
  );
};