import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'; 

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display:false,
      position: 'top',
    },
    title: {
      display: true,
      text: 'Interview Analysis',
      font: {
        family: 'Rubik', // Specify your custom font family here
        size: 16, // Set the font size,
        weight:500,
        color:'#002244'
      }
    },
  },
};

const labels = ['Pending', 'Interview Scheduled', 'Jobs Declined'];

const datasets = [
  {
    label: ' ',
    data: [10, 5, 23],
    borderColor:['#002244','#0b6623','#960018'],
    backgroundColor: ['#002244b3', '#0b6623b3', '#960018b3'],
    borderWidth: 4, // Set the border width
    barThickness: 55, // Set the bar width
    borderRadius:7
  },
];

export const data = {
  labels,
  datasets,
};

const Graph = () => {
  return <Bar options={options} data={data} />;
};

export default Graph;
