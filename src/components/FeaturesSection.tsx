import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  MapPin, 
  Calendar, 
  BookOpen, 
  TrendingUp, 
  Users, 
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Aptitude & Interest Quiz",
    description: "Discover your strengths and interests through our scientifically-designed assessment.",
    gradient: "bg-gradient-primary",
    action: "Take Quiz"
  },
  {
    icon: TrendingUp,
    title: "Career Path Mapping",
    description: "Visualize your future with interactive charts showing career progression for each degree.",
    gradient: "bg-gradient-secondary",
    action: "Explore Paths"
  },
  {
    icon: MapPin,
    title: "College Directory",
    description: "Find government colleges near you with detailed information and admission criteria.",
    gradient: "bg-gradient-accent",
    action: "Find Colleges"
  },
  {
    icon: Calendar,
    title: "Timeline Tracker",
    description: "Never miss important deadlines with personalized notifications and reminders.",
    gradient: "bg-gradient-primary",
    action: "View Calendar"
  },
  {
    icon: Users,
    title: "Parent Dashboard",
    description: "Parents can track their child's progress and support their educational journey.",
    gradient: "bg-gradient-secondary",
    action: "Learn More"
  },
  {
    icon: BookOpen,
    title: "Free Resources",
    description: "Access a library of e-books, study materials, and scholarship information.",
    gradient: "bg-gradient-accent",
    action: "Browse Resources"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Plan Your Future
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive platform combines AI-powered recommendations with expert guidance 
            to help you make informed decisions about your education and career.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-card transition-smooth border-0 bg-gradient-card">
              <CardHeader className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-smooth`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                <Button 
                  variant="ghost" 
                  className="p-2 h-auto text-primary  font-medium group"
                >
                  {feature.action}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;