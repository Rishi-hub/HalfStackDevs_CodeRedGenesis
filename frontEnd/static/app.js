document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.location-card').forEach(card => {
        card.addEventListener('click', function () {
            this.classList.toggle('active');
            
        });
    });


    const xValues = ["United States", "Canada", "Europe/Middle East", "Asia Pacific"];
    const barColors = ["red", "green","blue","orange"];

    const waterYValues = [49613560, 24410565, 0, 0];
    const wasteYValues = [450052.73, 196656, 18823.59521, 1063.593];
    const greenHouseGasesYValues = [8440.68, 3605.32, 1137.94, 2830.14];
    const oilSpillsValues = [195,104,0,0];
    const energyValues = [86.93313343, 60.066288, 16.85797016, 42.285];
    
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
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
              return previousValue + currentValue;
            });
            var currentValue = dataset.data[tooltipItem.index];
            var percentage = Math.round((currentValue / total) * 100);
            return `${data.labels[tooltipItem.index]}: ${percentage})`;
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
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
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
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
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
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
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
          label: function(tooltipItem, data) {
            var dataset = data.datasets[tooltipItem.datasetIndex];
            var total = dataset.data.reduce(function(previousValue, currentValue, currentIndex, array) {
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
});