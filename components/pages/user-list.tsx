'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Search, Filter, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active', userType: 'Paid', joinDate: 'Jan 15, 2024', avatar: '👨‍💼', issueDate: 'Jan 15, 2024', amount: '$99.00' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Active', userType: 'Free', joinDate: 'Feb 10, 2024', avatar: '👩‍💼', issueDate: 'Feb 10, 2024', amount: '$0.00' },
  { id: 3, name: 'Mike Johnson', email: 'mike@example.com', status: 'Inactive', userType: 'Paid', joinDate: 'Mar 5, 2024', avatar: '👨‍💼', issueDate: 'Mar 5, 2024', amount: '$99.00' },
  { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', status: 'Active', userType: 'Free', joinDate: 'Apr 12, 2024', avatar: '👩‍💼', issueDate: 'Apr 12, 2024', amount: '$0.00' },
  { id: 5, name: 'Tom Brown', email: 'tom@example.com', status: 'Active', userType: 'Paid', joinDate: 'May 8, 2024', avatar: '👨‍💼', issueDate: 'May 8, 2024', amount: '$199.00' },
];

export function UserList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const totalUsers = users.length;
  const paidUsers = users.filter(u => u.userType === 'Paid').length;
  const freeUsers = users.filter(u => u.userType === 'Free').length;

  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">User List</h1>
        <p className="text-muted-foreground mt-2">Manage all users in your system.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white border border-gray-200 p-6">
          <div className="text-gray-500 text-sm font-medium">Total Users</div>
          <div className="text-3xl font-bold text-foreground mt-2">{totalUsers}</div>
        </Card>
        <Card className="bg-white border border-gray-200 p-6">
          <div className="text-gray-500 text-sm font-medium">Paid Users</div>
          <div className="text-3xl font-bold text-foreground mt-2">{paidUsers}</div>
        </Card>
        <Card className="bg-white border border-gray-200 p-6">
          <div className="text-gray-500 text-sm font-medium">Free Users</div>
          <div className="text-3xl font-bold text-foreground mt-2">{freeUsers}</div>
        </Card>
      </div>

      <div className="flex gap-3 items-center">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <Button className="flex gap-2 items-center bg-gray-100 text-foreground hover:bg-gray-200 border border-gray-300">
          <Filter className="w-5 h-5" />
          Filter
        </Button>
      </div>

      <Card className="bg-white border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">ID</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Name</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">User Type</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Email</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">{user.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="text-2xl">{user.avatar}</div>
                      <span className="text-foreground font-medium">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      user.userType === 'Paid' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {user.userType}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <button className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      user.status === 'Active' ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}>
                      {user.status}
                    </button>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewUser(user)}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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
              <div className="flex items-center gap-4">
                <div className="text-4xl">{selectedUser.avatar}</div>
                <div>
                  <h2 className="text-xl font-bold text-foreground">{selectedUser.name}</h2>
                  <p className="text-gray-600 text-sm">{selectedUser.email}</p>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex gap-2">
                <button className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedUser.status === 'Active' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {selectedUser.status}
                </button>
                <button className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedUser.userType === 'Paid' ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}>
                  {selectedUser.userType}
                </button>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-foreground">Purchase Details</h3>
                <div>
                  <label className="text-sm text-gray-600">Issue Date</label>
                  <div className="text-foreground font-medium">{selectedUser.issueDate}</div>
                </div>
                <div>
                  <label className="text-sm text-gray-600">Amount</label>
                  <div className="text-foreground font-medium">{selectedUser.amount}</div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex gap-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 px-4 py-2 bg-gray-200 text-foreground rounded-lg hover:bg-gray-300 transition-colors font-medium"
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
