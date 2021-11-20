import React from "react";

import Chart from "react-apexcharts";

function ChartCard({ options, series, type, width, height }) {
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={220}
      height={200}
    />
  );
}

export default ChartCard;
