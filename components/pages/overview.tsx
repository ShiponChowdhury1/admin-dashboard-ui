"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card } from "@/components/ui/card";
import {
  Search,
  Filter,
  Eye,
  SlidersHorizontal,
  CreditCardIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UserCheck, UserX, CreditCard } from "lucide-react";
import FilterModal from "../filter";

const incomeData = [
  { date: "2 Sep", income: 5000 },
  { date: "4 Sep", income: 8000 },
  { date: "6 Sep", income: 6000 },
  { date: "8 Sep", income: 12000 },
  { date: "10 Sep", income: 10000 },
  { date: "12 Sep", income: 15000 },
  { date: "14 Sep", income: 18000 },
  { date: "16 Sep", income: 14000 },
  { date: "18 Sep", income: 20000 },
  { date: "20 Sep", income: 17000 },
  { date: "22 Sep", income: 22000 },
  { date: "24 Sep", income: 19000 },
  { date: "26 Sep", income: 25000 },
  { date: "28 Sep", income: 23000 },
  { date: "30 Sep", income: 20000 },
];

const incomes = incomeData.map((item) => item.income);
const maxIncome = Math.max(...incomes);
const minIncome = Math.min(...incomes);

const userData = [
  {
    id: 1,
    name: "John Doe",
    type: "paid",
    email: "john@example.com",
    avatar: "/man.png",
  },
  {
    id: 2,
    name: "Jane Smith",
    type: "free",
    email: "jane@example.com",
    avatar: "/women.png",
  },
  {
    id: 3,
    name: "Bob Johnson",
    type: "paid",
    email: "bob@example.com",
    avatar: "/isMan.png",
  },
  {
    id: 4,
    name: "Alice Brown",
    type: "free",
    email: "alice@example.com",
    avatar: "/man.png",
  },
  {
    id: 5,
    name: "Charlie Wilson",
    type: "paid",
    email: "charlie@example.com",
    avatar: "/isMan.png",
  },
  {
    id: 6,
    name: "Jane Smith",
    type: "free",
    email: "jane@example.com",
    avatar: "/women.png",
  },
];

const stats = [
  { label: "Total Users", value: "2,543", icon: "/total.png" },
  { label: "Free Users", value: "$45,231", icon: "/free.png" },
  { label: "Paid Users", value: "1,234", icon: "/paid.png" },
  { label: "Transactions", value: "3,456", icon: "/income.png" },
];

const filters = [
  {
    id: "active",
    label: "Active User",
    icon: <UserCheck className="w-5 h-5" />,
  },
  {
    id: "unactive",
    label: "Unactive User",
    icon: <UserX className="w-5 h-5" />,
  },
  { id: "paid", label: "Paid User", icon: <CreditCard className="w-5 h-5" /> },
  {
    id: "unpaid",
    label: "Unpaid User",
    icon: <CreditCardIcon className="w-5 h-5" />,
  },
];

