import { Button } from "@/components/ui/button";
import { GraduationCap, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Career Compass
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/quiz" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Aptitude Quiz
          </Link>
          <Link to="/careers" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Career Paths
          </Link>
          <Link to="/colleges" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Colleges
          </Link>
          <Link to="/resources" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth">
            Resources
          </Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/login">Login</Link>
            </Button>
            <Button variant="gradient" size="sm" asChild>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;