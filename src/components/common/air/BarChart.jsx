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
      data = [18, 24, 34, 26, 34, 40, 18];
      break;
    case 'mingguan':
      labels = weeks;
      data = [15, 18, 26, 20, 26];
      break;
    case 'bulanan':
      labels = month;
      data = [160, 208, 304, 240, 256, 288, 202, 236, 256, 194, 224, 262];
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
              label: 'Penggunaan Air',
              data: data,
              backgroundColor: 'rgba(147,197,253,1)',
            },
          ],
        }}
        options={{
          plugins: {
            tooltip: {
              callbacks: {
                label: (context) => `${context.parsed.y} m3`,
              },
            },
          },
        }}
      />
    </div>
  );
}
