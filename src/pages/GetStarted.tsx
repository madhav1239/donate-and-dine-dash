import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Store, Heart, Users, Shield, ArrowRight } from "lucide-react";

const GetStarted = () => {
  const roles = [
    {
      icon: Store,
      title: "Restaurant Partner",
      description: "List your surplus food and help reduce waste while making a positive impact in your community.",
      benefits: ["Reduce food waste", "Tax benefits", "Community recognition", "Easy listing process"],
      link: "/restaurant",
      color: "primary",
    },
    {
      icon: Heart,
      title: "NGO Partner",
      description: "Access fresh food donations to serve your community and track your impact in real-time.",
      benefits: ["Free food access", "Real-time updates", "Impact tracking", "Community network"],
      link: "/ngo",
      color: "secondary",
    },
    {
      icon: Users,
      title: "Volunteer",
      description: "Bridge the gap by picking up and delivering food from restaurants to NGOs in your area.",
      benefits: ["Flexible schedule", "Make a difference", "Join community", "Track deliveries"],
      link: "/volunteer",
      color: "primary",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get Started with <span className="bg-gradient-hero bg-clip-text text-transparent">Ann Daan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose your role and join thousands making a difference in the fight against food waste and hunger.
            </p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Card key={role.title} className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-${role.color}/10 flex items-center justify-center mb-4`}>
                      <Icon className={`h-6 w-6 text-${role.color}`} />
                    </div>
                    <CardTitle>{role.title}</CardTitle>
                    <CardDescription>{role.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {role.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Link to={role.link}>
                      <Button className="w-full group">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-none">
            <CardHeader className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Not sure which role is right for you?</CardTitle>
              <CardDescription className="text-base">
                We're here to help! Get in touch with our team and we'll guide you through the process.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center gap-4">
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More
                </Button>
              </Link>
            </CardContent>
          </Card>

          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto font-bold text-xl">
                  1
                </div>
                <h3 className="font-semibold">Sign Up</h3>
                <p className="text-sm text-muted-foreground">
                  Choose your role and create your account in minutes
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto font-bold text-xl">
                  2
                </div>
                <h3 className="font-semibold">Connect</h3>
                <p className="text-sm text-muted-foreground">
                  Get matched with nearby partners in your community
                </p>
              </div>
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto font-bold text-xl">
                  3
                </div>
                <h3 className="font-semibold">Make an Impact</h3>
                <p className="text-sm text-muted-foreground">
                  Start reducing waste and feeding those in need
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetStarted;
