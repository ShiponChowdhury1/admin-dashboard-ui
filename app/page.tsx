'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/sidebar';
import { Overview } from '@/components/pages/overview';
import { UserList } from '@/components/pages/user-list';
import { Package } from '@/components/pages/package';
import { Payment } from '@/components/pages/payment';
import { Profile } from '@/components/pages/profile';
import { Menu } from 'lucide-react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'users':
        return <UserList />;
      case 'package':
        return <Package />;
      case 'payment':
        return <Payment />;
      case 'profile':
        return <Profile />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {sidebarOpen && (
        <Sidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          onClose={() => window.innerWidth < 768 && setSidebarOpen(false)}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      )}
      
      <main className="flex-1 overflow-auto flex flex-col">
        {/* Hamburger menu for mobile */}
        <div className="p-4 bg-white border-b border-gray-200 flex items-center justify-between md:hidden">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-foreground hover:bg-gray-100 p-2 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {renderContent()}
      </main>
    </div>
  );
}
