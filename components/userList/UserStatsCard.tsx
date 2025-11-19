"use client";
import Image from "next/image";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  label: string;
  value: string;
  icon: string;
  progress?: number; // 0-100
}

export default function UserStatsCard({ label, value, icon, progress = 100 }: StatsCardProps) {
  return (
<Card className="p-4 bg-white shadow-md border border-border rounded-xl w-full sm:w-auto">
  {/* Label */}
  <div className="flex justify-between items-center">
    <p className="text-base font-medium text-muted-foreground">{label}</p>
  </div>

  {/* Value */}
  <p className="text-3xl font-bold text-foreground mt-4">{value}</p>

  {/* Icon + Progress */}
  <div className="flex items-center gap-3 mt-2">
    <Image src={icon} alt={label} width={30} height={30} />
    <p className="text-sm text-muted-foreground">
      <span className="font-semibold text-[#7738F8]">{progress}%</span> growth of this month
    </p>
  </div>
</Card>

  );
}
