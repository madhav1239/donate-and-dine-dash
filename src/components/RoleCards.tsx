import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Heart, Users, Shield } from "lucide-react";

const roles = [
  {
    icon: Store,
    title: "Restaurant",
    description: "Post leftover food and make a difference by reducing waste while helping those in need.",
    path: "/restaurant",
    color: "text-primary",
  },
  {
    icon: Heart,
    title: "NGO",
    description: "Find and claim available food donations near you to help your community thrive.",
    path: "/ngo",
    color: "text-secondary",
  },
  {
    icon: Users,
    title: "Volunteer",
    description: "Join our network of heroes who pick up and deliver food to make an impact.",
    path: "/volunteer",
    color: "text-primary",
  },
  {
    icon: Shield,
    title: "Admin",
    description: "Manage the platform, verify users, and oversee the coordination of donations.",
    path: "/admin",
    color: "text-muted-foreground",
  },
];

const RoleCards = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Choose Your Role
          </h2>
          <p className="text-lg text-muted-foreground">
            Join our community and start making a difference today. Every role is crucial in our mission to eliminate food waste.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <Card
                key={role.title}
                className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`h-6 w-6 ${role.color}`} />
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {role.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={role.path}>
                    <Button className="w-full" variant={role.title === "Admin" ? "outline" : "default"}>
                      Join as {role.title}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoleCards;
