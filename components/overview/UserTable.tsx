"use client";
import Image from "next/image";
import { Eye, Search, SlidersHorizontal, UserCheck, UserX, CreditCard, Wallet } from "lucide-react";
import { useState } from "react";
import UserModal from "./UserModal";

interface UserTableProps {
  users: any[];
}

export default function UserTable({ users }: UserTableProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("paid"); // Default to paid
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filters = [
    { label: "Active User", value: "active", icon: UserCheck },
    { label: "Inactive User", value: "inactive", icon: UserX },
    { label: "Paid User", value: "paid", icon: CreditCard },
    { label: "Unp aid User", value: "free", icon: Wallet },
  ];

  const filtered = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());
    
    // Filter by type (paid/free) or status (active/inactive)
    let matchesFilter = true;
    if (filter === "paid" || filter === "free") {
      matchesFilter = user.type === filter;
    } else if (filter === "active" || filter === "inactive") {
      matchesFilter = user.status === filter;
    }
    
    return matchesSearch && matchesFilter;
  });

  const handleView = (user: any) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <h4 className="text-lg font-semibold">User List</h4>
        <div className="flex items-center gap-3">
          {/* Search Bar */}
          <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm w-full max-w-sm">
            <Search className="size-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors shadow-sm"
            >
              <SlidersHorizontal className="w-4 h-4 text-gray-600" />
              <span className="text-sm font-medium text-gray-700">Filter</span>
            </button>

            {/* Filter Modal */}
            {isFilterOpen && (
              <>
                <div
                  className="fixed inset-0 z-40"
                  onClick={() => setIsFilterOpen(false)}
                />

                <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Filter</h3>

                  <div className="space-y-3">
                    {filters.map((filterOption) => {
                      const Icon = filterOption.icon;
                      const isSelected = filter === filterOption.value;

                      return (
                        <label
                          key={filterOption.value}
                          className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <Icon className="w-5 h-5 text-gray-600" />
                            <span className="text-sm text-gray-700">{filterOption.label}</span>
                          </div>
                          <input
                            type="radio"
                            name="overview-filter"
                            value={filterOption.value}
                            checked={isSelected}
                            onChange={() => {
                              setFilter(filterOption.value);
                            }}
                            className="w-4 h-4 accent-gray-900 cursor-pointer"
                          />
                        </label>
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">User Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">User Type</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filtered.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-4 py-4 text-sm text-gray-700">{user.id}</td>
                <td className="px-4 py-4 flex items-center gap-2 text-sm text-gray-900">
                  <Image src={user.avatar} alt={user.name} width={32} height={32} className="rounded-full" />
                  {user.name}
                </td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${user.type === "paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {user.type === "paid" ? "Paid" : "Free"}
                  </span>
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{user.email}</td>
                <td className="px-4 py-4">
                  <button onClick={() => handleView(user)} className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                    <Eye className="w-4 h-4" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UserModal user={selectedUser} open={modalOpen} setOpen={setModalOpen} />
    </>
  );
}
