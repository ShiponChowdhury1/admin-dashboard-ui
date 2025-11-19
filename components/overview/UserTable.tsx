"use client";
import Image from "next/image";
import { Eye } from "lucide-react";
import { useState } from "react";
import UserModal from "./UserModal";

interface UserTableProps {
  users: any[];
}

export default function UserTable({ users }: UserTableProps) {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const filtered = users.filter(
    (user) => user.name.toLowerCase().includes(search.toLowerCase()) || user.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleView = (user: any) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  return (
    <>
      <div className="mb-6 flex justify-between items-center">
        <h4 className="text-lg font-semibold">User List</h4>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 border border-border rounded-lg"
        />
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
