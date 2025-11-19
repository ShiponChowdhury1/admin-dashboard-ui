import { Card } from '@/components/ui/card';

interface PaymentStatsProps {
  totalUsers: number;
  paidUsers: number;
  freeUsers: number;
}

export function PaymentStats({ totalUsers, paidUsers, freeUsers }: PaymentStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="bg-white border border-gray-200 p-6">
        <div>Total Payment</div>
        <div className="text-3xl font-bold">{totalUsers}</div>
      </Card>

      <Card className="bg-white border border-gray-200 p-6">
        <div>Paid Payment</div>
        <div className="text-3xl font-bold">{paidUsers}</div>
      </Card>

      <Card className="bg-white border border-gray-200 p-6">
        <div>Cancelled Payment</div>
        <div className="text-3xl font-bold">{freeUsers}</div>
      </Card>
    </div>
  );
}
