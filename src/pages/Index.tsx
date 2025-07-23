import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { BlogSection } from "@/components/BlogSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="content">
          <div id="about">
            <About />
          </div>
          <BlogSection />
        </section>
      </main>
    </div>
  );
};

export default Index;
