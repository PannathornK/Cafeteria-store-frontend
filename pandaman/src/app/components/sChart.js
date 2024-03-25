import React, { useEffect, useState } from 'react';
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
import { Line } from 'react-chartjs-2';

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
      position: 'bottom',
      labels:{
        family: "Kanit",
      }
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
};

export function SaleChart() {
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/getMonthlySales');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const formattedData = formatData(data);
        setChartData(formattedData);
      } catch (error) {
        console.error('Error fetching sales data', error);
      }
    };
    fetchData();
  }, []);

  const monthDict = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  }

  const formatData = (data) => {
    const labels = data.map(entry => monthDict[entry.month]);
    const dataset = {
      label: '7 เดือน',
      data: data.map(entry => entry.sales),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    };
    return { labels, datasets: [dataset] };
  }

  if (!chartData) {
    return null;
  }

  return <Line options={options} data={chartData} />;
}
