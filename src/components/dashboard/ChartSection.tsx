import React from "react";
import { Card } from "@/components/ui/card";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
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
  productive: "#4ade80",
  nonProductive: "#f87171",
  neutral: "#fbbf24",
  high: "#ef4444",
  medium: "#f59e0b",
  low: "#10b981",
  sanctioned: "#3b82f6",
  unsanctioned: "#ef4444",
  underAnalysis: "#f59e0b",
};

const weeklyData = [
  { date: "Week 1", productive: 45, nonProductive: 30 },
  { date: "Week 2", productive: 50, nonProductive: 25 },
  { date: "Week 3", productive: 35, nonProductive: 40 },
  { date: "Week 4", productive: 55, nonProductive: 20 },
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

const sectorData = [
  { name: "Technology", value: 35 },
  { name: "Operations", value: 25 },
  { name: "Finance", value: 20 },
  { name: "Support", value: 20 },
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

  return (
    <div className="space-y-6">
      {/* Top Applications - Bar Chart */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Top Applications</h2>
          <button className="text-sm text-blue-600 hover:underline">
            See more
          </button>
        </div>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={topApplications} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip />
              <Bar dataKey="hours" fill={COLORS.productive} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Time Spent per Week - Line Chart */}
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Time Spent per Week</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="productive"
                stroke={COLORS.productive}
                strokeWidth={2}
              />
              <Line
                type="monotone"
                dataKey="nonProductive"
                stroke={COLORS.nonProductive}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Grid for smaller charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Time Spent by Category - Pie Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Time by Category</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        COLORS[entry.name.toLowerCase().replace("-", "")] ||
                        COLORS.neutral
                      }
                    />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Time Spent by Department - Bar Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Time by Department</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.productive} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Time Spent by Sector - Bar Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Time by Sector</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sectorData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.productive} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Time Spent by Application Type - Bar Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">Time by App Type</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={appTypeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} />
                <Tooltip />
                <Bar dataKey="value" fill={COLORS.productive} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Time Spent by Sanction Status - Pie Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">By Sanction Status</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sanctionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {sanctionData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={
                        COLORS[entry.name.toLowerCase().replace(" ", "")] ||
                        COLORS.neutral
                      }
                    />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Time Spent by Risk Level - Pie Chart */}
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">By Risk Level</h2>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[entry.name.toLowerCase()]}
                    />
                  ))}
                </Pie>
                <Tooltip content={renderCustomTooltip} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
}
