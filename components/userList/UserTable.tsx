'use client';
import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import UserModal from "./UserModal";

export interface User {
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
}

interface UserTableProps {
  users: User[];
}

export default function UserTable({ users }: UserTableProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="mb-6 flex justify-between items-center w-full">
        <h4 className="text-lg font-semibold">User List</h4>
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-2 border border-border rounded-lg"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">ID</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">User Type</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Email</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Status</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsers.map((user, idx) => (
              <tr key={`${user.id}-${idx}`} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium">{user.id}</td>
                <td className="px-6 py-4 flex items-center gap-2">
                  <Image src={user.avatar} alt={user.name} width={40} height={40} className="rounded-full" />
                  {user.name}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.userType === "Paid" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {user.userType}
                  </span>
                </td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${user.status === "Active" ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-700"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => handleViewUser(user)} className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full hover:bg-gray-200 transition">
                    <Eye className="w-4 h-4" /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UserModal user={selectedUser} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
