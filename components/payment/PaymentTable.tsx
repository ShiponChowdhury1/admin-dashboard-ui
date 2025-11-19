import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { User } from '../types';

interface PaymentTableProps {
  users: User[];
  totalAmount: number;
}

export function PaymentTable({ users, totalAmount }: PaymentTableProps) {
  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden w-full">
      <div className="overflow-x-auto w-full">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user, index) => (
              <tr key={`${user.id}-${index}`} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.id}</td>
                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3 text-sm text-gray-900">
                  <Image
                    src={user.avatar}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.userType === 'Paid'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {user.userType}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-right text-gray-900">
                  ${Number(user.amount).toFixed(2)}
                </td>
              </tr>
            ))}

            <tr className="bg-gray-100 font-semibold">
              <td colSpan={4} className="px-6 py-4 text-left text-gray-800">Total Amount:</td>
              <td className="px-6 py-4 text-right text-gray-900">${totalAmount.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
}
