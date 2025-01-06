import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, ArrowUpDown } from "lucide-react";

interface StatsTableProps {
  data?: Array<{
    id: string;
    user: string;
    email: string;
    sector: string;
    department: string;
    lastActivity: string;
    totalTime: string;
    productiveTime: string;
    nonProductiveTime: string;
    topProductiveApps: string[];
    topNonProductiveApps: string[];
  }>;
}

const defaultData = [
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

const StatsTable = ({ data = defaultData }: StatsTableProps) => {
  return (
    <Card className="w-full p-6 bg-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Usage Statistics</h2>
        <Button variant="outline" size="sm">
          <Download className="h-4 w-4 mr-2" />
          Export
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px]">
                <div className="flex items-center">
                  User
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Email
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Sector
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Department
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Last Activity
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Total Time
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Productive Time
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Non-Productive Time
                  <ArrowUpDown className="ml-2 h-4 w-4" />
                </div>
              </TableHead>
              <TableHead>Top 3 Productive Apps</TableHead>
              <TableHead>Top 3 Non-Productive Apps</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.user}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.sector}</TableCell>
                <TableCell>{row.department}</TableCell>
                <TableCell>{row.lastActivity}</TableCell>
                <TableCell>{row.totalTime}</TableCell>
                <TableCell className="text-green-600">
                  {row.productiveTime}
                </TableCell>
                <TableCell className="text-red-600">
                  {row.nonProductiveTime}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    {row.topProductiveApps.map((app, index) => (
                      <span key={index} className="text-sm text-green-600">
                        {app}
                      </span>
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    {row.topNonProductiveApps.map((app, index) => (
                      <span key={index} className="text-sm text-red-600">
                        {app}
                      </span>
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
};

export default StatsTable;
