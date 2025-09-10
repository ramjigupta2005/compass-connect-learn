import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20">
            <Sparkles className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Start Your Journey Today</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Ready to Discover Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Perfect Career Path?
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students who have found their direction with our AI-powered 
            guidance platform. It's free to start!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg" asChild>
              <Link to="/quiz">
                Take Free Aptitude Quiz
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg">
              Browse Career Paths
            </Button>
          </div>
          
          <div className="pt-8 text-center">
            <p className="text-sm text-muted-foreground">
              No credit card required • Get started in 2 minutes • Trusted by 10,000+ students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;