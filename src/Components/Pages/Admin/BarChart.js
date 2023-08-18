// src/components/BarChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BarChart = () => {
  const data = {
    series: [
      {
        name: 'Sales',
        data: [12, 19, 3, 5, 2],
      },
    ],
    options: {
      chart: {
        type: 'bar',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May'],
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-2">Sales Overview</h2>
      <ReactApexChart options={data.options} series={data.series} type="bar" height={300} />
    </div>
  );
};

export default BarChart;
