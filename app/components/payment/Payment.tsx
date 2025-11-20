'use client';

import { useState } from 'react';
import { users as usersData } from '@/data/users';
import { filterUsers, calculateTotalAmount, countByUserType } from './PaymentFunctions';
import { PaymentStats } from './PaymentStats';
import { PaymentTable } from './PaymentTable';
import DateFilter from './DateFilter';
import { Search } from 'lucide-react'; // lucide search icon

export function Payment() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = filterUsers(usersData, searchTerm);
  const totalAmount = calculateTotalAmount(filteredUsers);

  return (
    <div className="p-8 space-y-8">

      {/* ---------- Stats ---------- */}
      <PaymentStats
        totalUsers={usersData.length}
        paidUsers={countByUserType(usersData, 'Paid')}
        freeUsers={countByUserType(usersData, 'Free')}
      />

      <h1 className="text-4xl font-bold text-foreground">User List</h1>

      {/* ---------- Search & Filter (Right Side) ---------- */}
      <div className="flex justify-end items-center gap-3 mb-6">

 <div className="flex items-center gap-2 bg-white border rounded-lg px-3 py-2 shadow-sm w-full max-w-sm">
      <Search className="size-5 text-gray-500" />
      <input
        type="text"
        placeholder="Search user..."
        className="outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>


        {/* Date Filter */}
        <DateFilter />
      </div>

      {/* ---------- Payment Table ---------- */}
      <PaymentTable users={filteredUsers} totalAmount={totalAmount} />
    </div>
  );
}
