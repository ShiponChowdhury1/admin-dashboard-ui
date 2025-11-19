'use client';

import { useState } from 'react';
import { users as usersData } from '@/data/users';
import { filterUsers, calculateTotalAmount, countByUserType } from './PaymentFunctions';
import { PaymentStats } from './PaymentStats';
import { PaymentTable } from './PaymentTable';
import DateFilter from '../DateFilter';

export function Payment() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredUsers = filterUsers(usersData, searchTerm);
  const totalAmount = calculateTotalAmount(filteredUsers);

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-foreground">User List</h1>

      <PaymentStats
        totalUsers={usersData.length}
        paidUsers={countByUserType(usersData, 'Paid')}
        freeUsers={countByUserType(usersData, 'Free')}
      />

      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded-lg"
        />
        <DateFilter />
      </div>

      <PaymentTable users={filteredUsers} totalAmount={totalAmount} />
    </div>
  );
}
