'use client';

import { useState } from 'react';
import { Tabs, TabType } from '@/components/package/Tabs';
import { RequestItem } from '@/components/types/request';
import { PackageRequests } from '../package/PackageRequests';

export default function PackagePage() {
  const [activeTab, setActiveTab] = useState<TabType>('All');

  const usersData: RequestItem[] = [
    { id: 1, requestUser: 'Alex Smith', item: 'Laptop', model: 'Dell XPS 13', nsn: '1234-5678', lin: 'A12', eic: 'EIC-54', manual: 'Tech Doc A', status: 'Pending' },
    { id: 2, requestUser: 'Michael Lee', item: 'Printer', model: 'HP LaserJet', nsn: '8765-4321', lin: 'B45', eic: 'EIC-21', manual: 'Manual B', status: 'Approved' },
    { id: 3, requestUser: 'Emma White', item: 'Camera', model: 'Canon EOS', nsn: '1122-3344', lin: 'C78', eic: 'EIC-15', manual: 'Doc C', status: 'Rejected' },
    { id: 4, requestUser: 'Chris Evans', item: 'Monitor', model: 'Samsung 27"', nsn: '5566-7788', lin: 'D12', eic: 'EIC-90', manual: 'Guide D', status: 'Pending' },
    { id: 5, requestUser: 'Daniel King', item: 'Keyboard', model: 'Logitech MX', nsn: '9988-7766', lin: 'E10', eic: 'EIC-44', manual: 'Doc E', status: 'Approved' },
    { id: 6, requestUser: 'Sophia Hall', item: 'Tablet', model: 'iPad Air', nsn: '3344-5566', lin: 'F14', eic: 'EIC-32', manual: 'Tech Manual F', status: 'Pending' },
    { id: 7, requestUser: 'Olivia Kim', item: 'Projector', model: 'Epson 3000', nsn: '2211-6655', lin: 'G44', eic: 'EIC-13', manual: 'Guide G', status: 'Rejected' },
    { id: 8, requestUser: 'Liam Brooks', item: 'Scanner', model: 'Canon Scan L', nsn: '7788-2233', lin: 'H90', eic: 'EIC-70', manual: 'Manual H', status: 'Approved' },
    { id: 9, requestUser: 'Henry Ford', item: 'Router', model: 'TP-Link AX20', nsn: '6677-8899', lin: 'I55', eic: 'EIC-82', manual: 'Network Doc I', status: 'Pending' },
    { id: 10, requestUser: 'Jacob Ray', item: 'Headphone', model: 'Sony WH-1000XM4', nsn: '4455-2211', lin: 'J88', eic: 'EIC-22', manual: 'User Manual J', status: 'Approved' }
  ];

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-foreground">Items Request</h1>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <PackageRequests data={usersData} activeTab={activeTab} />
    </div>
  );
}
