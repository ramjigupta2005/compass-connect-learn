import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Download, Award, Video } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: BookOpen,
      title: "E-Books & Study Materials",
      description: "Free academic books and study guides for all subjects.",
      items: ["NCERT Books", "Reference Materials", "Subject Guides", "Sample Papers"]
    },
    {
      icon: Video,
      title: "Video Lectures", 
      description: "Educational videos and online courses for skill development.",
      items: ["Science Lectures", "Math Tutorials", "Language Courses", "Skill Development"]
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Information about government and private scholarships.",
      items: ["Merit Scholarships", "Need-based Aid", "Minority Scholarships", "Research Grants"]
    },
    {
      icon: Download,
      title: "Career Resources",
      description: "Resume templates, interview guides, and career advice.",
      items: ["Resume Templates", "Interview Tips", "Career Guides", "Industry Reports"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Learning{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Resources
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Access free educational materials, scholarships, and career resources to support your journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {resourceCategories.map((category, index) => (
              <Card key={index} className="group hover:shadow-elegant hover:scale-[1.02] transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
                      <category.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="space-y-2 mb-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                        <span className="text-sm">{item}</span>
                        <Button variant="ghost" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full">
                    View All Resources
                  </Button>
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

export default Resources;