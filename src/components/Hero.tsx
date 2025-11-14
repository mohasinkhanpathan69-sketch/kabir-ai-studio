import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Award } from "lucide-react";
import heroImage from "@/assets/hero-profile.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen pt-24 pb-16 px-4 bg-gradient-to-br from-background via-secondary to-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              AI Automation Expert
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
              Hey! I Am<br />
              <span className="text-accent">Kabir</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Digital creator and AI automation expert specializing in building intelligent systems 
              that transform businesses and automate workflows.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("contact")}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground group"
              >
                Hire Me
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection("projects")}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                View Portfolio
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Clients Served</p>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div>
                <p className="text-3xl font-bold text-primary">120+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="relative rounded-3xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Kabir - AI Automation Expert"
                className="w-full h-auto object-cover"
              />
              <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-medium animate-scale-in">
                <Award className="w-8 h-8 text-accent mb-2" />
                <p className="font-bold text-sm text-primary">Best Design</p>
                <p className="text-xs text-muted-foreground">Awards</p>
              </div>
            </div>
            
            <div className="absolute -bottom-6 left-8 bg-card rounded-2xl p-4 shadow-medium animate-slide-in-right">
              <p className="text-sm font-medium text-primary mb-1">24 Hours Online</p>
              <p className="text-xs text-muted-foreground">I'll solve your problem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
