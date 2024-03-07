const donut = new DonutChart("Average ticketprice", ["Lorem", "Lorem", "Lorem", "Lorem", "Lorem"], ['#00EBB0', '#FFA65E', '#E86987', '#85A7FF', '#FD85FF'], [26.026, 19.943, 18.48, 8.239, 4.312], 'tickets-chart', (total, length) => `$${(total / length).toFixed(1)}`);
donut.render();
donut.renderLabels('tickets-labels')

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


const dropdownClick = (event) => {
    event.preventDefault();

    if(event.target.classList.contains('active')) return event.target.classList.remove('active');
    
    addBtns.forEach(btn => {
        btn.classList.remove('active');
    })
    
    event.target.classList.add('active');
}

const addBtns = document.querySelectorAll('.add-btn');
addBtns.forEach(btn => {
    btn.addEventListener('click', dropdownClick);
})