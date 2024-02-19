const donutChart = createDonut("Sales", ["Nojet.com", "VIP Monkey app", "Express buy"], [250, 150, 100], ['#00EBB0', '#FFA65E', '#E86987'], 'donut-chart');

const guestsChart = createDonut("Total", ['Returning guests', 'New guests'], [360, 240], ['#00EBB0', '#FFA65E'], 'guests-chart');

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

renderDonutLabels('donut-labels', donutChart);
renderDonutLabels('guests-labels', guestsChart);

renderColumnLabels('column-labels', columnChart);

document.querySelector('#area-total').innerText = areaChart.w.globals.seriesTotals[0];