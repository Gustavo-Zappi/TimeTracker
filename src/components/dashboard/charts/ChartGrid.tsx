import React from "react";
import ChartSection from "../ChartSection";

interface ChartGridProps {
  selectedApplication: string;
}

const ChartGrid = ({ selectedApplication }: ChartGridProps) => {
  if (selectedApplication !== "all-applications") return null;

  return <ChartSection />;
};

export default ChartGrid;
