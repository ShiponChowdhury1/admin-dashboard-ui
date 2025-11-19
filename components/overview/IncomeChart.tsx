"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface IncomeChartProps {
  data: { date: string; income: number }[];
}

export default function IncomeChart({ data }: IncomeChartProps) {
  const incomes = data.map((item) => item.income);
  const maxIncome = Math.max(...incomes);
  const minIncome = Math.min(...incomes);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E1E1E1" />
        <XAxis dataKey="date" stroke="#666" tick={{ fontSize: 12 }} />
        <YAxis stroke="#666" tick={{ fontSize: 12 }} tickFormatter={(v) => `${v / 1000}k`} />
        <Tooltip
          contentStyle={{ backgroundColor: "#252525", border: "1px solid #E1E1E1", borderRadius: "8px", color: "#fff" }}
          formatter={(value) => [`${Number(value) / 1000}k`, "Income"]}
        />
        <Bar
          dataKey="income"
          radius={[8, 8, 0, 0]}
          shape={(props: any) => {
            const { x, y, width, height, payload } = props;
            let barColor = "#D1D5DB";
            if (payload.income === maxIncome) barColor = "#252525";
            else if (payload.income === minIncome) barColor = "#E1E1E1";
            return <rect x={x} y={y} width={width} height={height} rx={8} ry={8} fill={barColor} />;
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
