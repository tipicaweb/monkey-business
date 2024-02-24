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
], ["#CCFFE6", "#00EBB0"], "column-chart");

const areaChart = createArea("Tickets", ['01 February', '02 February', '03 February', '04 February', '05 February', '06 February'], [650, 641, 645, 652, 635, 645], "#00EBB0", "area-chart");


renderColumnLabels('column-labels', columnChart);

document.querySelector('#area-total').innerText = areaChart.w.globals.seriesTotals[0];