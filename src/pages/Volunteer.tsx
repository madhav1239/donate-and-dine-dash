import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Package, ArrowRight, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const availablePickups = [
  {
    id: 1,
    from: "Downtown Kitchen",
    to: "Hope NGO",
    food: "Mixed Vegetable Curry",
    quantity: "5 kg",
    distance: "3.2 km",
    pickup: "123 Main St",
    dropoff: "456 Charity Ave",
    status: "Available",
  },
  {
    id: 2,
    from: "Pasta Palace",
    to: "Community Center",
    food: "Fresh Pasta & Sauce",
    quantity: "8 kg",
    distance: "2.8 km",
    pickup: "456 Oak Ave",
    dropoff: "789 Community Blvd",
    status: "Available",
  },
];

const Volunteer = () => {
  const { toast } = useToast();

  const handleAccept = (pickupId: number, food: string) => {
    toast({
      title: "Pickup Accepted!",
      description: `You've accepted the delivery for ${food}. Please proceed to pickup location.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-transparent py-12">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Volunteer Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Accept pickup requests and deliver hope to those in need.
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Available Pickups
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availablePickups.map((pickup) => (
                      <div
                        key={pickup.id}
                        className="p-6 rounded-lg border-2 border-border hover:border-primary/20 transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-semibold text-lg mb-1">{pickup.food}</h4>
                            <p className="text-sm text-muted-foreground">
                              Quantity: {pickup.quantity}
                            </p>
                          </div>
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {pickup.distance}
                          </Badge>
                        </div>

                        <div className="space-y-3 mb-4">
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                              <MapPin className="h-4 w-4 text-secondary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium mb-1">Pickup From</p>
                              <p className="text-sm text-muted-foreground">{pickup.from}</p>
                              <p className="text-xs text-muted-foreground">{pickup.pickup}</p>
                            </div>
                          </div>

                          <div className="flex items-center justify-center">
                            <ArrowRight className="h-5 w-5 text-muted-foreground" />
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <MapPin className="h-4 w-4 text-primary" />
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-medium mb-1">Deliver To</p>
                              <p className="text-sm text-muted-foreground">{pickup.to}</p>
                              <p className="text-xs text-muted-foreground">{pickup.dropoff}</p>
                            </div>
                          </div>
                        </div>

                        <Button
                          className="w-full"
                          onClick={() => handleAccept(pickup.id, pickup.food)}
                        >
                          Accept Pickup
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Deliveries</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                      >
                        <div className="flex items-center gap-3">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium text-sm">Delivery #{45 - i}</p>
                            <p className="text-xs text-muted-foreground">
                              Completed 2 days ago
                            </p>
                          </div>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          Completed
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5">
                    <p className="text-sm text-muted-foreground">Deliveries Made</p>
                    <p className="text-3xl font-bold text-primary">42</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/5">
                    <p className="text-sm text-muted-foreground">Distance Covered</p>
                    <p className="text-3xl font-bold text-secondary">127 km</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">Hours Volunteered</p>
                    <p className="text-3xl font-bold">28</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Sarah M.", deliveries: 89, rank: 1 },
                      { name: "You", deliveries: 42, rank: 2 },
                      { name: "John D.", deliveries: 38, rank: 3 },
                    ].map((volunteer) => (
                      <div
                        key={volunteer.rank}
                        className={`flex items-center justify-between p-3 rounded-lg ${
                          volunteer.name === "You"
                            ? "bg-primary/10 border-2 border-primary/20"
                            : "bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                            {volunteer.rank}
                          </div>
                          <div>
                            <p className="font-medium text-sm">{volunteer.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {volunteer.deliveries} deliveries
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Volunteer;
