import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Legend,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Legend, Tooltip);

const StatsChart = ({ stats }) => {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Core',
        data: stats.core,
        borderColor: '#58cc02',
        backgroundColor: '#58cc0280',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Willpower',
        data: stats.willpower,
        borderColor: '#f9a826',
        backgroundColor: '#f9a82680',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Focus',
        data: stats.focus,
        borderColor: '#6366f1',
        backgroundColor: '#6366f180',
        fill: false,
        tension: 0.3,
      },
      {
        label: 'Finance',
        data: stats.finance,
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f680',
        fill: false,
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: '#fff' },
      },
    },
    scales: {
      x: {
        ticks: { color: '#aaa' },
        grid: { color: '#333' },
      },
      y: {
        ticks: { color: '#aaa' },
        grid: { color: '#333' },
      },
    },
  };

  return (
    <div>
      <h3>📈 Course Completion Over Time</h3>
      <Line data={data} options={options} />
    </div>
  );
};

export default StatsChart;
