// 
// DONUT CHART
//

const createDonut = (title = "", labels = [""], values = [0], colors = [""], elementId = "") => {

    const options = {
        labels: labels,
        series: values,
        colors: colors,
        chart: {
            type: 'donut',
            width: '100%',
            height: '100%',
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
                            label: title,
                            color: '#fff',
                            fontWeight: 500
                        },
                        value: {
                            show: true,
                            offsetY: -20,
                            color: '#fff',
                            fontWeight: 700
                        },
                    },
                    size: "65%",
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
        }
    }

    let newChart = new ApexCharts(document.getElementById(elementId), options);
    newChart.render();

    return newChart;
}

//
// COLUMN CHART
//

const createColumn = (categories = [""], namesValues = [{}], colors = [""], elementId = "") => {
    const options = {
        series: namesValues,
        colors: colors,
        chart: {
            type: "bar",
            height: "80%",
            width: "100%",
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
            categories: categories,
            labels: {
                show: true,
                style: {
                    cssClass: 'text-xs fill-gray-500 dark:fill-gray-400'
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
    }

    let newChart = new ApexCharts(document.getElementById(elementId), options);
    newChart.render();

    return newChart;
}

// 
// AREA CHART
//

const createArea = (title = "", dates = [], values = [], color = "", elementId = "") => {
    const options = {
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
            name: title,
            data: values,
            color: color,
          },
        ],
        xaxis: {
          categories: dates,
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

    let newChart = new ApexCharts(document.getElementById(elementId), options);
    newChart.render();

    return newChart;
}