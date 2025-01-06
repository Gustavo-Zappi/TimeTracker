import React from "react";
import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const COLORS = {
  // Bar chart colors
  productive: "#4ade80",
  nonProductive: "#f87171",
  neutral: "#fbbf24",

  // Pie chart colors - using a consistent palette
  primary: "#3b82f6", // Blue
  secondary: "#10b981", // Green
  tertiary: "#f59e0b", // Orange/Yellow
  quaternary: "#ef4444", // Red
  quinary: "#8b5cf6", // Purple
  senary: "#ec4899", // Pink
  septenary: "#6366f1", // Indigo
};

const PIE_CHART_COLORS = [
  COLORS.primary,
  COLORS.secondary,
  COLORS.tertiary,
  COLORS.quaternary,
  COLORS.quinary,
  COLORS.senary,
  COLORS.septenary,
];

const topApplications = [
  { name: "VS Code", hours: 45 },
  { name: "Chrome", hours: 35 },
  { name: "Slack", hours: 25 },
  { name: "Zoom", hours: 20 },
  { name: "GitHub", hours: 15 },
];

const categoryData = [
  { name: "Productive", value: 45 },
  { name: "Non-productive", value: 30 },
  { name: "Neutral", value: 25 },
];

const departmentData = [
  { name: "Engineering", value: 40 },
  { name: "Marketing", value: 30 },
  { name: "Sales", value: 20 },
  { name: "HR", value: 10 },
];

const appTypeData = [
  { name: "Productivity", value: 30 },
  { name: "CRM", value: 15 },
  { name: "Browser", value: 12 },
  { name: "Communication", value: 10 },
  { name: "Social Media", value: 8 },
  { name: "Entertainment", value: 7 },
  { name: "Others", value: 18 },
];

const sanctionData = [
  { name: "Sanctioned", value: 60 },
  { name: "Unsanctioned", value: 25 },
  { name: "Under Analysis", value: 15 },
];

const riskData = [
  { name: "Low", value: 50 },
  { name: "Medium", value: 30 },
  { name: "High", value: 20 },
];

export default function ChartSection() {
  const renderCustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-sm text-gray-600">{payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  const renderPieChart = (data, title) => (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={PIE_CHART_COLORS[index % PIE_CHART_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip content={renderCustomTooltip} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Bar Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Top Applications - Bar Chart */}
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Top Applications</h2>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={topApplications} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="hours" fill={COLORS.primary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Time by Department - Bar Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Time by Department</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.primary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Time by App Type - Bar Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Time by App Type</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={appTypeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.primary} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Pie Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {renderPieChart(categoryData, "Time by Category")}
        {renderPieChart(sanctionData, "By Sanction Status")}
        {renderPieChart(riskData, "By Risk Level")}
      </div>
    </div>
  );
}
