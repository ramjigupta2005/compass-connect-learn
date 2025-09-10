import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain } from "lucide-react";

const Quiz = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-primary/10 border border-primary/20">
            <Brain className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Aptitude Assessment</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover Your{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Perfect Career Path
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take our comprehensive aptitude quiz to uncover your strengths, interests, and ideal career direction.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg">
            Start Quiz
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Quiz;