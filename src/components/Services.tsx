import { Card, CardContent } from "@/components/ui/card";
import { Bot, Code, TrendingUp, Video, GraduationCap, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Automation Setup",
      description: "Streamline your business operations with intelligent AI automation systems that save time and increase efficiency."
    },
    {
      icon: Workflow,
      title: "AI Agent Creation",
      description: "Build custom AI agents that handle customer service, data processing, and complex decision-making tasks."
    },
    {
      icon: Code,
      title: "Website Building",
      description: "Create stunning, responsive websites with modern design and seamless user experience that convert visitors."
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Drive growth with data-driven marketing strategies, SEO optimization, and targeted advertising campaigns."
    },
    {
      icon: Video,
      title: "AI Video & Reels Creation",
      description: "Produce engaging video content and viral reels using AI-powered editing and content generation tools."
    },
    {
      icon: GraduationCap,
      title: "Course Building with AI",
      description: "Develop comprehensive online courses with AI-assisted content creation, interactive modules, and assessments."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
            My Awesome <span className="text-accent">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to help your business thrive in the digital age with cutting-edge AI technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground" />
                </div>
                
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
