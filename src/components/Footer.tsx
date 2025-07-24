import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin,
  Code,
  Cloud,
  Brain,
  Cog
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Software Development", icon: Code },
    { name: "Cloud Services", icon: Cloud },
    { name: "AI & Machine Learning", icon: Brain },
    { name: "DevOps Services", icon: Cog }
  ];

  const company = [
    "About Us",
    "Our Team",
    "Careers",
    "Case Studies",
    "Blog",
    "Contact"
  ];

  const resources = [
    "Documentation",
    "API Reference",
    "Support Center",
    "Community",
    "Partners",
    "Security"
  ];

  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-muted-foreground">
                Get the latest insights on technology trends and our services delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-4">
              <Input 
                placeholder="Enter your email" 
                className="bg-background/50 border-border/50 focus:border-primary flex-1"
              />
              <Button className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h2 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  AimlyFy
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Elevating your digital future with cutting-edge software solutions, 
                  cloud services, AI innovations, and DevOps excellence that transform 
                  businesses and exceed expectations.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contact@aimlyfy.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (416) 555-0123</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Toronto, ON, Canada</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <Button variant="outline" size="icon" className="border-border/50 hover:border-primary/50 hover:bg-primary/10">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-border/50 hover:border-primary/50 hover:bg-primary/10">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-border/50 hover:border-primary/50 hover:bg-primary/10">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="icon" className="border-border/50 hover:border-primary/50 hover:bg-primary/10">
                  <Github className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <li key={index}>
                      <a 
                        href="#" 
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                      >
                        <IconComponent className="w-4 h-4 group-hover:text-primary" />
                        {service.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                {company.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                {resources.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              © {currentYear} AimlyFy. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;