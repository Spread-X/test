import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Lightbulb, Users, Palette, Zap, Globe, Award } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Clean Development",
      description: "Writing maintainable, scalable code with modern best practices and elegant architecture solutions."
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces that combine aesthetic appeal with intuitive user experiences."
    },
    {
      icon: Zap,
      title: "Performance Focus",
      description: "Optimizing applications for speed, efficiency, and seamless user interactions across all devices."
    },
    {
      icon: Globe,
      title: "Web Technologies",
      description: "Expertise in modern frameworks, APIs, and cutting-edge web development technologies."
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Constantly exploring new technologies and creative solutions to complex digital challenges."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively with teams to deliver projects that exceed expectations and drive results."
    },
    {
      icon: Award,
      title: "Quality Driven",
      description: "Committed to delivering high-quality solutions with attention to detail and user satisfaction."
    },
    {
      icon: Heart,
      title: "Passion Projects",
      description: "Dedicated to the craft with genuine enthusiasm for creating meaningful digital experiences."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-6">About Me</h2>
          <div className="rounded-2xl border border-border p-8 bg-background shadow-elegant-lg max-w-4xl mx-auto hover:shadow-elegant-xl hover:scale-105 transition-all duration-500 animate-slide-up elegant-glow">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              I'm a passionate developer who bridges the gap between creative design and technical excellence. 
              With a keen eye for detail and a love for clean, efficient code, I create digital experiences 
              that are both beautiful and functional.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed">
              My mission is to build innovative solutions that make a real difference, 
              combining cutting-edge technology with thoughtful design to solve complex problems.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="rounded-2xl border border-border bg-surface shadow-elegant hover:shadow-elegant-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-slide-up elegant-glow" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="space-y-4 pt-6">
                <div className="w-12 h-12 rounded-xl border border-border bg-primary/10 flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 shadow-elegant">
                  <skill.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-lg font-bold text-text-primary text-center group-hover:text-primary transition-colors duration-300">{skill.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed text-center group-hover:text-text-secondary transition-colors duration-300">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};