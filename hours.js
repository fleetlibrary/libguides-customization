//today is not highlighted, check the css file
//Populate live hours
function getData() {
    fetch('https://api3.libcal.com/api_hours_grid.php?iid=618&format=json&weeks=1&systemTime=0', {
        method: 'GET',
        mode: 'cors',
    })
        .then(response => response.json())
        .then(data => {
            buildTable(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

getData();

//Highlight Today
let today = new Date();

function getToday() {
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) { 
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }
    today = yyyy + "-" + mm + "-" + dd;
}


function buildTable(data) {
    let tr = "";
    let loc = document.querySelector('table.hours')?.id == "vmrc" ? 4 : document.querySelector('table.hours')?.id == "special" ? 3 : document.querySelector('table.hours')?.id == "circ" ? 1  : 'all';

    getToday();

    if (loc == 'all') {
        tr = "";
    } else {
        let week_data = data["locations"][loc].weeks[0];
        for (const day in week_data) {
            value = week_data[day];
            var dayname = "<td>" + day + " ";
            var date = value.date.substring(5).replace("-", "/") + "</td>";
            var times = "<td>" + value.rendered + "</td>";
            if (value.date === today) {
                tr += "<tr class='today'>" + dayname + date + times + "</tr>";
            } else {
                tr += "<tr>" + dayname + date + times + "</tr>";
            }
        };
    }
    const table = document.querySelector('table.hours');
    if (table) {
        table.innerHTML = tr;
    }
}