import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Cloud, Brain, Cog } from "lucide-react";
import heroImage from "@/assets/tech-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
              AimlyFy
            </h1>
            <h2 className="text-2xl md:text-4xl font-semibold text-foreground/90">
              Elevate Your Digital Future
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We deliver cutting-edge software solutions, cloud services, AI/ML innovations, 
              and DevOps excellence that transform your business and exceed expectations.
            </p>
          </div>

          {/* Service Icons */}
          <div className="flex justify-center items-center gap-8 py-8">
            <div className="flex items-center gap-2 text-primary">
              <Code className="w-6 h-6" />
              <span className="hidden sm:inline text-sm font-medium">Software</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Cloud className="w-6 h-6" />
              <span className="hidden sm:inline text-sm font-medium">Cloud</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Brain className="w-6 h-6" />
              <span className="hidden sm:inline text-sm font-medium">AI/ML</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <Cog className="w-6 h-6" />
              <span className="hidden sm:inline text-sm font-medium">DevOps</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:shadow-glow-primary transition-all duration-300 group px-8 py-4 text-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-4 text-lg"
            >
              View Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;