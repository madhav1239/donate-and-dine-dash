import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ArrowRight, Store, Heart, Users, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-food-donation.jpg";

const Hero = () => {
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [learnMoreOpen, setLearnMoreOpen] = useState(false);

  const roles = [
    {
      icon: Store,
      title: "Restaurant Partner",
      description: "List your surplus food and reduce waste",
      path: "/restaurant",
    },
    {
      icon: Heart,
      title: "NGO Partner",
      description: "Access fresh food donations for your community",
      path: "/ngo",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Help deliver food to those in need",
      path: "/volunteer",
    },
  ];

  const impacts = [
    "Reduce food waste and environmental impact",
    "Feed people in need across your community",
    "Build a sustainable food distribution network",
    "Track your impact with real-time analytics",
    "Connect with verified partners and volunteers",
    "Make a difference with every meal saved",
  ];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="container relative py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  Making a Difference, One Meal at a Time
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Turning Food Waste Into{" "}
                <span className="bg-gradient-hero bg-clip-text text-transparent">Hope</span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Connect restaurants, NGOs, and volunteers to eliminate food waste and deliver fresh meals to those who need them most. Together, we're building a hunger-free community.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  variant="hero" 
                  className="group"
                  onClick={() => setGetStartedOpen(true)}
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => setLearnMoreOpen(true)}
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={heroImage}
                  alt="Community volunteers distributing fresh food"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Dialog */}
      <Dialog open={getStartedOpen} onOpenChange={setGetStartedOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">Choose Your Role</DialogTitle>
            <DialogDescription>
              Select how you'd like to contribute to our mission of reducing food waste and feeding those in need.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Link
                  key={role.title}
                  to={role.path}
                  onClick={() => setGetStartedOpen(false)}
                  className="flex items-start gap-4 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{role.title}</h3>
                    <p className="text-sm text-muted-foreground">{role.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </DialogContent>
      </Dialog>

      {/* Learn More Dialog */}
      <Dialog open={learnMoreOpen} onOpenChange={setLearnMoreOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-2xl">About Ann Daan</DialogTitle>
            <DialogDescription>
              Discover how we're making a difference in the fight against food waste and hunger.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <div>
              <h3 className="font-semibold text-lg mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ann Daan bridges the gap between food surplus and food insecurity. We connect restaurants with excess food, NGOs serving communities in need, and volunteers who make delivery possible. Every meal saved is a step toward a hunger-free world.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-3">The Impact</h3>
              <ul className="space-y-2">
                {impacts.map((impact, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{impact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 pt-4">
              <Link to="/about" className="flex-1" onClick={() => setLearnMoreOpen(false)}>
                <Button variant="outline" className="w-full">
                  Read Full Story
                </Button>
              </Link>
              <Button 
                className="flex-1"
                onClick={() => {
                  setLearnMoreOpen(false);
                  setGetStartedOpen(true);
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Hero;
