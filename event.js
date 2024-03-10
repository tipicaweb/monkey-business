const donutChart = new DonutChart("Sales", ["Nojet.com", "VIP Monkey app", "Express buy"], ['#00EBB0', '#FFA65E', '#E86987'], [253.8, 148.05, 21.15], 'donut-chart');
donutChart.render();
donutChart.renderLabels('donut-labels');

const guestsChart = new DonutChart("Total", ['Returning guests', 'New guests'], ['#00EBB0', '#FFA65E'], [360, 240], 'guests-chart');
guestsChart.render();
guestsChart.renderLabels('guests-labels');


const columnChart = createColumn(['0-17', '18-24', '25-34', '35-49', '50-64', '+65'], [
    {
        name: "Men",
        data: [1245, 809, 754, 1432, 1564, 1756]
    },
    {   
        name: "Women",
        data: [1540, 794, 642, 1571, 1100, 2000]
    }
], ["#CCFFE6", "#00EBB0"], "column-chart", '75%');

const areaChart = createArea("Tickets", ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February'], [625, 628, 630, 628, 630, 635], "#00EBB0", "area-chart");


renderColumnLabels('column-labels', columnChart);

document.querySelector('#area-total').innerText = areaChart.w.globals.seriesTotals[0];

const barCharts = [
    new BarChart(72, "Sold avg.", ["#F6DBC5", "#FFA65E", "#292926"], "bar-chart1"),
    new BarChart(94, "Sold avg.", ["#C5F6EA", "#00EBB0", "#292926"], "bar-chart2"),
    new BarChart(72, "Sold avg.", ["#F6DBC5", "#FFA65E", "#292926"], "bar-chart3"),
]

barCharts.forEach(chart => {
    chart.renderChart();
})