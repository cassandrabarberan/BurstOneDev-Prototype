
          // setup 
          const data = {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July'],
            datasets: [{
              label: 'Gross Income',
              data: [4200, 8945, 1234, 6890, 3546, 5876,1256,],
              backgroundColor:
                'rgba(255, 26, 104, 0.2)',
              borderColor: 
                'rgba(255, 26, 104, 1)',
              borderWidth: 1,
              tension: 0.2
            },{
            label: 'Net Income',
              data: [1146,  2363, 6779,1222, 7236, 3949, 6752],
              backgroundColor:
              'rgba(0, 26, 104, 0.2)',
              borderColor: 
                'rgba(0, 26, 104, 0.2)',
              borderWidth: 1,
              tension: 0.2
            }]
          };
      
          // config 
          const config = {
            type: 'line',
            data,
            options: {
              plugins: {
                title: {
                    display: true,
                    text: 'Gross and Net Total Income',
                    padding: {
                        top: 10,
                        bottom: 30,
                        font: {
                            size: 42,
                        }
                    
                    }
                }
            }
            }
          };
      
          // render init block
          const myChart = new Chart(
            document.getElementById('myChart'),
            config
          );

          
        
