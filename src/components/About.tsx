import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Lightbulb, Users, Shield, Cpu, Database, Bug } from "lucide-react";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "CLEAN_CODE.EXE",
      description: "Writing elegant algorithms that are both functional and maintainable. Code is poetry in digital form."
    },
    {
      icon: Shield,
      title: "SECURITY_PROTOCOLS",
      description: "Implementing robust security measures and thinking like an attacker to build unbreachable systems."
    },
    {
      icon: Cpu,
      title: "SYSTEM_OPTIMIZATION",
      description: "Performance tuning and resource optimization to push hardware and software to their limits."
    },
    {
      icon: Database,
      title: "DATA_MANIPULATION",
      description: "Extracting insights from chaos, turning raw data into meaningful information architectures."
    },
    {
      icon: Bug,
      title: "DEBUG_PROTOCOLS",
      description: "Hunting down elusive bugs and system vulnerabilities with surgical precision and patience."
    },
    {
      icon: Lightbulb,
      title: "INNOVATION_ENGINE",
      description: "Constantly exploring cutting-edge technologies and unconventional solutions to complex problems."
    },
    {
      icon: Users,
      title: "NETWORK_BUILDING",
      description: "Collaborating with fellow hackers and engineers to build solutions that change the world."
    },
    {
      icon: Heart,
      title: "PASSION_DRIVEN",
      description: "Every line of code written with genuine excitement for the craft and dedication to excellence."
    }
  ];

  return (
    <section className="py-20 px-6 bg-background-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="text-terminal-green font-mono text-lg">&gt;</span>
            <h2 className="text-4xl font-bold text-terminal-green font-mono neon-glow">ABOUT_ME.TXT</h2>
          </div>
          <div className="rounded-2xl border border-terminal-green-dim p-8 bg-background-darker/60 backdrop-blur-lg max-w-4xl mx-auto hover:bg-background-darker/70 transition-all duration-500 animate-slide-up">
            <p className="text-lg text-text-terminal font-mono leading-relaxed mb-4">
              <span className="text-terminal-green">$</span> cat personal_info.log
            </p>
            <p className="text-lg text-text-terminal font-mono leading-relaxed mb-4">
              I'm a digital architect who thrives in the space between creativity and logic. 
              When I'm not deep in code, you'll find me reverse-engineering new technologies, 
              exploring cybersecurity challenges, or sharing knowledge about the art of elegant programming.
            </p>
            <p className="text-lg text-text-terminal font-mono leading-relaxed">
              <span className="text-terminal-green">$</span> grep -i "mission" life_goals.txt
            </p>
            <p className="text-lg text-text-terminal font-mono leading-relaxed">
              Building systems that push boundaries and solve real-world problems through innovative tech.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="rounded-2xl border border-terminal-green-dim bg-background-darker/50 hover:bg-terminal-green/10 transition-all duration-500 hover:scale-105 hover:border-terminal-green backdrop-blur-lg group animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="space-y-4 pt-6">
                <div className="w-12 h-12 rounded-xl border border-terminal-green-dim bg-terminal-green/20 flex items-center justify-center mx-auto group-hover:bg-terminal-green/30 transition-all duration-300 group-hover:rotate-12">
                  <skill.icon className="w-6 h-6 text-terminal-green group-hover:animate-bounce-subtle" />
                </div>
                <h3 className="text-lg font-bold text-terminal-green font-mono text-center group-hover:neon-glow transition-all duration-300">{skill.title}</h3>
                <p className="text-text-dim text-sm leading-relaxed text-center font-mono group-hover:text-text-terminal transition-colors duration-300">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};