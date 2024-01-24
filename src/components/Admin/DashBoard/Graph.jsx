import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Interview Stats',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Pending Jobs',
      data: [8, 7, 9, 10, 21, 53, 70],
      borderColor: '#002244',
       
    },
    {
      label: 'Interview Scheduled',
      data: [20, 22, 44, 12, 32, 55, 76],
      borderColor: '#0b6623',
      
    },{
      label: 'Jobs Declined',
      data: [21, 34, 11, 33, 12, 43, 21],
      borderColor: '#960018',
      
    },
  ],
};

const Graph = () => {
  return <Line options={options} data={data} />;
};

export default Graph;
