// custom-chart.js





(function ($) {
    "use strict";

    /*Sale statistics Chart*/
    if ($('#myChart').length) {
        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'line',

            // The data for our dataset
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Sales',
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(44, 120, 220, 0.2)',
                    borderColor: 'rgba(44, 120, 220)',
                    data: [0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    label: 'Registers',
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(4, 209, 130, 0.2)',
                    borderColor: 'rgb(4, 209, 130)',
                    data: [0, 0, 8, 2, 0, 0, 0, 0, 0, 0, 0, 0]
                },
                {
                    label: 'Products',
                    tension: 0.3,
                    fill: true,
                    backgroundColor: 'rgba(380, 200, 230, 0.2)',
                    borderColor: 'rgb(380, 200, 230)',
                    data: [0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0]
                }

                ]
            },
            options: {
                plugins: {
                    legend: {
                        labels: {
                            usePointStyle: true,
                        },
                    }
                }
            }
        });

        //updateChartData(chart);
    } //End if

    /*function updateChartData(chart) {
        const newData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

        const ordersCollectionRef = firebase.firestore().collection('users');
        ordersCollectionRef.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                userData.orders.forEach((order) => {
                    var date = new Date(order.orderDate.seconds * 1000 + order.orderDate.nanoseconds / 1000000);
                    var monthNumber = date.getMonth() + 1;
                    newData[monthNumber - 1]++;
                });
            });

            console.log(newData);
            chart.data.datasets[0].data = newData;
            chart.update(); // Refresh the chart to display updated data
        }).catch((error) => {
            console.error("Error fetching data from Firestore: ", error);
        });
    }*/

})(jQuery);
