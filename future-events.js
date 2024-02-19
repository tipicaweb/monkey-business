let ticketsChart = createDonut("Average ticketprice", ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"], [5207, 3988, 3696, 1647, 862], ['#00EBB0', '#FFA65E', '#E86987', '#85A7FF', '#FD85FF'], 'tickets-chart');

renderDonutLabels('tickets-labels', ticketsChart);

const barCharts = [
    new BarChart(56, "Sold", ["#F6DBC5", "#FFA65E", "#292926"], "bar-chart1"),
    new BarChart(3, "Sold", ["#F6DBC5", "#FFA65E", "#292926"], "bar-chart2"),
    new BarChart(36, "Sold", ["#F6DBC5", "#FFA65E", "#292926"], "bar-chart3"),
    new BarChart(68, "Sold", ["#F6DBC5", "#FFA65E", "#292926"], "bar-chart4"),
    new BarChart(47, "Sold", ["#F6DBC5", "#FFA65E", "#292926"], "bar-chart5"),
    new BarChart(23, "Sold", ["#F6DBC5", "#FFA65E", "#292926"], "bar-chart6")
]

barCharts.forEach(chart => {
    chart.renderChart();
})

// console.log(document.querySelector('#tickets-chart .apexcharts-datalabel-label'))