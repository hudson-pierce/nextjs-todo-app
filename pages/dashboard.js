import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Layout from '../components/layout/Layout';
import Header from '../components/common/Header';

const DashboardChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');

      const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Workout Frequency',
            data: [15, 20, 19, 20, 17, 22, 20, 30, 18, 22, 15, 20], // Hardcoded workout frequency values
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            yAxisID: 'frequency-y-axis',
          },
        ],
      };

      const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
          'frequency-y-axis': {
            type: 'linear',
            display: true,
            position: 'left',
            title: {
              display: true,
              text: 'Workout Frequency',
              color: 'rgba(75, 192, 192, 1)',
              font: {
                weight: 'bold',
              },
            },
          },
        },
      };

      const chart = new Chart(ctx, {
        type: 'bar',
        data,
        options,
      });

      return () => {
        chart.destroy(); // Clean up the chart instance when the component unmounts
      };
    }
  }, []);

  const title = 'Dashboard';

  return (
    <Layout title={title}>
      <Header title={title} />
      <canvas ref={chartRef} />
    </Layout>
  );
};

export default DashboardChart;
