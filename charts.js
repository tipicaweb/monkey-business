class BarChart {
    constructor(value = 0, label = "", colors = [""], elementId = "") {
        this.value = value;
        this.label = label;
        this.colors = colors;
        this.elementId = elementId;
    }

    renderChart() {
        let element = document.getElementById(this.elementId);

        const chartContainer = document.createElement('div');

        chartContainer.setAttribute('style', `width: 100%; background: ${this.colors[0]};height: 100%; overflow: hidden; border-radius: 10px; position: relative; display: flex; justify-content: center; align-items: center`);

        const chartValueBar = document.createElement('div');

        chartValueBar.setAttribute('style', `width: ${this.value}%; position: absolute; left: 0; top: 0; height: 100%; background: ${this.colors[1]}; transition: all 0.3s ease 0s;`);

        const chartLabel = document.createElement('span');

        chartLabel.setAttribute('style', `z-index: 10; color: ${this.colors[2]}; font-weight:700;`);
        chartLabel.innerText = `${this.value}% ${this.label}`;

        chartContainer.append(chartValueBar, chartLabel);

        element.append(chartContainer);
    }
}

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
                            style: {
                                cssClass: 'opacity-60',
                            },
                            fontWeight: 500
                        },
                        value: {
                            show: true,
                            offsetY: -20,
                            color: '#fff',
                            fontWeight: 700
                        },
                    },
                    size: "70%",
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


function renderDonutLabels(elementId, chart) {

    let element = document.getElementById(elementId);

    chart.w.globals.labels.forEach((label, i) => {
        let labelEl = document.createElement('div');

        labelEl.className = 'flex flex-col justify-center min-w-24'

        let labelName = document.createElement('h3');
        let labelPercentage = document.createElement('h3');
        
        labelName.innerText = label;
        let percentage = Number(chart.w.globals.seriesPercent[i]).toFixed(1);
        labelPercentage.innerText = `${percentage}%`

        labelPercentage.style.color = chart.w.globals.colors[i];
        labelPercentage.className = 'text-2xl'

        labelEl.append(labelName, labelPercentage);
        element.append(labelEl);
    })
}

function renderColumnLabels(elementId, chart) {

    let element = document.getElementById(elementId);

    chart.w.globals.seriesNames.forEach((name, i) => {
        let labelEl = document.createElement('h4');

        labelEl.className = "flex items-center gap-2 text-white text-xs";

        let labelColor = document.createElement('span');
        labelColor.className = "rounded-full w-4 h-4 inline-block";
        labelColor.style.backgroundColor = chart.w.globals.colors[i];

        labelEl.append(labelColor);
        labelEl.innerHTML += name;

        element.append(labelEl);
    })

}