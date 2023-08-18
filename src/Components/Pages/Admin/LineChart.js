// src/components/LineChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  const data = {
    series: [
      {
        name: 'Page Views',
        data: [1200, 1900, 1300, 1500, 1800],
      },
    ],
    options: {
      chart: {
        type: 'line',
      },
      xaxis: {
        categories: ['January', 'February', 'March', 'April', 'May'],
      },
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-2">Page Views</h2>
      <ReactApexChart options={data.options} series={data.series} type="line" height={300} />
    </div>
  );
};

export default LineChart;
