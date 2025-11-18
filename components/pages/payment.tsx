"use client";

"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Search, Eye } from "lucide-react";
import FilterModal from "../filter";
import Image from "next/image";

const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "Active",
    userType: "Paid",
    joinDate: "Jan 15, 2024",
    avatar: "/man.png",
    issueDate: "Jan 15, 2024",
    amount: "$99.00",
    progress: "20",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    status: "Active",
    userType: "Free",
    joinDate: "Feb 10, 2024",
    avatar: "/women.png",
    issueDate: "Feb 10, 2024",
    amount: "$0.00",
    progress: "20",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "Inactive",
    userType: "Paid",
    joinDate: "Mar 5, 2024",
    avatar: "/isMan.png",
    issueDate: "Mar 5, 2024",
    amount: "$99.00",
    progress: "20",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarah@example.com",
    status: "Active",
    userType: "Free",
    joinDate: "Apr 12, 2024",
    avatar: "/man.png",
    issueDate: "Apr 12, 2024",
    amount: "$0.00",
    progress: "20",
  },
  {
    id: 5,
    name: "Tom Brown",
    email: "tom@example.com",
    status: "Active",
    userType: "Paid",
    joinDate: "May 8, 2024",
    avatar: "/isMan.png",
    issueDate: "May 8, 2024",
    amount: "$199.00",
    progress: "20",
  },
  {
    id: 5,
    name: "Tom Brown",
    email: "tom@example.com",
    status: "Active",
    userType: "Paid",
    joinDate: "May 8, 2024",
    avatar: "/isMan.png",
    issueDate: "May 8, 2024",
    amount: "$199.00",
    progress: "20",
  },
  {
    id: 5,
    name: "Tom Brown",
    email: "tom@example.com",
    status: "Active",
    userType: "Paid",
    joinDate: "May 8, 2024",
    avatar: "/isMan.png",
    issueDate: "May 8, 2024",
    amount: "$199.00",
    progress: "20",
  },
  {
    id: 5,
    name: "Tom Brown",
    email: "tom@example.com",
    status: "Active",
    userType: "Paid",
    joinDate: "May 8, 2024",
    avatar: "/isMan.png",
    issueDate: "May 8, 2024",
    amount: "$199.00",
    progress: "20",
  },
];

export function Payment() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<
    (typeof users)[number] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  interface User {
    id: number;
    name: string;
    email: string;
    status: string;
    userType: string;
    joinDate: string;
    avatar: string;
    issueDate: string;
    amount: string;
    progress: string;
    Image?: string;
  }

  const handleViewUser = (user: User): void => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const totalUsers = users.length;
  const paidUsers = users.filter((u) => u.userType === "Paid").length;
  const freeUsers = users.filter((u) => u.userType === "Free").length;
  const avgProgress =
    users.reduce((sum, u) => sum + parseInt(u.progress), 0) / users.length;
  const totalAmount = users.reduce((sum, u) => {
    const amountNumber = parseFloat(u.amount.replace("$", "")) || 0;
    return sum + amountNumber;
  }, 0);

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">User List</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Users */}
        <Card className="bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="text-[#000000] text-sm font-medium">
              Total Payment
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="text-3xl font-bold text-foreground">
              {totalUsers}
            </div>
          </div>
        </Card>

        {/* Paid Users */}
        <Card className="bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="text-[#000000] text-sm font-medium">
              Paid Payment
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="text-3xl font-bold text-foreground">
              {freeUsers}
            </div>
          </div>
        </Card>

        {/* Free Users */}
        <Card className="bg-white border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="text-[#000000] text-sm font-medium">
              Cancelled Payment
            </div>
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="text-3xl font-bold text-foreground ">
              {paidUsers}
            </div>
          </div>
        </Card>
      </div>

      <div className="mb-6">
        {/* Header Row */}
        <div className="flex justify-between items-center w-full">
          {/* Left Side */}
          <h4 className="text-lg font-semibold">User List</h4>

          {/* Right Side */}
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
      </div>
      <Card className="bg-white overflow-hidden w-full">
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="bg-white">
                {/* ID - 10% */}
                <th className="w-[10%] px-2 py-2">
                  <div className="bg-[#F5F5F5] px-4 py-2 font-medium text-sm rounded-l-lg text-left">
                    ID
                  </div>
                </th>

                {/* Name - 35% */}
                <th className="w-[35%] px-2 py-2">
                  <div className="bg-[#F5F5F5] px-4 py-2 font-medium text-sm text-left rounded-none">
                    Name
                  </div>
                </th>

                {/* User Type - 10% */}
                <th className="w-[10%] px-2 py-2">
                  <div className="bg-[#F5F5F5] px-4 py-2 font-medium text-sm text-left rounded-none">
                    User Type
                  </div>
                </th>

                {/* Email - 35% */}
                <th className="w-[35%] px-2 py-2">
                  <div className="bg-[#F5F5F5] px-4 py-2 font-medium text-sm text-left rounded-none">
                    Email
                  </div>
                </th>

                {/* Amount - 10% */}
                <th className="w-[10%] px-2 py-2">
                  <div className="bg-[#F5F5F5] px-4 py-2 font-medium text-sm rounded-r-lg text-left">
                    Amount
                  </div>
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {filteredUsers.map((user, index) => (
                <tr
                  key={`${user.id}-${index}`}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-2 py-3 font-medium">{user.id}</td>

                  <td className="px-2 py-3">
                    <div className="flex items-center  rounded-full px-2 py-1">
                      <Image
                        src={user.avatar}
                        alt={user.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <span className="font-medium">{user.name}</span>
                    </div>
                  </td>

                  <td className="px-2 py-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.userType === "Paid"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.userType}
                    </span>
                  </td>

                  <td className=" py-3">
                    <div className=" rounded-full ">{user.email}</div>
                  </td>

                  <td className=" py-3 text-center font-medium">
                    <div className=" rounded-full">{user.amount}</div>
                  </td>
                </tr>
              ))}

              {/* Total amount row */}
              <tr className="bg-gray-100 font-semibold">
  {/* Left side: Total Amount text */}
  <td colSpan={4} className="px-6 py-4 text-left">
    Total Amount:
  </td>

  {/* Right side: Total Amount value */}
  <td className="px-6 py-4 text-right">
    <div className="rounded-full">
      ${totalAmount.toFixed(2)}
    </div>
  </td>
</tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
