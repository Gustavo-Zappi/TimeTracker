import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import DatePickerWithRange from "../ui/date-picker-with-range";
import { addDays } from "date-fns";

interface FilterPanelProps {
  onPeriodChange?: (period: string) => void;
  onDepartmentChange?: (department: string) => void;
  onCategoryChange?: (category: string) => void;
  onApplicationChange?: (application: string) => void;
  onAppTypeChange?: (type: string) => void;
  onUserSearch?: (search: string) => void;
  onDateRangeChange?: (range: { from: Date; to: Date }) => void;
}

const applications = [
  "All Applications",
  "VS Code",
  "GitHub",
  "Slack",
  "Figma",
  "Chrome",
  "Microsoft Teams",
  "Zoom",
  "Notion",
  "Jira",
];

const appTypes = [
  "All Types",
  "Productivity",
  "CRM",
  "ERP",
  "Browser",
  "Social Media",
  "Messaging & Communication",
  "Entertainment",
  "Education",
  "Health & Fitness",
  "Finance",
  "Shopping",
  "Gaming",
  "Navigation & Maps",
  "Photo & Video",
];

const FilterPanel = ({
  onPeriodChange = () => {},
  onDepartmentChange = () => {},
  onCategoryChange = () => {},
  onApplicationChange = () => {},
  onAppTypeChange = () => {},
  onUserSearch = () => {},
  onDateRangeChange = () => {},
}: FilterPanelProps) => {
  const defaultDateRange = {
    from: new Date(),
    to: addDays(new Date(), 7),
  };

  return (
    <div className="w-full bg-white border-b p-4 flex items-center gap-4 h-16">
      <Select defaultValue="week" onValueChange={onPeriodChange}>
        <SelectTrigger className="w-[140px]">
          <SelectValue placeholder="Select period" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="week">Week</SelectItem>
          <SelectItem value="month">Month</SelectItem>
          <SelectItem value="quarter">Quarter</SelectItem>
          <SelectItem value="year">Year</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all" onValueChange={onDepartmentChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Department" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Departments</SelectItem>
          <SelectItem value="engineering">Engineering</SelectItem>
          <SelectItem value="marketing">Marketing</SelectItem>
          <SelectItem value="sales">Sales</SelectItem>
          <SelectItem value="hr">HR</SelectItem>
        </SelectContent>
      </Select>

      <Select
        defaultValue="all"
        onValueChange={onApplicationChange}
        className="flex-none"
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Application" />
        </SelectTrigger>
        <SelectContent>
          {applications.map((app) => (
            <SelectItem
              key={app.toLowerCase().replace(" ", "-")}
              value={app.toLowerCase().replace(" ", "-")}
            >
              {app}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue="all" onValueChange={onAppTypeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Application Type" />
        </SelectTrigger>
        <SelectContent>
          {appTypes.map((type) => (
            <SelectItem
              key={type.toLowerCase().replace(" ", "-")}
              value={type.toLowerCase().replace(" ", "-")}
            >
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select defaultValue="all" onValueChange={onCategoryChange}>
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Categories</SelectItem>
          <SelectItem value="productive">Productive</SelectItem>
          <SelectItem value="neutral">Neutral</SelectItem>
          <SelectItem value="non-productive">Non-Productive</SelectItem>
        </SelectContent>
      </Select>

      <div className="relative flex-1 max-w-[300px]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          className="pl-10"
          placeholder="Search users..."
          onChange={(e) => onUserSearch(e.target.value)}
        />
      </div>

      <DatePickerWithRange
        defaultValue={defaultDateRange}
        onDateChange={onDateRangeChange}
      />
    </div>
  );
};

export default FilterPanel;
