import React from "react";
import { Card } from "@/components/ui/card";
import { Clock, Briefcase, Coffee, Gamepad2 } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  trend?: string;
  color?: string;
}

const MetricCard = ({
  title = "Metric",
  value = "0",
  icon = <Clock />,
  trend = "+0%",
  color = "bg-white",
}: MetricCardProps) => {
  return (
    <Card className={`${color} p-4 relative overflow-hidden`}>
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-2">{value}</h3>
          <p className="text-xs text-muted-foreground mt-1">{trend}</p>
        </div>
        <div className="text-muted-foreground">{icon}</div>
      </div>
    </Card>
  );
};

interface MetricCardsProps {
  metrics?: {
    totalTime: string;
    productiveTime: string;
    neutralTime: string;
    nonProductiveTime: string;
  };
}

const MetricCards = ({
  metrics = {
    totalTime: "120h",
    productiveTime: "80h",
    neutralTime: "20h",
    nonProductiveTime: "40h",
  },
}: MetricCardsProps) => {
  return (
    <div className="bg-background p-6 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Time"
          value={metrics.totalTime}
          icon={<Clock className="h-6 w-6" />}
          trend="+5% vs last month"
        />
        <MetricCard
          title="Productive Time"
          value={metrics.productiveTime}
          icon={<Briefcase className="h-6 w-6" />}
          trend="+8% vs last month"
          color="bg-green-50"
        />
        <MetricCard
          title="Neutral Time"
          value={metrics.neutralTime}
          icon={<Gamepad2 className="h-6 w-6" />}
          trend="+3% vs last month"
          color="bg-yellow-50"
        />
        <MetricCard
          title="Non-Productive Time"
          value={metrics.nonProductiveTime}
          icon={<Coffee className="h-6 w-6" />}
          trend="-2% vs last month"
          color="bg-red-50"
        />
      </div>
    </div>
  );
};

export default MetricCards;
