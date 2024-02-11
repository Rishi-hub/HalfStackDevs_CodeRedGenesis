document.addEventListener('DOMContentLoaded', function () { //This section waits for HTML elements to be loaded before script runs
    console.log("DOM fully loaded and parsed");
    document.querySelectorAll('.location-card').forEach(card => {
        card.addEventListener('click', function () {
            console.log("Card clicked:", this);
            this.classList.toggle('active');
        });
    });
  
    const xValues = ["United States", "Canada", "Europe/Middle East", "Asia Pacific"];
    const barColors = ["red", "green","blue","orange"];
  
    console.log("xValues:", xValues);
    console.log("barColors:", barColors);
  
    const waterYValues = [49613560, 24410565, 0, 0];
    const wasteYValues = [450052.73, 196656, 18823.59521, 1063.593];
    const greenHouseGasesYValues = [8440.68, 3605.32, 1137.94, 2830.14];
    const oilSpillsValues = [195,104,0,0];
    const energyValues = [86.93313343, 60.066288, 16.85797016, 42.285];
  
    console.log("waterYValues:", waterYValues);
    console.log("wasteYValues:", wasteYValues);
    console.log("greenHouseGasesYValues:", greenHouseGasesYValues);
    console.log("oilSpillsValues:", oilSpillsValues);
    console.log("energyValues:", energyValues);
  
    
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
            enabled: true,
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