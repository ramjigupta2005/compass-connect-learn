import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Star, Users } from "lucide-react";

const Colleges = () => {
  const colleges = [
    {
      name: "Delhi University",
      location: "New Delhi",
      rating: 4.5,
      students: "40,000+",
      courses: ["B.A.", "B.Sc.", "B.Com.", "BBA"],
      cutoff: "85%"
    },
    {
      name: "Mumbai University", 
      location: "Mumbai",
      rating: 4.3,
      students: "35,000+",
      courses: ["B.A.", "B.Sc.", "B.Com.", "BCA"],
      cutoff: "82%"
    },
    {
      name: "Bangalore University",
      location: "Bangalore", 
      rating: 4.4,
      students: "28,000+",
      courses: ["B.Sc.", "B.Com.", "BBA", "BCA"],
      cutoff: "80%"
    },
    {
      name: "Pune University",
      location: "Pune",
      rating: 4.2,
      students: "32,000+", 
      courses: ["B.A.", "B.Sc.", "B.Com.", "BBA"],
      cutoff: "78%"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Government{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Colleges
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find the perfect government college near you with comprehensive information and filters.
            </p>
          </div>

          <div className="flex gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search colleges by name or location..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Filter</Button>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {colleges.map((college, index) => (
              <Card key={index} className="group hover:shadow-elegant hover:scale-[1.02] transition-smooth">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{college.name}</CardTitle>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{college.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{college.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{college.students} students</span>
                    </div>
                    
                    <div>
                      <p className="text-sm font-medium mb-2">Available Courses:</p>
                      <div className="flex flex-wrap gap-2">
                        {college.courses.map((course, courseIndex) => (
                          <span 
                            key={courseIndex}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm text-muted-foreground">
                        Cut-off: <span className="font-medium text-foreground">{college.cutoff}</span>
                      </span>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
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

export default Colleges;