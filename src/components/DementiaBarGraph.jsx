// File: src/components/DementiaBarGraph.jsx

import React, { useState, useEffect } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const data = [
  { year: 2005, cases: 0.65 },
  { year: 2010, cases: 0.70 },
  { year: 2015, cases: 0.75 },
  { year: 2020, cases: 0.80 },
  { year: 2025, cases: 0.90 },
];

const DementiaBarGraph = () => {
  const [animatedData, setAnimatedData] = useState(data.map(d => ({ ...d, cases: 0 })));

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedData((prevData) => {
        return prevData.map((d, i) => {
          const original = data[i].cases;
          const current = d.cases;
          const increment = original / 20;

          return {
            ...d,
            cases: current < original ? Math.min(current + increment, original) : original,
          };
        });
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="md:w-[35vw] w-[80vw] h-[40vh] md:h-[400px] p-4 bg-[#F6F8D5] rounded-xl shadow-lg">
      <ResponsiveContainer width="100%" height="100%">
  <BarChart data={animatedData} margin={{ top: 10, right: 30, left: 20, bottom: 40 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis
      dataKey="year"
      label={{ value: 'Year', position: 'bottom', offset: 20 }}
      tick={{ fontSize: 12 }}
    />
    <YAxis
      label={{ value: 'People (Millions)', angle: -90, position: 'insideLeft', offset: 10 }}
      domain={[0, 2]}
      tick={{ fontSize: 12 }}
    />
    <Tooltip />
    <Bar dataKey="cases" fill="#3977EB" />
  </BarChart>
</ResponsiveContainer>

    </div>
  );
};

export default DementiaBarGraph;
