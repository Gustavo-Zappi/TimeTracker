import React from "react";
import FilterPanel from "../FilterPanel";

interface DashboardHeaderProps {
  onApplicationChange: (application: string) => void;
}

const DashboardHeader = ({ onApplicationChange }: DashboardHeaderProps) => {
  return (
    <div className="sticky top-0 z-10 bg-gray-50">
      <FilterPanel onApplicationChange={onApplicationChange} />
    </div>
  );
};

export default DashboardHeader;
