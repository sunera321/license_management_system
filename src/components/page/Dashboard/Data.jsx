export const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Total Users This Year',
        data: [65, 59, 80, 81, 56, 55, 40, 45,50,60,70,60], 
        fill: false,
        borderColor: 'rgb(128, 128, 128)',
        tension: 0.1
      }
    ]
  };
  
  export const barChartData = {
    labels: ['HRM', 'ESN', 'PeoplesHR', 'HRO', 'Trackingsystems', 'HRO'],
    datasets: [
      {
        label: 'Total Projects',
        data: [65, 59, 80, 81, 56, 55], 
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(199, 199, 199, 0.2)'
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(199, 199, 199, 1)'
        ],
        borderWidth: 1
      }
    ]
  };
  