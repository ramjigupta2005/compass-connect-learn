import { Button } from "@/components/ui/button";
import { ArrowRight, Compass, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-primary/10 border border-primary/20">
                <Compass className="h-4 w-4 text-primary mr-2" />
                <span className="text-sm font-medium text-primary">Your Future, Personalized</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Confused About Your{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Next Step?
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Discover courses, colleges, and career paths that match your unique strengths and interests. 
                Let our AI-powered platform guide you to the right educational journey.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg" asChild>
                <Link to="/quiz">
                  Take the Free Aptitude Quiz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="text-lg">
                Watch Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Students Guided</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Career Paths</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Colleges Listed</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Students exploring career paths" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-gradient-card rounded-lg p-4 shadow-card border">
              <Target className="h-6 w-6 text-primary mb-2" />
              <div className="text-sm font-medium">Personalized</div>
              <div className="text-xs text-muted-foreground">AI Recommendations</div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-gradient-card rounded-lg p-4 shadow-card border">
              <Users className="h-6 w-6 text-secondary mb-2" />
              <div className="text-sm font-medium">Join 10K+</div>
              <div className="text-xs text-muted-foreground">Happy Students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;