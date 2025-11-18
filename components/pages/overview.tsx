'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { Search, Filter, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const incomeData = [
  { date: '2 Sep', income: 5 },
  { date: '4 Sep', income: 8 },
  { date: '6 Sep', income: 6 },
  { date: '8 Sep', income: 12 },
  { date: '10 Sep', income: 10 },
  { date: '12 Sep', income: 15 },
  { date: '14 Sep', income: 18 },
  { date: '16 Sep', income: 14 },
  { date: '18 Sep', income: 20 },
  { date: '20 Sep', income: 17 },
  { date: '22 Sep', income: 22 },
  { date: '24 Sep', income: 19 },
  { date: '26 Sep', income: 25 },
  { date: '28 Sep', income: 23 },
  { date: '30 Sep', income: 20 },
];

const userData = [
  { id: 1, name: 'John Doe', type: 'paid', email: 'john@example.com', avatar: '👤' },
  { id: 2, name: 'Jane Smith', type: 'free', email: 'jane@example.com', avatar: '👥' },
  { id: 3, name: 'Bob Johnson', type: 'paid', email: 'bob@example.com', avatar: '👤' },
  { id: 4, name: 'Alice Brown', type: 'free', email: 'alice@example.com', avatar: '👥' },
  { id: 5, name: 'Charlie Wilson', type: 'paid', email: 'charlie@example.com', avatar: '👤' },
];

const stats = [
  { label: 'Total Users', value: '2,543', change: '+12%' },
  { label: 'Revenue', value: '$45,231', change: '+8%' },
  { label: 'Active Packages', value: '1,234', change: '+5%' },
  { label: 'Transactions', value: '3,456', change: '+14%' },
];

export function Overview() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <h1 className="text-4xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's your performance metrics.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="p-6 bg-white border-border shadow-md">
            <p className="text-muted-foreground text-sm font-medium">{stat.label}</p>
            <p className="text-3xl font-bold text-foreground mt-2">{stat.value}</p>
            <p className="text-accent text-sm mt-2">{stat.change} from last month</p>
          </Card>
        ))}
      </div>

      <Card className="p-6 bg-white border-border shadow-md">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-foreground">Income Analytics</h2>
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
            <YAxis stroke="#666" label={{ value: 'Income (K)', angle: -90, position: 'insideLeft' }} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#252525', border: '1px solid #E1E1E1', borderRadius: '8px', color: '#fff' }}
              formatter={(value) => `$${value}K`}
            />
            <Bar dataKey="income" fill="#6366f1" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      <Card className="p-6 bg-white border-border shadow-md">
        <div className="mb-6">
          <div className="flex gap-4 items-center">
            {/* Search Input */}
            <div className="flex-1 flex items-center gap-2 border border-border rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search users..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 bg-transparent outline-none text-foreground"
              />
            </div>

            {/* Filter Button */}
            <Button variant="outline" className="flex items-center gap-2 text-foreground border-border">
              <Filter className="w-4 h-4" />
              Filter
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-4 font-semibold text-foreground">ID</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">User Name</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">User Type</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Email</th>
                <th className="text-left py-3 px-4 font-semibold text-foreground">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id} className="border-b border-border hover:bg-gray-50">
                  <td className="py-4 px-4 text-foreground">{user.id}</td>
                  <td className="py-4 px-4 text-foreground flex items-center gap-2">
                    <span className="text-xl">{user.avatar}</span>
                    {user.name}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.type === 'paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {user.type === 'paid' ? 'Paid' : 'Free'}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-foreground">{user.email}</td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => handleViewUser(user)}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
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
          <DialogHeader>
            <DialogTitle className="text-foreground">User Details</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-4xl">{selectedUser.avatar}</span>
                <div>
                  <p className="font-bold text-foreground">{selectedUser.name}</p>
                  <p className="text-muted-foreground text-sm">{selectedUser.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="border border-border rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Status</p>
                  <p className="text-foreground font-semibold mt-1">Active User</p>
                </div>
                <div className="border border-border rounded-lg p-4">
                  <p className="text-muted-foreground text-sm">Subscription</p>
                  <p className={`font-semibold mt-1 ${selectedUser.type === 'paid' ? 'text-green-600' : 'text-red-600'}`}>
                    {selectedUser.type === 'paid' ? 'Paid User' : 'Unpaid User'}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button variant="outline" onClick={() => setIsModalOpen(false)} className="border-border text-foreground">
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
