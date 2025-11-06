import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Plus, Package, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Restaurant = () => {
  const { toast } = useToast();
  const [listings, setListings] = useState([
    {
      id: 1,
      name: "Mixed Vegetable Curry",
      quantity: "5 kg",
      expiry: "6 hours",
      location: "Downtown Kitchen",
      status: "Available",
    },
    {
      id: 2,
      name: "Fresh Bread Loaves",
      quantity: "20 pieces",
      expiry: "4 hours",
      location: "Downtown Kitchen",
      status: "Claimed",
    },
  ]);

  const handleAddListing = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Food Listed Successfully!",
      description: "Your food donation is now visible to nearby NGOs.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-transparent py-12">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Restaurant Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Post your leftover food and help reduce waste while feeding those in need.
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5 text-primary" />
                    Add New Food Listing
                  </CardTitle>
                  <CardDescription>
                    Share details about your available food to connect with NGOs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddListing} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="food-name">Food Name</Label>
                      <Input id="food-name" placeholder="e.g., Mixed Vegetable Curry" required />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="quantity">Quantity</Label>
                        <Input id="quantity" placeholder="e.g., 5 kg" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiry Time</Label>
                        <Input id="expiry" type="time" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="location">Pickup Location</Label>
                      <Input id="location" placeholder="Your restaurant address" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes</Label>
                      <Textarea
                        id="notes"
                        placeholder="Dietary info, storage instructions, etc."
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                      Post Food Listing
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Package className="h-5 w-5 text-primary" />
                    Your Active Listings
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {listings.map((listing) => (
                      <div
                        key={listing.id}
                        className="p-4 rounded-lg border-2 border-border hover:border-primary/20 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold">{listing.name}</h4>
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              listing.status === "Available"
                                ? "bg-primary/10 text-primary"
                                : "bg-secondary/10 text-secondary"
                            }`}
                          >
                            {listing.status}
                          </span>
                        </div>
                        <div className="space-y-1 text-sm text-muted-foreground">
                          <p className="flex items-center gap-2">
                            <Package className="h-4 w-4" />
                            Quantity: {listing.quantity}
                          </p>
                          <p className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            Expires in: {listing.expiry}
                          </p>
                          <p className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {listing.location}
                          </p>
                        </div>
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
                    <p className="text-sm text-muted-foreground">Meals Provided</p>
                    <p className="text-3xl font-bold text-primary">487</p>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/5">
                    <p className="text-sm text-muted-foreground">Food Saved (kg)</p>
                    <p className="text-3xl font-bold text-secondary">234</p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <p className="text-sm text-muted-foreground">CO₂ Prevented</p>
                    <p className="text-3xl font-bold">156 kg</p>
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

export default Restaurant;
