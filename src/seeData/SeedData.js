export const  options = {
    chart: {
        height: "100vh",
        type: 'area',
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: 'Product Trends by Month',
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',],
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: [ '#FDD835'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }}
  };


 export const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  export const series_donut = [80, 20];

  export const  options_donut = {
    chart: {
      width:100,
      type: 'donut',
    },
    dataLabels: {
      enabled: false
    },
    legend: {
        show: false
      },
    responsive: [{
      breakpoint: 200,
      options: {
        chart: {
          width: 100
        },
        legend: {
          show: false
        }
      }
    }],
   
  }