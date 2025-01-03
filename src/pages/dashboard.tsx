import React, { useState } from "react";
import FilterPanel from "@/components/dashboard/FilterPanel";
import MetricCards from "@/components/dashboard/MetricCards";
import ChartSection from "@/components/dashboard/ChartSection";
import StatsTable from "@/components/dashboard/StatsTable";

export default function DashboardPage() {
  const [selectedApplication, setSelectedApplication] =
    useState("all-applications");

  const handleApplicationChange = (application: string) => {
    setSelectedApplication(application);
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="sticky top-0 z-10 bg-gray-50">
        <FilterPanel onApplicationChange={handleApplicationChange} />
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Time Usage Dashboard</h1>

          <MetricCards
            metrics={{
              totalTime: "120h",
              productiveTime: "80h",
              neutralTime: "20h",
              nonProductiveTime: "40h",
            }}
          />

          {selectedApplication === "all-applications" && <ChartSection />}

          <StatsTable
            data={[
              {
                id: "1",
                user: "John Doe",
                department: "Engineering",
                totalTime: "40h 30m",
                productiveTime: "32h 15m",
                nonProductiveTime: "8h 15m",
                topProductiveApps: ["VS Code", "GitHub", "Slack"],
                topNonProductiveApps: ["YouTube", "Facebook", "Twitter"],
              },
              {
                id: "2",
                user: "Jane Smith",
                department: "Design",
                totalTime: "38h 45m",
                productiveTime: "30h 20m",
                nonProductiveTime: "8h 25m",
                topProductiveApps: ["Figma", "Adobe XD", "Miro"],
                topNonProductiveApps: ["Instagram", "Facebook", "Twitter"],
              },
              {
                id: "3",
                user: "Mike Johnson",
                department: "Marketing",
                totalTime: "42h 15m",
                productiveTime: "35h 45m",
                nonProductiveTime: "6h 30m",
                topProductiveApps: ["Google Analytics", "Hubspot", "Asana"],
                topNonProductiveApps: ["YouTube", "Instagram", "TikTok"],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
