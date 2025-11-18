'use client';

import { useState } from 'react';
import { LayoutDashboard, Users, Package, CreditCard, User, LogOut, X, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onClose?: () => void;
  sidebarOpen?: boolean;
  setSidebarOpen?: (open: boolean) => void;
}

export function Sidebar({ activeTab, setActiveTab, onClose, sidebarOpen, setSidebarOpen }: SidebarProps) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'users', label: 'User List', icon: Users },
    { id: 'package', label: 'Package', icon: Package },
    { id: 'payment', label: 'Payment', icon: CreditCard },
  ];

  const handleLogout = () => {
    setShowLogoutDialog(false);
    console.log('User logged out');
  };

  const handleProfileClick = () => {
    setActiveTab('profile');
    onClose?.();
  };

  return (
    <>
      <div className="w-64 shadow-xl border-r border-sidebar-border bg-sidebar text-sidebar-foreground flex flex-col">
        {/* Header with Logo and Close Button */}
        <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-sidebar-primary flex items-center justify-center">
              <span className="text-sidebar-primary-foreground font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-lg">Dashboard</span>
          </div>
          <button
            onClick={() => setSidebarOpen?.(!sidebarOpen)}
            className="md:hidden p-1 hover:bg-sidebar-accent rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  onClose?.();
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-[#2d3748] text-white'
                    : 'text-sidebar-foreground hover:bg-sidebar-accent'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="border-t border-sidebar-border p-4 space-y-2">
          <button
            onClick={handleProfileClick}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors"
          >
            <User className="w-5 h-5" />
            <span className="font-medium">Profile</span>
          </button>
          <button
            onClick={() => setShowLogoutDialog(true)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white bg-red-600 hover:bg-red-700 transition-colors font-medium"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to Logout your account?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex gap-3 justify-end">
            <Button
              variant="outline"
              onClick={() => setShowLogoutDialog(false)}
              className="text-foreground"
            >
              Cancel
            </Button>
            <Button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Logout
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
