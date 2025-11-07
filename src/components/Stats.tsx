import { TrendingUp } from "lucide-react";

const stats = [
  { label: "Meals Delivered", value: "0", trend: "+0%" },
  { label: "Food Saved (kg)", value: "0", trend: "+0%" },
  { label: "NGOs Connected", value: "0", trend: "+0%" },
  { label: "Active Volunteers", value: "0", trend: "+0%" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl bg-card shadow-soft hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                <div className="flex items-center gap-1 text-sm text-primary">
                  <TrendingUp className="h-4 w-4" />
                  <span className="font-medium">{stat.trend}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
