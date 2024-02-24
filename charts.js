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

class DonutChart {
    constructor(title = "", labels = [""], colors = [""], values = [0], elementId = "", valueFormmater = (total, length) => { return total}) {
        this.title = title;
        this.labels = labels;
        this.colors = colors;
        this.values = values;
        this.elementId = elementId;
        this.total = values.reduce((acc, value) => acc += value, 0);
        this.percentages = this.getPercentages();
        this.value = valueFormmater(this.total, this.values.length);
    }

    getPercentages() {
        return this.values.map(value => ((100 * value) / this.total));
    }

    getGradient() {
        let gradientCss = "";
        let totalPercentage = 0;

        for(let i = 0; i < this.percentages.length; i++) {
            gradientCss += `${this.colors[i]} ${totalPercentage}% ${totalPercentage + this.percentages[i]}%,`;

            totalPercentage += this.percentages[i];
        }

        return gradientCss.slice(0, -1);
    }

    render() {
        const element = document.getElementById(this.elementId);

        const donutEl = document.createElement('div');
        donutEl.style.cssText = `
            width: 100%;
            padding: 0;
            aspect-ratio: 1 / 1;
            border-radius: 100%;
            background: inherit;
            position: relative;
            overflow: hidden;
        `;

        const donutArea = document.createElement('div');
        donutArea.style.cssText = `
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: conic-gradient(
                ${this.getGradient()}
            )
        `;

        const donutCenter = document.createElement('div');
        donutCenter.style.cssText = `
            position: absolute;
            top: 15%;
            left: 15%;
            right: 15%;
            bottom: 15%;
            background: inherit;
            border-radius: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `;

        const donutValue = document.createElement('div');
        donutValue.style.cssText = `
            color: #fff;
            font-size: 28px;
            font-weight: 700;
        `;

        const donutTitle = document.createElement('div');
        donutTitle.style.cssText = `
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            opacity: .6;
        `;

        donutValue.innerText = this.value;
        donutTitle.innerText = this.title;
        
        donutCenter.append(donutValue, donutTitle);
        donutEl.append(donutArea, donutCenter);
        element.append(donutEl);
    }

    renderLabels(labelsId) {
        let element = document.getElementById(labelsId);

        this.labels.forEach((label, i) => {
            let labelEl = document.createElement('div');
            labelEl.className = 'flex flex-col justify-center min-w-24'

            let labelName = document.createElement('h3');
            let labelPercentage = document.createElement('h3');
            
            labelName.innerText = label;
            let percentage = Number(this.percentages[i]).toFixed(1);
            labelPercentage.innerText = `${percentage}%`

            labelPercentage.style.color = this.colors[i];
            labelPercentage.className = 'text-2xl font-bold';

            labelEl.append(labelName, labelPercentage);
            element.append(labelEl);
        })
    }
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
            height: "75%",
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