import { Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Kabir</h3>
            <p className="text-primary-foreground/80 text-sm">
              AI Automation Expert & Digital Creator helping businesses scale with intelligent solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Me
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("projects")}
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>AI Automation</li>
              <li>Web Development</li>
              <li>Digital Marketing</li>
              <li>Course Creation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Github, label: "GitHub" }
              ].map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-accent transition-all duration-300 flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} Kabir. All rights reserved. Built with passion and AI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
