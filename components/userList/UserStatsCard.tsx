import { Card } from "@/components/ui/card";
import Image from "next/image";

interface UserStatsCardProps {
  label: string;
  value: number;
  growth: number;
}

export default function UserStatsCard({ label, value, growth }: UserStatsCardProps) {
  return (
    <Card className="bg-white border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div className="text-gray-500 text-sm font-medium">{label}</div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <div className="text-3xl font-bold text-foreground">{value}</div>
        <div className="text-[#505050] text-sm font-medium flex items-center gap-1 px-2">
          <Image src="/liner.png" width={20} height={20} alt="growth" />
          <span>
            <span className="text-[#7738F8]">{growth}%</span> growth this month
          </span>
        </div>
      </div>
    </Card>
  );
}
