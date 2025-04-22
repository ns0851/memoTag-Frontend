import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend
} from "recharts";

const COLORS = ["#3977EB", "#1ABC9C", "#FFB347"];

// Custom display-friendly data
const displayData = [
  { name: "Hospitals & Patient Network", value: 50 },
  { name: "Insights Collected", value: 35 },
  { name: "Lives Impacted", value: 15 }
];

const InsightsPieChart = () => {
  const [animatedData, setAnimatedData] = useState(
    displayData.map((item) => ({ ...item, value: 0 }))
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedData(displayData);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>
        <PieChart>
          <Tooltip />
          <Legend verticalAlign="bottom" height={36} />
          <Pie
            data={animatedData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) =>
              `${name}: ${(percent * 100).toFixed(1)}%`
            }
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
          >
            {animatedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default InsightsPieChart;
