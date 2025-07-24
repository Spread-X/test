import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Lightbulb, Users, Shield, Cpu, Database, Zap } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Creating beautiful and responsive user interfaces with modern frameworks and libraries."
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Building scalable server-side applications and robust database architectures."
    },
    {
      icon: Cpu,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience."
    },
    {
      icon: Shield,
      title: "Security Best Practices",
      description: "Implementing secure coding practices and protecting user data with industry standards."
    },
    {
      icon: Zap,
      title: "Modern Technologies",
      description: "Staying current with the latest tools and technologies in the development ecosystem."
    },
    {
      icon: Lightbulb,
      title: "Creative Problem Solving",
      description: "Finding innovative solutions to complex challenges through analytical thinking."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams to deliver exceptional products."
    },
    {
      icon: Heart,
      title: "User-Centered Design",
      description: "Designing with empathy and focus on creating meaningful user experiences."
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-elegant-dark to-elegant-darker">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-elegant-purple-light to-elegant-blue bg-clip-text text-transparent animate-slide-up">
            About Me
          </h2>
          <div className="bg-card/50 backdrop-blur-lg p-8 rounded-3xl max-w-4xl mx-auto elegant-shadow hover:elegant-shadow-hover transition-all duration-500 hover:scale-[1.02] border border-border/50 animate-slide-up">
            <p className="text-lg text-elegant-light leading-relaxed mb-6">
              I'm a passionate developer who loves crafting digital experiences that make a difference. 
              With a keen eye for design and a deep understanding of modern technologies, I bridge the gap 
              between beautiful user interfaces and powerful functionality.
            </p>
            <p className="text-lg text-elegant-gray leading-relaxed">
              My mission is to create innovative solutions that solve real-world problems while 
              delivering exceptional user experiences through clean, efficient, and maintainable code.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-lg border border-border/50 hover:border-elegant-purple/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 elegant-shadow hover:elegant-shadow-hover group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="space-y-4 pt-6">
                <div className="w-14 h-14 bg-gradient-to-br from-elegant-purple to-elegant-blue rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 elegant-shadow">
                  <skill.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-elegant-light text-center group-hover:text-elegant-purple-light transition-colors duration-300">{skill.title}</h3>
                <p className="text-elegant-gray text-sm leading-relaxed text-center group-hover:text-elegant-light transition-colors duration-300">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};