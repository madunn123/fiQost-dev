import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import Constant from '@/utils/constant';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function BarChart({ tab }) {
  const { days, weeks, month } = Constant();
  let labels = [];
  let data = [];

  switch (tab) {
    case 'harian':
      labels = days;
      data = [14, 18, 26, 20, 26, 30, 14];
      break;
    case 'mingguan':
      labels = weeks;
      data = [20, 24, 36, 26, 36];
      break;
    case 'bulanan':
      labels = month;
      data = [70, 91, 133, 105, 140, 168, 98, 113, 120, 98, 105, 119];
      break;
    default:
      labels = [];
      data = [];
      break;
  }

  return (
    <div>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: 'Penggunaan Wifi',
              data: data,
              backgroundColor: 'rgba(147,197,253,1)',
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => `${context.parsed.y} Gb`,
              },
            },
          },
        }}
      />
    </div>
  );
}
