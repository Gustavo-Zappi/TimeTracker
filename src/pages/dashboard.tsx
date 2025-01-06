import React, { useState } from "react";
import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import DashboardHeader from "@/components/dashboard/header/DashboardHeader";
import MetricCards from "@/components/dashboard/MetricCards";
import ChartGrid from "@/components/dashboard/charts/ChartGrid";
import StatsTable from "@/components/dashboard/StatsTable";

const mockTableData = [
  {
    id: "1",
    user: "John Doe",
    email: "john.doe@company.com",
    sector: "Technology",
    department: "Engineering",
    lastActivity: "2 minutes ago",
    totalTime: "40h 30m",
    productiveTime: "32h 15m",
    nonProductiveTime: "8h 15m",
    topProductiveApps: ["VS Code", "GitHub", "Slack"],
    topNonProductiveApps: ["YouTube", "Facebook", "Twitter"],
  },
  {
    id: "2",
    user: "Jane Smith",
    email: "jane.smith@company.com",
    sector: "Design",
    department: "Design",
    lastActivity: "5 minutes ago",
    totalTime: "38h 45m",
    productiveTime: "30h 20m",
    nonProductiveTime: "8h 25m",
    topProductiveApps: ["Figma", "Adobe XD", "Miro"],
    topNonProductiveApps: ["Instagram", "Facebook", "Twitter"],
  },
  {
    id: "3",
    user: "Mike Johnson",
    email: "mike.johnson@company.com",
    sector: "Marketing",
    department: "Marketing",
    lastActivity: "15 minutes ago",
    totalTime: "42h 15m",
    productiveTime: "35h 45m",
    nonProductiveTime: "6h 30m",
    topProductiveApps: ["Google Analytics", "Hubspot", "Asana"],
    topNonProductiveApps: ["YouTube", "Instagram", "TikTok"],
  },
];

export default function DashboardPage() {
  const [selectedApplication, setSelectedApplication] =
    useState("all-applications");

  const handleApplicationChange = (application: string) => {
    setSelectedApplication(application);
  };

  return (
    <DashboardLayout>
      <DashboardHeader onApplicationChange={handleApplicationChange} />

      <MetricCards
        metrics={{
          totalTime: "120h",
          productiveTime: "80h",
          neutralTime: "20h",
          nonProductiveTime: "40h",
        }}
      />

      <ChartGrid selectedApplication={selectedApplication} />

      <StatsTable data={mockTableData} />
    </DashboardLayout>
  );
}
