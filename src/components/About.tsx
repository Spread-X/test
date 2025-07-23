import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, Lightbulb, Users } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description: "I believe in writing code that's not just functional, but elegant and maintainable."
    },
    {
      icon: Heart,
      title: "Passion-Driven",
      description: "Every project I take on is fueled by genuine excitement and dedication."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions to complex problems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "The best ideas come from working together and learning from each other."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-primary mb-4">About Me</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer and creative thinker who loves building things that matter. 
            When I'm not coding, you'll find me exploring new places, reading about the latest tech trends, 
            or sharing stories about the journey of building meaningful projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-surface">
              <CardContent className="space-y-4 pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-text-primary">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};