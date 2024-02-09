let donutLabels = document.querySelector('#donut-labels');

donutChart.w.globals.labels.forEach((label, i) => {
    let labelEl = document.createElement('div');

    labelEl.className = 'flex flex-col justify-center'

    let labelName = document.createElement('h3');
    let labelPercentage = document.createElement('h3');
    labelName.innerText = label;
    labelPercentage.innerText = `${donutChart.w.globals.seriesPercent[i]}%`

    labelPercentage.style.color = donutChart.w.globals.colors[i];
    labelPercentage.className = 'text-xl'

    labelEl.append(labelName, labelPercentage);
    donutLabels.append(labelEl);
})

document.querySelector('#area-total').innerText = areaChart.w.globals.seriesTotals[0];