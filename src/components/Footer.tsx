import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <GraduationCap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
                Career Compass
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering students to make informed decisions about their education and career 
              through AI-powered guidance and comprehensive resources.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/quiz" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Aptitude Quiz
              </Link>
              <Link to="/careers" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Career Paths
              </Link>
              <Link to="/colleges" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Colleges Directory
              </Link>
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Resources
              </Link>
            </nav>
          </div>
          
          {/* Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Support</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/help" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Help Center
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Contact Us
              </Link>
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>support@careercompass.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Career Compass. All rights reserved. Made with ❤️ for students.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;