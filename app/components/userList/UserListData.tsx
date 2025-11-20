"use client";

import { useState, useMemo } from "react";
import { users, } from "@/data/users";
import SearchBar from "./SearchBar";
import FilterDropdown from "./FilterDropdown";
import UserTable from "./UserTable";
import UserFilterModal from "./UserFilterModal";
import UserStatsCard from "./UserStatsCard";
import { User } from "../types";

export default function UserListData() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All"); // Default to All
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  // Stats calculations
  const totalUsers = users.length;
  const paidUsers = users.filter((u) => u.userType === "Paid");
  const freeUsers = users.filter((u) => u.userType === "Free");
  const activeUsers = users.filter((u) => u.status === "Active");
  const inactiveUsers = users.filter((u) => u.status === "Inactive");

  // Calculate average progress per type (from users data)
  const avgProgress = (arr: User[]) => {
    if (arr.length === 0) return 0;
    const total = arr.reduce((sum, user) => sum + Number(user.progress || 0), 0);
    return Math.round(total / arr.length);
  };

  const totalProgress = avgProgress(users);
  const paidProgress = avgProgress(paidUsers);
  const freeProgress = avgProgress(freeUsers);

  // Filtered Users - supports both status and userType
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());
      
      // Filter by status (Active/Inactive) or userType (Paid/Free) or All
      let matchesFilter = true;
      if (filter === "All") {
        matchesFilter = true; // Show all users
      } else if (filter === "Active" || filter === "Inactive") {
        matchesFilter = user.status === filter;
      } else if (filter === "Paid" || filter === "Free") {
        matchesFilter = user.userType === filter;
      }
      
      return matchesSearch && matchesFilter;
    });
  }, [search, filter]);

  return (
    <div className="space-y-8">

      {/* ---------- Stats Cards with progress ---------- */}
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <div className="flex-1 w-full">
          <UserStatsCard
            label="Total Users"
            value={totalUsers.toString()}
            icon="/liner.png"
            progress={totalProgress}
          />
        </div>
        <div className="flex-1 w-full">
          <UserStatsCard
            label="Paid Users"
            value={paidUsers.length.toString()}
            icon="/liner.png"
            progress={paidProgress}
          />
        </div>
        <div className="flex-1 w-full">
          <UserStatsCard
            label="Free Users"
            value={freeUsers.length.toString()}
            icon="/liner.png"
            progress={freeProgress}
          />
        </div>
      </div>

      {/* ---------- Header ---------- */}
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-[24px]">User List</h3>
        <div className="flex items-center gap-3 ml-auto">
          <SearchBar value={search} onChange={setSearch} />
          <FilterDropdown value={filter} onChange={setFilter} />
        </div>
      </div>

      {/* ---------- User Table ---------- */}
      <UserTable users={filteredUsers} onView={(user) => setSelectedUser(user)} />

      {/* ---------- User Modal ---------- */}
      {selectedUser && (
        <UserFilterModal setOpen={() => setSelectedUser(null)} user={selectedUser} open={true} />
      )}
    </div>
  );
}
