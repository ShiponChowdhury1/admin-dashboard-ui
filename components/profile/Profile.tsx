'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import Image from 'next/image';
import { AdminType } from '../types';

export function Profile() {
  const [admins, setAdmins] = useState<AdminType[]>([
    { id: 1, name: 'Rasel Hossain', email: 'admin@example.com', role: 'Admin me', avatar: '/man.png' },
    { id: 2, name: 'Rahat khan', email: 'editor@example.com', role: 'Admin', avatar: '/women.png' },
  ]);

  const [newAdminEmail, setNewAdminEmail] = useState('');
  const [showAddDialog, setShowAddDialog] = useState(false);

  const handleAddAdmin = () => {
    if (newAdminEmail.trim()) {
      const newAdmin: AdminType = {
        id: admins.length + 1,
        email: newAdminEmail,
        role: 'Admin',
        avatar: newAdminEmail.substring(0, 2).toUpperCase(),
      };
      setAdmins([...admins, newAdmin]);
      setNewAdminEmail('');
      setShowAddDialog(false);
    }
  };

  const handleRemoveAdmin = (id: number) => {
    setAdmins(admins.filter((admin) => admin.id !== id));
  };

  const mainAdmin = admins[0] || null;

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-foreground">Profile</h1>

      {mainAdmin && (
        <div className="rounded-lg shadow-md p-8 border border-gray-200">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-lg overflow-hidden flex items-center justify-center">
              {mainAdmin.avatar.endsWith('.png') ? (
                <Image src={mainAdmin.avatar} alt={mainAdmin.name || 'Admin'} width={70} height={70} />
              ) : (
                <div className="flex items-center justify-center text-white text-3xl font-bold">{mainAdmin.avatar}</div>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-foreground">{mainAdmin.name}</h2>
              <p className="text-[#A8A8A8] mt-1">{mainAdmin.email}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="px-4 py-1 rounded-full text-sm font-medium text-[#252525] bg-[#F5F5F5]">{mainAdmin.role}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="rounded-lg shadow-md p-8 border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#000000]">Admin List</h2>
          <Button onClick={() => setShowAddDialog(true)} className="gap-2 px-4 py-2 bg-[#F5F5F5] text-black hover:bg-gray-200 rounded-full">
            Add New Admin
          </Button>
        </div>

        <div className="space-y-3">
          {admins.map((admin) => (
            <div key={admin.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                  {admin.avatar.endsWith('.png') ? (
                    <Image src={admin.avatar} alt={admin.name || 'Admin'} width={40} height={40} />
                  ) : (
                    <div className="w-full h-full bg-indigo-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm">{admin.avatar}</div>
                  )}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{admin.email}</p>
                  <p className="text-sm text-gray-600 capitalize">{admin.role}</p>
                </div>
              </div>
              <button onClick={() => handleRemoveAdmin(admin.id)} className="p-2 hover:bg-red-50 rounded-lg transition-colors text-red-600">
                <X className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-[#222222]">Add New Admin</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input type="email" placeholder="Enter admin email" value={newAdminEmail} onChange={(e) => setNewAdminEmail(e.target.value)} />
          </div>
          <DialogFooter className="flex gap-3 justify-end">
            <Button className="gap-2 px-3 py-1 bg-[#F5F5F5] rounded-full text-black" variant="outline" onClick={() => { setShowAddDialog(false); setNewAdminEmail(''); }}>Cancel</Button>
            <Button onClick={handleAddAdmin} className="gap-2 px-3 py-1 bg-[#F5F5F5] rounded-full text-black hover:bg-gray-200">Send</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
