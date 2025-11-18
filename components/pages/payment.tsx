'use client';

import { Card } from '@/components/ui/card';
import { CreditCard, Check, AlertCircle } from 'lucide-react';

const transactions = [
  { id: 1, date: 'Jan 15, 2024', amount: '$99.99', status: 'Completed', method: 'Visa ending in 4242' },
  { id: 2, date: 'Dec 15, 2023', amount: '$99.99', status: 'Completed', method: 'Visa ending in 4242' },
  { id: 3, date: 'Nov 15, 2023', amount: '$79.99', status: 'Completed', method: 'Mastercard ending in 5555' },
  { id: 4, date: 'Oct 15, 2023', amount: '$99.99', status: 'Completed', method: 'Visa ending in 4242' },
];

export function Payment() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground">Payments</h1>
        <p className="text-muted-foreground mt-2">Manage your billing and payment methods.</p>
      </div>

      {/* Payment Method */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-lg font-bold text-foreground mb-4">Payment Method</h2>
        <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
          <div className="flex items-center gap-3">
            <CreditCard className="w-6 h-6 text-accent" />
            <div>
              <p className="font-medium text-foreground">Visa Card</p>
              <p className="text-sm text-muted-foreground">Ending in 4242</p>
            </div>
          </div>
          <span className="text-sm text-accent font-medium">Default</span>
        </div>
      </Card>

      {/* Subscription Status */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-lg font-bold text-foreground mb-4">Subscription Status</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-sidebar rounded-lg border border-border">
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-accent" />
              <div>
                <p className="font-medium text-foreground">Professional Plan</p>
                <p className="text-sm text-muted-foreground">Renews on Feb 15, 2024</p>
              </div>
            </div>
            <span className="text-sm font-bold text-accent">Active</span>
          </div>
        </div>
      </Card>

      {/* Transaction History */}
      <Card className="bg-card border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Transaction History</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-sidebar/50">
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Date</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Amount</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Status</th>
                <th className="px-6 py-4 text-left text-sm font-bold text-foreground">Method</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn) => (
                <tr key={txn.id} className="border-b border-border hover:bg-sidebar/30 transition-colors">
                  <td className="px-6 py-4 text-foreground font-medium">{txn.date}</td>
                  <td className="px-6 py-4 text-foreground font-bold">{txn.amount}</td>
                  <td className="px-6 py-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent">
                      {txn.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">{txn.method}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
