// ================================================== //
//     DATE PICKER
// ================================================== //

let DatePicker = function () {

    let month = new Array(12);
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";

    function show(title, date, callback) {
        setupDatePicker(title, date, callback);
        document.getElementById('date-picker').classList.add('show');
    }

    function hide() {
        document.getElementById('date-picker').classList.remove('show');
    }

    function setupDatePicker(title, selected, callback) {

        document.querySelector('.date-header-title').textContent = title;
        document.querySelector('.date-header-info').textContent = selected.toLocaleDateString("en-US", {weekday: 'short', month: 'short', day: 'numeric'});

        document.querySelector('#date-picker-cal-month-label').innerHTML = `${month[selected.getMonth()]} ${selected.getFullYear()}`;


        let firstDay = new Date(selected.getFullYear(), selected.getMonth(), 1);
        let lastDay = new Date(selected.getFullYear(), selected.getMonth() + 1, 0);

        let firstDOW = firstDay.getDay();
        let maxDays = lastDay.getDate();


        let html = "";
        let selectedDate = selected.getDate();


        html += "<tr>";
        for (let i = 0; i < firstDOW; i++) {
            html += "<td></td>";
        }
        for (let i = 1; i <= (7 - firstDOW); i++) {
            let selected = "";
            if (i === selectedDate) {
                selected = "selected";
            }
            html += "<td class='enabled-date " + selected + "'>" + i + "</td>";
        }
        html += "</tr>";

        let next = 7 - firstDOW + 1;
        let counter = 0;
        for (let i = next; i <= maxDays; i++) {
            if (counter % 7 === 0) {
                html += "<tr>";
            }

            let selected = "";
            if (i === selectedDate) {
                selected = "selected";
            }
            html += "<td class='enabled-date " + selected + "'>" + i + "</td>";

            if (counter % 7 === 6) {
                html += "</tr>";
            }

            counter++;
        }

        let x = counter % 7;
        if (x > 0) {
            for (let i = x; i < 7; i++) {
                html += "<td></td>";
                if (i === 6) {
                    html += "</tr>";
                }
            }
        }

        document.querySelector('#date-picker-cal tbody').innerHTML = html;


        document.querySelector('#date-picker-cal-month-prev').addEventListener('click', () => {
            let expected = new Date(selected);
            expected.setDate(1);
            expected.setMonth(expected.getMonth() - 1);

            selected.setMonth(selected.getMonth() - 1);
            if (selected.getMonth() > expected.getMonth()) {
                selected.setDate(0);
            }

            setupDatePicker(title, selected, callback);
        })

        document.querySelector('#date-picker-cal-month-next').addEventListener('click', () => {
            let expected = new Date(selected);
            expected.setDate(1);
            expected.setMonth(expected.getMonth() + 1);

            selected.setMonth(selected.getMonth() + 1);
            if (selected.getMonth() > expected.getMonth()) {
                selected.setDate(0);
            }

            setupDatePicker(title, selected, callback);
        })

        document.querySelector('#date-picker-cancel-button').addEventListener('click', () => {
            hide();
        })

        document.querySelector('#date-picker-ok-button').addEventListener('click', () => {
            hide();
            return callback(selected);
        })

        document.querySelectorAll('td.enabled-date').forEach(el => el.addEventListener('click', (event) => {
            let date = event.target.innerHTML;
            selected.setDate(date);
            setupDatePicker(title, selected, callback);
        }))
    }


    return {
        show: show,
        hide: hide
    }

};