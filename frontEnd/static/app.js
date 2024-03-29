document.addEventListener('DOMContentLoaded', function () { //This section waits for HTML elements to be loaded before script runs
  console.log("DOM fully loaded and parsed");
  document.querySelectorAll('.location-card').forEach(card => {
    card.addEventListener('click', function () {
      console.log("Card clicked:", this);
      this.classList.toggle('active');
    });
  });

  const xValues = ["United States", "Canada", "Europe/Middle East", "Asia Pacific"];
  const barColors = ["red", "green", "blue", "orange"];

  console.log("xValues:", xValues);
  console.log("barColors:", barColors);

  const waterYValues = [49613560, 24410565, 0, 0];
  const wasteYValues = [450052.73, 196656, 18823.59521, 1063.593];
  const greenHouseGasesYValues = [8440.68, 3605.32, 1137.94, 2830.14];
  const oilSpillsValues = [195, 104, 0, 0];
  const energyValues = [86.93313343, 60.066288, 16.85797016, 42.285];

  console.log("waterYValues:", waterYValues);
  console.log("wasteYValues:", wasteYValues);
  console.log("greenHouseGasesYValues:", greenHouseGasesYValues);
  console.log("oilSpillsValues:", oilSpillsValues);
  console.log("energyValues:", energyValues);

  // Water Chart
  new Chart("water", {
    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: waterYValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Water usage"
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            console.log("Tooltip for water chart");
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function (previousValue, currentValue) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.round((currentValue / total) * 100);
            console.log(`Water chart tooltip data - Label: ${data.labels[tooltipItem.index]}, Value: ${currentValue}, Percentage: ${percentage}%`);
            return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
          }
        }
      }
    }
  });

  new Chart("waste", {

    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: wasteYValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Total Waste"
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.round((currentValue / total) * 100);
            return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
          }
        }
      }
    }
  });
  new Chart("GreenHouseEmissions", {

    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: greenHouseGasesYValues
      }]
    },
    options: {
      title: {
        display: true,
        text: "Green House Gases"
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.round((currentValue / total) * 100);
            return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
          }
        }
      }
    }
  });
  new Chart("oilSpills", {

    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: oilSpillsValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Green House Gases"
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.round((currentValue / total) * 100);
            return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
          }
        }
      }
    }
  });
  new Chart("energy", {

    type: "pie",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: barColors,
        data: energyValues,
      }]
    },
    options: {
      title: {
        display: true,
        text: "Green House Gases"
      },
      tooltips: {
        callbacks: {
          label: function (tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function (previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.round((currentValue / total) * 100);
            return `${data.labels[tooltipItem.index]}: ${currentValue} (${percentage}%)`;
          }
        }
      }
    }
  });

  document.getElementById('generateChartButton').addEventListener('click', function () {
    // Generate random data for the chart
    const labels = ["Combustion Energy", "Imported Electricity", "Total Energy"];
    const data = [[81.33, 58.277, 16.85797016], [42.285, 198.7499702,
      5.603133434], [1.789288, .8, .9], [7.392421434,
      86.93313343, 60.066288], [16.85797016, 42.285, 206.1423916]]

    // Create the chart
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Data',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)', // Change color as needed
          borderColor: 'rgba(54, 162, 235, 1)', // Change color as needed
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  let d = [];
  let canvas = [
      document.getElementById('energy'),
      document.getElementById('oilSpills'),
      document.getElementById('water'),
      document.getElementById('waste'),
      document.getElementById('GreenHouseEmissions')
  ];

  for (let i = 0; i < 6; ++i) {
    d[i] = document.getElementById('d' + JSON.stringify(i));

    d[i].addEventListener('click', function (event) {
      event.preventDefault();

      let canvasClick = false;
      for (let j = 0; j < canvas.length; j++) {
        if (event.target === canvas[j]) {
          canvasClick = true;
          break;
        }
      }
      if (canvasClick) return;

      if (d[i].open) {
        d[i].removeAttribute('open');
      } else {
        d[i].setAttribute('open', 'open');
        for (let j = 0; j < 6; ++j) {
          if (i === j) continue;
          d[j].removeAttribute('open');
        }
        window.location.href = "#d" + JSON.stringify(i);
      }
    });
  }
});
