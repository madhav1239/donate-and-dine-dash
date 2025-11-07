import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-transparent py-20">
          <div className="container text-center max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About <span className="bg-gradient-hero bg-clip-text text-transparent">Ann Daan</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're on a mission to eliminate food waste and hunger by connecting those who have surplus food with those who need it most.
            </p>
          </div>
        </div>

        <div className="container py-16">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  Transform food waste into hope by connecting restaurants, NGOs, and volunteers in a seamless ecosystem.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  A world where no food goes to waste and no one goes to bed hungry. Together, we can make it happen.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Our Community</h3>
                <p className="text-sm text-muted-foreground">
                  Over 1,400 members including restaurants, NGOs, and volunteers working together for change.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">How It Works</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ann Daan is a simple yet powerful platform that bridges the gap between food surplus and food insecurity. Restaurants post their leftover food, NGOs claim what they need, and volunteers ensure timely delivery. Every stakeholder plays a crucial role in creating a sustainable and hunger-free community.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">The Impact</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Since our launch, we've facilitated the redistribution of over 52,000 meals, prevented 18,000 kg of food waste, and connected 187 NGOs with local restaurants. But numbers alone don't tell the full story—it's about the lives changed, the families fed, and the community strengthened.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every meal saved is a step toward a more sustainable future. Every volunteer hour is an investment in our community. Every partnership formed is a testament to what we can achieve together.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
