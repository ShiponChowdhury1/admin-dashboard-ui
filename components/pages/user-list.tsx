'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Search,  Eye } from 'lucide-react';
import FilterModal from '../filter';
import Image from 'next/image';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', userType: 'Paid', joinDate: 'Jan 15, 2024', avatar: '/man.png', issueDate: 'Jan 15, 2024', amount: '$99.00', progress: "20"},
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', userType: 'Free', joinDate: 'Feb 10, 2024', avatar: '/women.png', issueDate: 'Feb 10, 2024', amount: '$0.00',progress: "20" },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Inactive', userType: 'Paid', joinDate: 'Mar 5, 2024', avatar: '/isMan.png', issueDate: 'Mar 5, 2024', amount: '$99.00',progress: "20" },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', status: 'Active', userType: 'Free', joinDate: 'Apr 12, 2024', avatar: '/man.png', issueDate: 'Apr 12, 2024', amount: '$0.00' ,progress: "20"},
  { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'Active', userType: 'Paid', joinDate: 'May 8, 2024', avatar: '/isMan.png', issueDate: 'May 8, 2024', amount: '$199.00' ,progress: "20"},
   { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'Active', userType: 'Paid', joinDate: 'May 8, 2024', avatar: '/isMan.png', issueDate: 'May 8, 2024', amount: '$199.00' ,progress: "20"},
    { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'Active', userType: 'Paid', joinDate: 'May 8, 2024', avatar: '/isMan.png', issueDate: 'May 8, 2024', amount: '$199.00' ,progress: "20"},
     { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'Active', userType: 'Paid', joinDate: 'May 8, 2024', avatar: '/isMan.png', issueDate: 'May 8, 2024', amount: '$199.00' ,progress: "20"},
     
];




export function UserList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<typeof users[number] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter(user => 
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
    Image?:string
  }

  const handleViewUser = (user: User): void => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const totalUsers = users.length;
  const paidUsers = users.filter(u => u.userType === 'Paid').length;
  const freeUsers = users.filter(u => u.userType === 'Free').length;
  const avgProgress = users.reduce((sum, u) => sum + parseInt(u.progress), 0) / users.length;

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">User List</h1>
       
      </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  
  {/* Total Users */}
  <Card className="bg-white border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div className="text-gray-500 text-sm font-medium">Total Users</div>
    </div>

   <div className="flex items-center gap-2 mt-2">
  <div className="text-3xl font-bold text-foreground">
    {totalUsers}
  </div>

  <div className="text-[#505050] text-sm font-medium flex items-center gap-1 px-2">
  <Image src="/liner.png" width={20} height={20} alt="growth" />
  <span>
    <span className="text-[#7738F8]">{avgProgress}%</span> growth this month
  </span>
</div>
</div>

  </Card>

  {/* Paid Users */}
  <Card className="bg-white border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div className="text-gray-500 text-sm font-medium">Paid Users</div>
    
    </div>

 <div className="flex items-center gap-2 mt-2">
  <div className="text-3xl font-bold text-foreground">
    {freeUsers}
  </div>

<div className="text-[#505050] text-sm font-medium flex items-center gap-1 px-2">
  <Image src="/liner.png" width={20} height={20} alt="growth" />
  <span>
    <span className="text-[#7738F8]">{avgProgress}%</span> growth this month
  </span>
</div>

</div>

  </Card>

  {/* Free Users */}
  <Card className="bg-white border border-gray-200 p-6">
    <div className="flex items-center justify-between">
      <div className="text-gray-500 text-sm font-medium">Free Users</div>
     
    </div>

    <div className="flex items-center gap-2 mt-2">
  <div className="text-3xl font-bold text-foreground ">
    {paidUsers}
  </div>

 <div className="text-[#505050] text-sm font-medium flex items-center gap-1 px-2">
  <Image src="/liner.png" width={20} height={20} alt="growth" />
  <span>
    <span className="text-[#7738F8]">{avgProgress}%</span> growth this month
  </span>
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
    
<Card className="bg-white overflow-hidden">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
   <thead>
  <tr className="bg-white">

    {/* ID - first button (left rounded) */}
    <th className="px-0 py-0">
      <div className="bg-[#F5F5F5] px-6 py-3 font-medium text-sm rounded-l-lg w-full text-left">
        ID
      </div>
    </th>

    {/* Name */}
    <th className="px-0.5 py-0">
      <div className="bg-[#F5F5F5] px-6 py-3 font-medium text-sm w-full text-left">
        Name
      </div>
    </th>

    {/* User Type */}
    <th className="px-0.5 py-0">
      <div className="bg-[#F5F5F5] px-6 py-3 font-medium text-sm w-full text-left">
        User Type
      </div>
    </th>

    {/* Email */}
    <th className="px-0.5 py-0">
      <div className="bg-[#F5F5F5] px-6 py-3 font-medium text-sm w-full text-left">
        Email
      </div>
    </th>

    {/* Status */}
    <th className="px-0.5 py-0">
      <div className="bg-[#F5F5F5] px-6 py-3 font-medium text-sm w-full text-left">
        Status
      </div>
    </th>

    {/* Action - last button (right rounded) */}
    <th className="px-0 py-0">
      <div className="bg-[#F5F5F5] px-6 py-3 font-medium text-sm rounded-r-lg w-full text-left">
        Action
      </div>
    </th>

  </tr>
</thead>

      <tbody>
        {filteredUsers.map((user, index) => (
          <tr  key={`${user.id}-${index}`} className="hover:bg-gray-50 transition-colors">

            <td className="px-6 py-4 font-medium">{user.id}</td>

            <td className="px-6 py-4">
              <div className="flex items-center gap-2">
                 <Image src={user.avatar} alt={user.name} width={40} height={40} className="rounded-full" />
                <span className="font-medium">{user.name}</span>
              </div>
            </td>

            <td className="px-6 py-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.userType === 'Paid'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-red-100 text-red-700'
                }`}
              >
                {user.userType}
              </span>
            </td>

            <td className="px-6 py-4 text-gray-600">{user.email}</td>

            <td className="px-6 py-4">
              <button
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  user.status === 'Active'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {user.status}
              </button>
            </td>

            <td className="px-6 py-4">
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



       {isModalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full mx-4">
            <div className="p-6 border-b border-gray-200">
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
            </div>
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



            <div className="p-6 border-t border-gray-200 flex justify-end gap-2">
  <button
    onClick={() => setIsModalOpen(false)}
    className="px-4 py-2 bg-gray-200 text-foreground rounded-lg hover:bg-gray-300 transition-colors font-medium"
  >
    Close
  </button>
</div>
          </div>
        </div>
      )}
    </div>
  );
}