export function Overview() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const filteredUsers = userData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewUser = (user: any) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground"> Overview</h1>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 bg-white border-border shadow-md">
            <div className="flex justify-between items-center">
              <p className="text-muted-foreground text-base font-medium ">
                {stat.label}
              </p>
              <Image src={stat.icon} alt={stat.label} width={40} height={40} />
            </div>
            <p className="text-3xl font-bold text-foreground mt-2">
              {stat.value}
            </p>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-white border-border shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-foreground">
            Income Analytics
          </h2>
          <select className="px-4 py-2 border border-border rounded-lg bg-white text-foreground text-sm">
            <option>Monthly</option>
            <option>Weekly</option>
            <option>Daily</option>
          </select>
        </div>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={incomeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E1E1E1" />
            <XAxis dataKey="date" stroke="#666" tick={{ fontSize: 12 }} />
            <YAxis
              stroke="#666"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `${value / 1000}k`}
            />

            <Tooltip
              contentStyle={{
                backgroundColor: "#252525",
                border: "1px solid #E1E1E1",
                borderRadius: "8px",
                color: "#fff",
              }}
              formatter={(value) => [`${Number(value) / 1000}k`, "Income"]}
            />

            <Bar
              dataKey="income"
              radius={[8, 8, 0, 0]}
              shape={(props: any) => {
                const { x, y, width, height, payload } = props;

                let barColor = "#D1D5DB"; // normal color (light gray)

                if (payload.income === maxIncome) {
                  barColor = "#252525"; // highest bar
                } else if (payload.income === minIncome) {
                  barColor = "#E1E1E1"; // lowest bar
                }

                return (
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx="8"
                    ry="8"
                    fill={barColor}
                  />
                );
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </Card>

     <Card className="p-6 bg-white border-border shadow-md">
  <div className="mb-6 flex justify-between items-center w-full">
    <h4 className="text-lg font-semibold">User List</h4>
    <div className="flex items-center gap-3">
      {/* Search Input */}
      <div className="flex items-center gap-2 border border-border rounded-lg px-3 py-2">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent outline-none text-foreground"
        />
      </div>
      <FilterModal />
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="table-fixed w-full border-separate border-spacing-x-4">
      <thead>
        <tr className="border-b border-border">
          <th className="w-[10%] text-left py-3 px-4 font-semibold text-foreground">ID</th>
          <th className="w-[35%] text-left py-3 px-4 font-semibold text-foreground">User Name</th>
          <th className="w-[10%] text-left py-3 px-4 font-semibold text-foreground">User Type</th>
          <th className="w-[35%] text-left py-3 px-4 font-semibold text-foreground">Email</th>
          <th className="w-[10%] text-left py-3 px-4 font-semibold text-foreground">Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr key={user.id} className="border-b border-border hover:bg-gray-50">
            <td className="py-4 px-4 text-foreground">{user.id}</td>
            <td className="py-4 px-4 flex items-center gap-2">
              <Image
                src={user.avatar}
                alt={user.name}
                width={32}
                height={32}
                className="rounded-full"
              />
              {user.name}
            </td>
            <td className="py-4 px-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  user.type === "paid"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.type === "paid" ? "Paid" : "Free"}
              </span>
            </td>
            <td className="py-4 px-4 text-foreground">{user.email}</td>
            <td className="py-4 px-4">
              <button
                onClick={() => handleViewUser(user)}
                className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] rounded-full text-black hover:bg-gray-200 transition"
              >
                <Eye className="w-4 h-4" />
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Card>


      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-white">
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4 p-4 rounded-lg border-[#C4C5C9]">
                {/* Left: Avatar + Name/Email */}
                <div className="flex items-center gap-4">
                  <Image
                    src={selectedUser.avatar}
                    alt={selectedUser.name}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-bold text-foreground">
                      {selectedUser.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {selectedUser.email}
                    </p>
                  </div>
                </div>

                {/* Right: Active & Paid badges */}
                <div className="flex flex-col gap-2">
                  {/* Active badge */}
                  <div className="bg-[#2874FF1A] text-[#2874FF] px-3 py-1 rounded-lg font-semibold text-sm flex items-center justify-center">
                    Active
                  </div>

                  {/* Paid badge */}
                  <div className="bg-[#14AE001A] text-[#14AE00] px-3 py-1 rounded-lg font-semibold text-sm flex items-center justify-center">
                    Paid
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <DialogHeader>
                  <DialogTitle className="text-foreground">
                    User Details
                  </DialogTitle>
                </DialogHeader>

                <div className="flex gap-4 bg-gray-100 p-4 rounded-2xl">
                  {/* Issue Date - 70% width */}
                  <div className="flex flex-col w-[70%]">
                    <button className="bg-[#E1E1E1] text-[#878787] px-4 py-2 rounded-lg font-medium text-sm w-full text-left">
                      Issue Date
                    </button>
                    <p className="text-[#878787] mt-2 text-sm px-2 text-left">
                      12 Sep, 2023
                    </p>
                  </div>

                  {/* Amount - 30% width */}
                  <div className="flex flex-col w-[30%]">
                    <button className="bg-[#E1E1E1] text-[#878787] px-4 py-2 rounded-lg font-medium text-sm w-full text-left">
                      Amount
                    </button>
                    <p className="text-[#1CD37D] mt-2 font-semibold text-sm px-2 text-left">
                      $250.00
                    </p>
                  </div>
                </div>

                
              </div>

              <div className="flex justify-end gap-3">
                <Button
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                  className="border-border text-foreground"
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
