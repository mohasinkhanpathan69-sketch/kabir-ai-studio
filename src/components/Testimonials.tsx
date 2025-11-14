import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc",
      content: "Kabir transformed our business operations with his AI automation solutions. We saved 25 hours per week and increased productivity by 60%. Highly recommended!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      content: "The AI video content Kabir created for our campaign went viral and reached over 2 million people. His expertise in digital marketing is outstanding.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Priya Sharma",
      role: "E-learning Founder",
      content: "Working with Kabir on our AI course was incredible. His knowledge and dedication helped us create a product that our students absolutely love.",
      rating: 5,
      avatar: "PS"
    },
    {
      name: "David Rodriguez",
      role: "Business Owner",
      content: "Kabir built us a stunning website that perfectly represents our brand. The attention to detail and professional approach exceeded our expectations.",
      rating: 5,
      avatar: "DR"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mt-4 mb-6">
            Clients Get Always<br />
            <span className="text-accent">Exceptional Works</span> From Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say about working together
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-large transition-all duration-300 bg-card border-border animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-accent/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="font-bold text-accent">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
