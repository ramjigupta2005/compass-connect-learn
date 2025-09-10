import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";

const Careers = () => {
  const careerPaths = [
    {
      icon: Briefcase,
      title: "Science Careers",
      description: "Explore opportunities in research, technology, healthcare, and engineering.",
      paths: ["Software Engineer", "Data Scientist", "Doctor", "Research Scientist"]
    },
    {
      icon: TrendingUp,
      title: "Commerce Careers", 
      description: "Discover roles in business, finance, accounting, and entrepreneurship.",
      paths: ["Financial Analyst", "CA", "Business Manager", "Investment Banker"]
    },
    {
      icon: Users,
      title: "Arts & Humanities",
      description: "Find your passion in creative fields, social sciences, and communications.",
      paths: ["Journalist", "Psychologist", "Teacher", "Content Creator"]
    },
    {
      icon: Award,
      title: "Government Sector",
      description: "Pursue stable careers in civil services and public administration.",
      paths: ["IAS Officer", "Bank PO", "SSC Officer", "Police Officer"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Career{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Pathways
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore diverse career opportunities across different fields and find your perfect match.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {careerPaths.map((career, index) => (
              <Card key={index} className="group hover:shadow-elegant hover:scale-[1.02] transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                      <career.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{career.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{career.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {career.paths.map((path, pathIndex) => (
                      <span 
                        key={pathIndex}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                      >
                        {path}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;