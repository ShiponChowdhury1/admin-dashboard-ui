'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

export function Profile() {
  const [admins, setAdmins] = useState([
    { id: 1, email: 'admin@example.com', role: 'admin me', avatar: 'AM' },
    { id: 2, email: 'editor@example.com', role: 'admin', avatar: 'ED' },
  ]);
  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [showAddDialog, setShowAddDialog] = useState(false);

  const handleAddAdmin = () => {
    if (newAdminEmail.trim()) {
      const newAdmin = {
        id: admins.length + 1,
        email: newAdminEmail,
        role: 'admin',
        avatar: newAdminEmail.substring(0, 2).toUpperCase(),
      };
      setAdmins([...admins, newAdmin]);
      setNewAdminEmail('');
      setShowAddDialog(false);
    }
  };

  const handleRemoveAdmin = (id: number) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  return (
    <div className="p-8 space-y-8">
      {/* Profile Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground">Profile</h1>
        <p className="text-gray-600 mt-2">Manage your account and admin team</p>
      </div>

      <div className="rounded-lg shadow-md p-8 border border-gray-200">
        <div className="flex items-center gap-6">
          <div className="w-24 h-24 bg-blue-500 rounded-lg flex items-center justify-center text-white text-3xl font-bold">
            AD
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground">Admin User</h2>
            <p className="text-gray-600 mt-1">admin@yourdomain.com</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">Active</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-md p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Admin Team</h2>
            <p className="text-gray-600 mt-1">Manage administrators in your system</p>
          </div>
          <Button
            onClick={() => setShowAddDialog(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Add New Admin
          </Button>
        </div>

        {/* Admin List Table */}
        <div className="space-y-3">
          {admins.map((admin) => (
            <div
              key={admin.id}
              className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">
                  {admin.avatar}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{admin.email}</p>
                  <p className="text-sm text-gray-600 capitalize">{admin.role}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveAdmin(admin.id)}
                className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Admin Dialog */}
      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Admin</DialogTitle>
            <DialogDescription>
              Enter the email address of the new administrator
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              type="email"
              placeholder="Enter admin email"
              value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              className="text-foreground"
            />
          </div>
          <DialogFooter className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => {
                setShowAddDialog(false);
                setNewAdminEmail('');
              }}
              className="text-foreground"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddAdmin}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Send
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
