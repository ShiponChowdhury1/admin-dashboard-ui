import Image from "next/image";
import { Card } from "@/components/ui/card";

interface StatsCardProps {
  label: string;
  value: string;
  icon: string;
}

export default function StatsCard({ label, value, icon }: StatsCardProps) {
  return (
    <Card className="p-6 bg-white shadow-md border border-border rounded-xl">
      <div className="flex justify-between items-center">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <Image src={icon} alt={label} width={40} height={40} />
      </div>
      <p className="text-3xl font-bold text-foreground mt-2">{value}</p>
    </Card>
  );
}
