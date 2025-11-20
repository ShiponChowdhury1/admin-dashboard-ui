"use client";
import StatsCard from "./StatsCard";
import IncomeChart from "./IncomeChart";
import UserTable from "./UserTable";

const stats = [
  { label: "Total Users", value: "2,543", icon: "/total.png" },
  { label: "Free Users", value: "$45,231", icon: "/free.png" },
  { label: "Paid Users", value: "1,234", icon: "/paid.png" },
  { label: "Transactions", value: "3,456", icon: "/income.png" },
];

// Monthly Data (12 months)
const monthlyData = [
  { date: "Jan", income: 45000 },
  { date: "Feb", income: 52000 },
  { date: "Mar", income: 48000 },
  { date: "Apr", income: 61000 },
  { date: "May", income: 55000 },
  { date: "Jun", income: 67000 },
  { date: "Jul", income: 72000 },
  { date: "Aug", income: 68000 },
  { date: "Sep", income: 75000 },
  { date: "Oct", income: 71000 },
  { date: "Nov", income: 78000 },
  { date: "Dec", income: 50000 },
];

// Weekly Data (Last 12 weeks)
const weeklyData = [
  { date: "Week 1", income: 15000 },
  { date: "Week 2", income: 18000 },
  { date: "Week 3", income: 16000 },
  { date: "Week 4", income: 22000 },
  { date: "Week 5", income: 19000 },
  { date: "Week 6", income: 24000 },
  { date: "Week 7", income: 21000 },
  { date: "Week 8", income: 26000 },
  { date: "Week 9", income: 23000 },
  { date: "Week 10", income: 28000 },
  { date: "Week 11", income: 25000 },
  { date: "Week 12", income: 30000 },
];

// Daily Data (Last 15 days)
const dailyData = [
  { date: "2 Sep", income: 5000 },
  { date: "4 Sep", income: 8000 },
  { date: "6 Sep", income: 6000 },
  { date: "8 Sep", income: 12000 },
  { date: "10 Sep", income: 10000 },
  { date: "12 Sep", income: 15000 },
  { date: "14 Sep", income: 18000 },
  { date: "16 Sep", income: 14000 },
  { date: "18 Sep", income: 29000 },
  { date: "20 Sep", income: 17000 },
  { date: "22 Sep", income: 22000 },
  { date: "24 Sep", income: 19000 },
  { date: "26 Sep", income: 25000 },
  { date: "28 Sep", income: 23000 },
  { date: "30 Sep", income: 20000 },
];
const userData = [
  {
    id: 1,
    name: "John Doe",
    type: "paid",
    status: "active",
    email: "john@example.com",
    avatar: "/man.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    type: "free",
    status: "active",
    email: "jane@example.com",
    avatar: "/women.png",
  },
  {
    id: 3,
    name: "Bob Johnson",
    type: "paid",
    status: "inactive",
    email: "bob@example.com",
    avatar: "/isMan.png",
  },
  {
    id: 4,
    name: "Alice Brown",
    type: "free",
    status: "active",
    email: "alice@example.com",
    avatar: "/man.png",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    type: "paid",
    status: "active",
    email: "charlie@example.com",
    avatar: "/isMan.png",
  },
  {
    id: 6,
    name: "Jane Smith",
    type: "free",
    status: "inactive",
    email: "jane@example.com",
    avatar: "/women.png",
  },
];

export default function Overview() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-foreground">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => <StatsCard key={idx} {...stat} />)}
      </div>

      <IncomeChart monthlyData={monthlyData} weeklyData={weeklyData} dailyData={dailyData} />

      <UserTable users={userData} />
    </div>
  );
}
