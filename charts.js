// 
// DONUT CHART
//

var donutOptions = {
    labels: ["Nojet.com", "VIP Monkey app", "Express buy"],
    series: [250, 150, 100],
    colors: ['#00EBB0', '#FFA65E', '#E86987'],
    chart: {
        type: 'donut',
        width: '200',
        height: '200'
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                        offsetY: 20,
                        fontWeight: 200
                    },
                    total: {
                        showAlways: true,
                        show: true,
                        label: "Sales",
                        color: '#fff',
                        fontWeight: 100
                    },
                    value: {
                        show: true,
                        offsetY: -20,
                        color: '#fff',
                        fontWeight: 100
                    },
                },
                size: "75%",
            },
        },
    },
    stroke: {
        colors: ["transparent"],
        lineCap: "",
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
};

var donutChart = new ApexCharts(document.querySelector("#donut-chart"), donutOptions);
donutChart.render();

//
// COLUMN CHART
//

var columnOptions = {
    colors: ["#CCFFE6", "#00EBB0"],
    series: [
        {
            name: "Men",
            color: "#CCFFE6",
            data: [
                { x: "0-17", y: 1245 },
                { x: "18-24", y: 809 },
                { x: "25-34", y: 754 },
                { x: "35-49", y: 1432 },
                { x: "50-64", y: 1564 },
                { x: "+65", y: 1756 }
            ],
        },
        {
            name: "Women",
            color: "#00EBB0",
            data: [
                { x: "0-17", y: 1540 },
                { x: "18-24", y: 794 },
                { x: "25-34", y: 642 },
                { x: "35-49", y: 1571 },
                { x: "50-64", y: 1100 },
                { x: "+65", y: 2000 }
            ],
        },
    ],
    chart: {
        type: "bar",
        height: "85%",
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: "70%",
            borderRadiusApplication: "end",
            borderRadius: 8,
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: 'dark'
    },
    grid: {
        show: true,
        strokeDashArray: 0,
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    xaxis: {
        floating: false,
        labels: {
            show: true,
            style: {
                cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
            }
        },
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        show: true,
    },
    fill: {
        opacity: 1,
    },
};

var columnChart = new ApexCharts(document.querySelector("#column-chart"), columnOptions);
columnChart.render();


// 
// AREA CHART
//

let areaOptions = {
    chart: {
      height: "70%",
      width: "100%",
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.5,
        opacityTo: 0,
        shade: "#00ECAE",
        gradientToColors: ["#00ECAE"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    series: [
      {
        name: "Tickets",
        data: [650, 641, 645, 652, 635, 645],
        color: "#00EBB0",
      },
    ],
    xaxis: {
      categories: ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February', '07 February'],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    tooltip: {
        theme: "dark"
    },
  }

const areaChart = new ApexCharts(document.getElementById("area-chart"), areaOptions);
areaChart.render();