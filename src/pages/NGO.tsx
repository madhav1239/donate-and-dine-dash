import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Package, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const availableFood = [
  {
    id: 1,
    restaurant: "Downtown Kitchen",
    food: "Mixed Vegetable Curry",
    quantity: "5 kg",
    distance: "0.8 km",
    expiresIn: "6 hours",
    address: "123 Main St, Downtown",
  },
  {
    id: 2,
    restaurant: "Pasta Palace",
    food: "Fresh Pasta & Sauce",
    quantity: "8 kg",
    distance: "1.2 km",
    expiresIn: "5 hours",
    address: "456 Oak Ave, City Center",
  },
  {
    id: 3,
    restaurant: "Green Bowl Cafe",
    food: "Mixed Salad Boxes",
    quantity: "12 boxes",
    distance: "2.1 km",
    expiresIn: "4 hours",
    address: "789 Pine Rd, Westside",
  },
];

const NGO = () => {
  const { toast } = useToast();

  const handleClaim = (foodId: number, foodName: string) => {
    toast({
      title: "Food Claimed Successfully!",
      description: `You've claimed ${foodName}. A volunteer will be notified for pickup.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-transparent py-12">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight mb-2">NGO Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Find and claim available food donations near your location.
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
                    Available Food Near You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {availableFood.map((food) => (
                      <div
                        key={food.id}
                        className="p-6 rounded-lg border-2 border-border hover:border-primary/20 transition-all"
                      >
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h4 className="font-semibold text-lg mb-1">{food.food}</h4>
                            <p className="text-sm text-muted-foreground">{food.restaurant}</p>
                          </div>
                          <span className="text-xs font-medium px-3 py-1 rounded-full bg-primary/10 text-primary">
                            {food.distance} away
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Package className="h-4 w-4 text-muted-foreground" />
                            <span>{food.quantity}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground" />
                            <span>{food.expiresIn}</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-2 mb-4 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{food.address}</span>
                        </div>

                        <Button
                          className="w-full"
                          onClick={() => handleClaim(food.id, food.food)}
                        >
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Claim This Food
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Interactive Map</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <MapPin className="h-12 w-12 mx-auto text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        Map integration coming soon
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Your Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg bg-primary/5">
                    <p className="text-sm text-muted-foreground">Total Claims</p>
                    <p className="text-3xl font-bold text-primary">34</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/5">
                    <p className="text-sm text-muted-foreground">People Fed</p>
                    <p className="text-3xl font-bold text-secondary">892</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">Active Requests</p>
                    <p className="text-3xl font-bold">3</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quick Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Claim food early for better availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Check expiry times before claiming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Coordinate with volunteers for pickup</span>
                    </li>
                  </ul>
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

export default NGO;
