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



function renderDonutLabels(elementId, chart) {

    let element = document.getElementById(elementId);

    chart.w.globals.labels.forEach((label, i) => {
        let labelEl = document.createElement('div');

        labelEl.className = 'flex flex-col justify-center'

        let labelName = document.createElement('h3');
        let labelPercentage = document.createElement('h3');
        
        labelName.innerText = label;
        let percentage = Number(chart.w.globals.seriesPercent[i]).toFixed(2);
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

document.querySelector('#area-total').innerText = areaChart.w.globals.seriesTotals[0];