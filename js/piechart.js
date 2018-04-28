$(function(){

    //get the line chart canvas
    var ctx = $("#line-chartcanvas");

    //line chart data
    var data = {
    datasets: [{
        data: [13, 17, 22, 30],
		backgroundColor:['#e75656','#ecec5e','#4949fd','#9cfd5e'],
		//backgroundColor:[black,rgb(54, 162, 235),rgb(255, 205, 86)]
    }],
	
    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
        'Red',
        'Yellow',
        'Blue',
		'Green'
    ]
};

    //options
    var options = {
        responsive: true,
        title: {
            display: true,
            position: "top",
            text: "Casual Pie Chart",
            fontSize: 18,
            fontColor: "#111"
        },
        legend: {
            display: false,
            position: "bottom",
            labels: {
                fontColor: "#333",
                fontSize: 16
            }
        }
    };

    //create Chart class object
    var chart = new Chart(ctx, {
        type: "pie",
        data: data,
        options: options
    });
});