import Image from "next/image";
import { User } from "../types";

interface UserTableProps {
  users: User[];
  onView: (user: User) => void;
}

export default function UserTable({ users, onView }: UserTableProps) {
  return (
    <table className="w-full bg-white shadow rounded-xl overflow-hidden">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">ID</th>
          <th className="p-3 text-left">Name</th>
          <th className="p-3 text-left">User Type</th>
          <th className="p-3 text-left">Email</th>
          <th className="p-3 text-left">Status</th>
          <th className="p-3 text-left">Action</th>
        </tr>
      </thead>

      <tbody>
        {users.map((user) => (
          <tr key={user.id} className="border-b">
            <td className="p-3">{user.id}</td>

            <td className="p-3 flex items-center gap-3">
              <Image 
                src={user.avatar || "/default-avatar.png"} 
                alt={user.name} 
                width={40} 
                height={40} 
                className="rounded-full"
              />
              {user.name}
            </td>

            <td className="p-3">{user.userType}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: user.status === "Active" ? "#2874FF1A" : "#88939F1A",
                  color: user.status === "Active" ? "#2874FF" : "#88939F"
                }}
              >
                {user.status}
              </span>
            </td>

            <td className="p-3">
              <button 
                onClick={() => onView(user)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors"
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
