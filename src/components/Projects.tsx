import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import projectAI from "@/assets/project-ai-automation.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSocial from "@/assets/project-social-media.jpg";
import projectCourse from "@/assets/project-course.jpg";

const Projects = () => {
  const projects = [
    {
      image: projectAI,
      title: "AI Automation Dashboard",
      category: "AI Automation",
      description: "Built an intelligent automation system that reduced manual tasks by 80% and saved 20+ hours per week.",
      results: "80% efficiency increase"
    },
    {
      image: projectEcommerce,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Developed a modern online store with AI-powered product recommendations and seamless checkout.",
      results: "150% revenue growth"
    },
    {
      image: projectSocial,
      title: "Social Media Campaign",
      category: "Digital Marketing",
      description: "Managed viral marketing campaign using AI-generated content that reached 2M+ people.",
      results: "2M+ impressions"
    },
    {
      image: projectCourse,
      title: "AI Mastery Course",
      category: "Course Creation",
      description: "Created comprehensive AI course with 50+ lessons, helping 500+ students master automation.",
      results: "500+ students enrolled"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
            Recent <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing successful projects that demonstrate measurable results and client satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-large transition-all duration-300 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    <span className="text-sm font-semibold text-foreground">{project.results}</span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-accent hover:text-accent hover:bg-accent/10 group/btn"
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
