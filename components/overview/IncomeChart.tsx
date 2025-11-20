"use client";
import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ChevronDown } from "lucide-react";

type TimePeriod = "monthly" | "weekly" | "daily";

interface IncomeData {
  date: string;
  income: number;
}

interface IncomeChartProps {
  monthlyData: IncomeData[];
  weeklyData: IncomeData[];
  dailyData: IncomeData[];
}

export default function IncomeChart({ monthlyData, weeklyData, dailyData }: IncomeChartProps) {
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("monthly");
  const [isOpen, setIsOpen] = useState(false);

  const getDataByPeriod = () => {
    switch (timePeriod) {
      case "monthly":
        return monthlyData;
      case "weekly":
        return weeklyData;
      case "daily":
        return dailyData;
      default:
        return monthlyData;
    }
  };

  const data = getDataByPeriod();
  const incomes = data.map((item) => item.income);
  const maxIncome = Math.max(...incomes);
  const minIncome = Math.min(...incomes);

  const periodLabels = {
    monthly: "Monthly",
    weekly: "Weekly",
    daily: "Daily"
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      {/* Header with Title and Filter */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Income Analytics</h2>
        
        {/* Custom Dropdown */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700"
          >
            {periodLabels[timePeriod]}
            <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <button
                onClick={() => {
                  setTimePeriod("monthly");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg ${
                  timePeriod === "monthly" ? "bg-gray-100 font-medium" : ""
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => {
                  setTimePeriod("weekly");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                  timePeriod === "weekly" ? "bg-gray-100 font-medium" : ""
                }`}
              >
                Weekly
              </button>
              <button
                onClick={() => {
                  setTimePeriod("daily");
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 last:rounded-b-lg ${
                  timePeriod === "daily" ? "bg-gray-100 font-medium" : ""
                }`}
              >
                Daily
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E1E1E1" />
          <XAxis dataKey="date" stroke="#666" tick={{ fontSize: 12 }} />
          <YAxis stroke="#666" tick={{ fontSize: 12 }} tickFormatter={(v) => `${v / 1000}k`} />
          <Tooltip
            contentStyle={{ backgroundColor: "#252525", border: "1px solid #E1E1E1", borderRadius: "8px", color: "#fff" }}
            formatter={(value) => [`${Number(value) / 1000}k`, "Income"]}
          />
          <Bar
            dataKey="income"
            radius={[8, 8, 0, 0]}
            shape={(props: any) => {
              const { x, y, width, height, payload } = props;
              let barColor = "#D1D5DB";
              if (payload.income === maxIncome) barColor = "#252525";
              else if (payload.income === minIncome) barColor = "#E1E1E1";
              return <rect x={x} y={y} width={width} height={height} rx={8} ry={8} fill={barColor} />;
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
