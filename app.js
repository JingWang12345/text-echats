

function initChart() {
  const canvas = document.getElementById('pippo');

  // new Chart(canvas, {
  //   type: 'bar',
  //   data: {
  //     labels: ['Green', 'Purple', 'Orange'],
  //     datasets: [{
  //       barPercentage: 0.5,
  //       label: '# of Votes',
  //       data: [12, 19, 3,],
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         beginAtZero: true
  //       }
  //     }
  //   }
  // });

  const labels = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio'];
  const data = {
    labels: labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  const config = {
    type: 'line',
    data: data,
  };

  new Chart(canvas, config)
}


initChart();