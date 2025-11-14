import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-primary">Kabir</h2>
        
        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => scrollToSection("about")}
            className="text-foreground hover:text-accent transition-colors"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection("services")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => scrollToSection("projects")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection("testimonials")}
            className="text-foreground hover:text-accent transition-colors"
          >
            Testimonials
          </button>
        </nav>

        <Button 
          onClick={() => scrollToSection("contact")}
          className="bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          Contact Me
        </Button>
      </div>
    </header>
  );
};

export default Header;
