'use client';
import { useMemo } from "react";
import { User } from "./UserTable";
import UserStatsCard from "./UserStatsCard";
import UserTable from "./UserTable";

const users: User[] = [ /* এখানে তোমার users array */ ];

export default function UserListData() {
  const totalUsers = users.length;
  const paidUsers = users.filter(u => u.userType === "Paid").length;
  const freeUsers = users.filter(u => u.userType === "Free").length;
  const avgProgress = Math.round(users.reduce((sum, u) => sum + parseInt(u.progress), 0) / users.length);

  const stats = useMemo(() => [
    { label: "Total Users", value: totalUsers, growth: avgProgress },
    { label: "Paid Users", value: paidUsers, growth: avgProgress },
    { label: "Free Users", value: freeUsers, growth: avgProgress },
  ], [totalUsers, paidUsers, freeUsers, avgProgress]);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-foreground">User List</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, idx) => <UserStatsCard key={idx} {...stat} />)}
      </div>

      <UserTable users={users} />
    </div>
  );
}
