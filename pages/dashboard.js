import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const DashboardChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
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
        // {
        //   label: 'Weight Lifted (lbs)',
        //   data: [100, 120, 140, 160, 165, 180, 180, 185, 183, 190, 185, 190], // Hardcoded weight values
        //   backgroundColor: 'rgba(255, 99, 132, 0.6)',
        //   borderColor: 'rgba(255, 99, 132, 1)',
        //   borderWidth: 1,
        //   yAxisID: 'weight-y-axis',
        // },
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
        'weight-y-axis': {
          type: 'linear',
          display: true,
          position: 'right',
          title: {
            display: true,
            text: 'Weight Lifted (lbs)',
            color: 'rgba(255, 99, 132, 1)',
            font: {
              weight: 'bold',
            },
          },
          grid: {
            drawOnChartArea: false,
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
  }, []);

  return <canvas ref={chartRef} />;
};

export default DashboardChart;
