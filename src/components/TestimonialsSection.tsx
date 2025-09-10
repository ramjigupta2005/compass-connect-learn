import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anjali Sharma",
    course: "B.A. Literature Student",
    content: "Before this platform, I had no idea what to do after 12th. The aptitude quiz showed me a path I never considered, and I'm so happy with my choice!",
    rating: 5,
    avatar: "AS"
  },
  {
    name: "Rohit Kumar",
    course: "B.Sc. Computer Science",
    content: "The career mapping feature is incredible! I could see exactly where my degree could take me - from software engineering to research opportunities.",
    rating: 5,
    avatar: "RK"
  },
  {
    name: "Priya Patel",
    course: "B.Com Graduate",
    content: "Found the perfect college near my home through their directory. The detailed information about facilities and cut-offs was exactly what I needed.",
    rating: 5,
    avatar: "PP"
  },
  {
    name: "Arjun Singh",
    course: "Engineering Aspirant",
    content: "The timeline tracker saved me from missing important admission deadlines. Now I'm studying in my dream college!",
    rating: 5,
    avatar: "AS"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            What Students Are{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Saying
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from students who found their path with Career Compass
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border-0 hover:shadow-card transition-smooth">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="h-8 w-8 text-muted-foreground/30 absolute -top-2 -left-2" />
                  <p className="text-sm leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 pt-4 border-t">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary-foreground">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.course}</div>
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

export default TestimonialsSection;