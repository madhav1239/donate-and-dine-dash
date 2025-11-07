import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Package, TrendingUp, Activity } from "lucide-react";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="bg-gradient-to-b from-primary/5 to-transparent py-12">
          <div className="container">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Admin Dashboard</h1>
            <p className="text-lg text-muted-foreground">
              Monitor platform activity and manage the Ann Daan ecosystem.
            </p>
          </div>
        </div>

        <div className="container py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Users</p>
                    <p className="text-2xl font-bold">1,432</p>
                    <p className="text-xs text-primary mt-1">+12% this month</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Listings</p>
                    <p className="text-2xl font-bold">87</p>
                    <p className="text-xs text-secondary mt-1">23 today</p>
                  </div>
                  <Package className="h-8 w-8 text-secondary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Deliveries</p>
                    <p className="text-2xl font-bold">52,847</p>
                    <p className="text-xs text-primary mt-1">+15% this week</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Now</p>
                    <p className="text-2xl font-bold">234</p>
                    <p className="text-xs text-muted-foreground mt-1">Online users</p>
                  </div>
                  <Activity className="h-8 w-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Recent Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Bella's Bistro", type: "Restaurant", status: "Pending" },
                    { name: "Hope Foundation", type: "NGO", status: "Verified" },
                    { name: "Sarah Martinez", type: "Volunteer", status: "Verified" },
                    { name: "Green Kitchen", type: "Restaurant", status: "Pending" },
                  ].map((user, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-4 rounded-lg border border-border"
                    >
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.type}</p>
                      </div>
                      <Badge
                        variant={user.status === "Verified" ? "default" : "secondary"}
                      >
                        {user.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Platform Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      action: "New food listing posted",
                      user: "Downtown Kitchen",
                      time: "2 min ago",
                    },
                    {
                      action: "Food claimed by NGO",
                      user: "Hope Foundation",
                      time: "15 min ago",
                    },
                    {
                      action: "Delivery completed",
                      user: "Sarah M. (Volunteer)",
                      time: "1 hour ago",
                    },
                    {
                      action: "New restaurant registered",
                      user: "Pasta Palace",
                      time: "3 hours ago",
                    },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                      <div className="flex-1">
                        <p className="font-medium text-sm">{activity.action}</p>
                        <p className="text-xs text-muted-foreground">{activity.user}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;
