const trafficCanvas = document.getElementById('traffic-chart');
const dailyCanvas = document.getElementById('daily-chart');
const mobileCanvas = document.getElementById('mobile-chart');

// ***************** Graphic #1 - Traffic Chart *****************
// Data - Traffic Chart
let trafficData = {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
        "4-10", "11-17", "18-24", "25-31"],
    datasets: [{
        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
            2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderColor: 'rgba(176, 179, 231, 1)',
        borderWidth: 1.5,
        pointRadius: 6,
        pointBackgroundColor: 'rgba(251, 251, 251, 1)',
        pointBorderWidth: '2',
        pointBorderColor: 'rgba(116,120,191,1)',
        lineTension: 0
    }]
};

let trafficData1 = [350, 1450, 1000, 1200, 1500, 950, 580, 1050, 1250, 1000,
    1500];

let trafficData2 = [950, 1250, 400, 1500, 1500, 2550, 100, 1350, 2250, 1200,
    1500];

let trafficData3 = [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
    2500];

let trafficData4 = [750, 1750, 1500, 1800, 1500, 2050, 840, 1350, 950, 700,
    1500];

// Options - Traffic Chart
let trafficOptions = {
    aspectRatio: 2.5,
    animation: {
        duration: 0
    },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    },
    layout: {
        padding: {
            // left: 10,
            // right: 10
        }
    }
}

// Invoke - Traffic Chart
let trafficChart = new Chart(trafficCanvas, {
    type: 'line',
    data: trafficData,
    options: trafficOptions
});

// Interaction Grafic #1
const trafficNav = document.querySelector('.traffic-nav');
const trafficAll = document.querySelectorAll('.traffic-nav-link');

trafficNav.addEventListener('click', e => {
    const navSelected = e.target;

    if (navSelected.tagName === 'LI') {
        trafficAll.forEach(element => {
            element.classList.remove('active');
        });
        navSelected.classList += ' active';
    }

    if (navSelected.innerText === 'Hourly') {
        trafficChart.data.datasets[0].data = trafficData1;
        trafficChart.update();
    } else if (navSelected.innerText === 'Daily') {
        trafficChart.data.datasets[0].data = trafficData2;
        trafficChart.update();
    } else if (navSelected.innerText === 'Weekly') {
        trafficChart.data.datasets[0].data = trafficData3;
        trafficChart.update();
    } else if (navSelected.innerText === 'Monthly') {
        trafficChart.data.datasets[0].data = trafficData4;
        trafficChart.update();
    }
});

// ***************** Graphic #2 - Daily Chart *****************
// Data - Daily Chart
let dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
        label: '# of Hits',
        data: [75, 115, 175, 125, 225, 200, 100],
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
};

// Options - Daily Chart
let dailyOptions = {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    },
    legend: {
        display: false
    },
    layout: {
        // padding: {
        //     left: 10,
        //     right: 40,
        //     bottom: 30
        // }
    },
}

// Invoke - Daily Chart
let dailyChart = new Chart(dailyCanvas, {
    type: 'bar',
    data: dailyData,
    options: dailyOptions
});

// ***************** Graphic #3 - Mobile Chart *****************
// Data - Mobile Chart
let mobileData = {
    labels: ["Desktop", "Tablet", "Phones"],
    datasets: [{
        label: '# of Users',
        data: [2000, 550, 500],
        borderWidth: 0,
        backgroundColor: [
            '#7477BF',
            '#78CF82',
            '#51B6C8'
        ]
    }]
};

// Options - Mobile Chart
let mobileOptions = {
    legend: {
        position: 'right',
        labels: {
            boxWidth: 20,
            fontStyle: 'bold',
            fontFamily: 'Lato',
            fontSize: 18,
        }
    },
    layout: {
        // padding: {
        //     left: 10,
        //     right: 40,
        //     bottom: 30
        // }
    },
}

// Invoke - Mobile Chart
let mobileChart = new Chart(mobileCanvas, {
    type: 'doughnut',
    data: mobileData,
    options: mobileOptions
});

