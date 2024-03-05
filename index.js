const incomeChart = createColumn(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], [
    {
        name: "Revenue",
        data: [270, 310, 360, 345, 370, 290, 270, 310, 360, 345, 370, 290]
    },
    {   
        name: "Net profit",
        data: [60, 110, 90, 50, 90, 55, 60, 110, 90, 50, 90, 55]
    }
], ["#CCFFE6", "#00EBB0"], "income-chart", '90%');

renderColumnLabels('income-labels', incomeChart);