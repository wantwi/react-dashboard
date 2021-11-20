import React from "react";

import Chart from "react-apexcharts";

function DonutChart({ colors, data }) {
  const options = {
    colors,
    dataLabels: {
      enabled: false,
    },
  };

  return (
    <Chart
      options={options}
      series={data}
      type="donut"
      width={220}
      height={200}
    />
  );
}

export default DonutChart;
