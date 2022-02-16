$(document).ready(function() {
    $("#btn_graph2").click(doGraph2);
});

//graph code - get data by doing a ajax call to server, organize into data sets as required by canvasJS
function doGraph2() {
    var arr_data = [];
    var dataSeries = {};
    // -------------------- chart configuration code begins -------------------------- //
    $.get("/graphs/graph2", function(data, status) {
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            for (var j = 1; j < Object.keys(row).length; j++) {
                var key = Object.keys(row)[j];
                if (i == 0) {
                    dataSeries = {
                        type: "line",
                        showInLegend: true,
                        lineThickness: 1,
                        name: key,
                    };
                    dataSeries.dataPoints = [{ x: i + 1, label: row.date, y: Number(row[key]) }]
                    arr_data.push(dataSeries);
                } else {
                    arr_data[j - 1].dataPoints.push({ x: i + 1, label: row.date, y: Number(row[key]) })
                }
            } //for - columns
        } //for - rows
        //console.log(arr_data);
        
        // -------------------- chart configuration code begins -------------------------- //
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Daily elspot prices (y-axis) in exchanges (x-axis); with zoom and pan",
                fontSize: 24
            },
            zoomEnabled: true,
            animationEnabled: true,
            axisX: {
                gridColor: "Silver",
                tickColor: "Silver",
                labelFontSize: 10,
                labelAngle: -45,
                interval: 10,
                labelAutoFit: true,
                labelFontColor: "black"
            },
            toolTip: {
                shared: true
            },

            theme: "theme6",

            axisY: {
                gridColor: "silver",
                tickColor: "silver",
                labelFontSize: 13,
                interval: 5,
                labelFontColor: "black"
            },
            legend: {
                verticalAlign: "center",
                horizontalAlign: "center"
            },
            data: arr_data,
            legend: {
                cursor: "pointer",
                itemclick: function(e) {
                    if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
                        e.dataSeries.visible = false;
                    } else {
                        e.dataSeries.visible = true;
                    }
                    chart.render();
                }
            }
        });

        chart.render();
    });
} //function