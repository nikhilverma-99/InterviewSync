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

const labels = ['Pending', 'Candidate Selected', 'Jobs Declined']; 
const Graph = (props) => {
  const data = {
    labels,
    datasets:props.data,
  };
  return <Bar options={options} data={data} />;
};

export default Graph;
