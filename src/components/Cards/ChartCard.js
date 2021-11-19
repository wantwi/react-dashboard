import React from "react";

import Chart from "react-apexcharts";

let options2 = {
    chart: {
      height: 280,
      type: "area"
    },
    zoom: {
        enabled: false
      },
    dataLabels: {
      enabled: false
    },
    stroke: {
        curve: 'straight'
      },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2]
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100]
      }
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan"
      ]
    }
  };


function ChartCard({series,type,width,height}) {
 

  return (
   
          <Chart options={options2} series={series} type={type} width={width} height={height}/>
       
  );
}

export default ChartCard;
