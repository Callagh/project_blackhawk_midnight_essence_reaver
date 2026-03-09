"use client";

import { PieChart } from "@mui/x-charts";

interface PieProps {
  data: { id: number; value: number; label: string }[];
}

export const Pie = ({ data }: PieProps) => {
  return <PieChart series={[{ data }]} width={500} height={400} />;
};
