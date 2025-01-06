import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
