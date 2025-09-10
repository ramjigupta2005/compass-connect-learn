import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-3xl font-bold">Get Started</h1>
            <p className="text-muted-foreground">
              Create your account and begin your career discovery journey
            </p>
          </div>

          <Tabs defaultValue="student" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="student">Student</TabsTrigger>
              <TabsTrigger value="parent">Parent</TabsTrigger>
            </TabsList>
            
            <TabsContent value="student">
              <Card>
                <CardHeader>
                  <CardTitle>Student Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="student-firstname">First Name</Label>
                      <Input id="student-firstname" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="student-lastname">Last Name</Label>
                      <Input id="student-lastname" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Email</Label>
                    <Input id="student-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-class">Current Class</Label>
                    <Input id="student-class" placeholder="e.g., 12th Grade" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input id="student-password" type="password" placeholder="Create a password" />
                  </div>
                  <Button className="w-full" variant="gradient">
                    Create Student Account
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="parent">
              <Card>
                <CardHeader>
                  <CardTitle>Parent Registration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="parent-firstname">First Name</Label>
                      <Input id="parent-firstname" placeholder="First name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="parent-lastname">Last Name</Label>
                      <Input id="parent-lastname" placeholder="Last name" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parent-email">Email</Label>
                    <Input id="parent-email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="child-name">Child's Name</Label>
                    <Input id="child-name" placeholder="Enter your child's name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parent-password">Password</Label>
                    <Input id="parent-password" type="password" placeholder="Create a password" />
                  </div>
                  <Button className="w-full" variant="gradient">
                    Create Parent Account
                  </Button>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Already have an account?{" "}
                      <Link to="/login" className="text-primary hover:underline">
                        Sign in
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;