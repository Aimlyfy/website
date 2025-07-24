import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc.",
      content: "AimlyFy transformed our entire infrastructure. Their cloud migration expertise saved us 40% in costs while improving performance dramatically. Outstanding team!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612c3c5?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      position: "Founder, DataFlow Solutions",
      content: "The AI/ML solutions they built for us increased our prediction accuracy by 85%. Their deep technical expertise and professional approach exceeded all expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      position: "VP Engineering, CloudFirst",
      content: "AimlyFy's DevOps implementation reduced our deployment time from hours to minutes. Their automation strategies revolutionized our development workflow.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      position: "CEO, InnovateTech",
      content: "Working with AimlyFy was a game-changer. They delivered a complex enterprise solution on time and under budget. Truly exceptional software development team.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Lisa Park",
      position: "Director of IT, GlobalCorp",
      content: "Their 24/7 support and proactive monitoring kept our systems running flawlessly. AimlyFy is our trusted technology partner for all digital transformation needs.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "James Wilson",
      position: "Head of Product, NextGen Apps",
      content: "The mobile app they developed exceeded 1M downloads in 6 months. AimlyFy's attention to detail and user experience design is unmatched in the industry.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about working with AimlyFy
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-primary/60" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=6366f1&color=fff`;
                    }}
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 border border-primary/20">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-foreground font-semibold">4.9/5 Average Rating</span>
            <span className="text-muted-foreground">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;