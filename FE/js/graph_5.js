$(document).ready(function() {
    $("#btn_graph5").click(doGraph5);
});

//graph code - get data by doing a ajax call to server, organize into data sets as required by canvasJS
function doGraph5() {
    // -------------------- chart configuration code begins -------------------------- //
    var arr_data = [];
    var date = '';
    var dayCount = 0;
    $.get("/graphs/graph5", function(data, status) {
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            if (date === '' || date != row.date) {
                dayCount++;
                date = row.date;
                var dataSeries = {
                    type: "line",
                    showInLegend: true,
                    lineThickness: 1,
                    name: date,
                };
                dataSeries.dataPoints = [{ label: row.hour, y: Number(row.price) }];
                arr_data.push(dataSeries);
            } else {
                arr_data[dayCount - 1].dataPoints.push({ label: row.hour, y: Number(row.price) });
            }
        }
        //console.log(arr_data);

        // -------------------- chart configuration code begins -------------------------- //
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Hourly (X-axis) energy price (Y-axis), in GB, for "+dayCount+" days",
                fontSize: 24
            },
            //zoomEnabled: true,
            animationEnabled: true,
            axisX: {
                gridColor: "silver",
                tickColor: "silver",
                labelFontSize: 12,
                interval: 1,
                labelAutoFit: true,
                labelFontColor: "black"
            },
            toolTip: {
                shared: true
            },
            theme: "theme3",
            axisY: {
                interval: 10,
                labelFontSize: 13,
                gridColor: "silver",
                tickColor: "silver",
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