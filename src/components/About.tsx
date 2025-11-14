import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const skills = [
    "AI Automation",
    "Machine Learning",
    "Digital Marketing",
    "Content Creation",
    "Web Development",
    "Video Editing",
    "AI Agents",
    "Workflow Optimization"
  ];

  const achievements = [
    "Top Quality Works",
    "2 Commitments",
    "24 Hours Active"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-block">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Me</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              Transforming Businesses With 
              <span className="text-accent"> AI Innovation</span>
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate AI automation expert and digital creator with over 5 years of experience 
              helping businesses scale efficiently. I specialize in building intelligent systems that 
              automate workflows, create engaging content, and drive measurable results.
            </p>

            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground font-medium">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h3 className="text-2xl font-bold text-primary mb-6">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="text-sm px-4 py-2 bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <p className="text-4xl font-bold text-accent mb-2">50+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <p className="text-4xl font-bold text-accent mb-2">120+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div className="bg-card rounded-xl p-6 text-center shadow-soft">
                <p className="text-4xl font-bold text-accent mb-2">5+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
