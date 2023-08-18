// src/components/PieChart.js
import React from 'react';
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  const data = {
    series: [30, 25, 15, 20, 10], // Sample data for categories
    options: {
      labels: ['Politics', 'Technology', 'Health', 'Sports', 'Entertainment'],
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-2">News Categories</h2>
      <ReactApexChart options={data.options} series={data.series} type="pie" />
    </div>
  );
};

export default PieChart;
