import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cloud, Brain, Cog, Database, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom software solutions tailored to your business needs. From web applications to mobile apps, we build scalable and robust software.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Comprehensive cloud solutions to modernize your infrastructure. Migration, optimization, and management across all major cloud platforms.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "Infrastructure as Code", "Cost Optimization"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Harness the power of AI to transform your business processes. From predictive analytics to intelligent automation solutions.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "AI Automation"]
    },
    {
      icon: Cog,
      title: "DevOps Services",
      description: "Streamline your development lifecycle with modern DevOps practices. CI/CD, automation, and infrastructure management.",
      features: ["CI/CD Pipelines", "Infrastructure Automation", "Monitoring & Logging", "Security Integration"]
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Transform your data into actionable insights. Database design, data warehousing, and analytics solutions.",
      features: ["Database Design", "Data Warehousing", "ETL Processes", "Business Intelligence"]
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Protect your digital assets with comprehensive security solutions. Security audits, compliance, and threat protection.",
      features: ["Security Audits", "Compliance", "Threat Detection", "Incident Response"]
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;