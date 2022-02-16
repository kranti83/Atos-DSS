$(document).ready(function() {
    $("#btn_graph4").click(doGraph4);
});

//graph code - get data by doing a ajax call to server, organize into data sets as required by canvasJS
function doGraph4() {
    // -------------------- chart configuration code begins -------------------------- //
    var arr_data = [];
    var area = '';
    var areaCount = 0;
    $.get("/graphs/graph4", function(data, status) {
        for (var i = 0; i < data.length; i++) {
            var row = data[i];
            if (area === '' || area != row.area) {
                areaCount++;
                area = row.area;
                var dataSeries = {
                    type: "line",
                    showInLegend: true,
                    lineThickness: 1,
                    name: area,
                };
                dataSeries.dataPoints = [{ label: row.year_month, y: Number(row.avg_price) }];
                arr_data.push(dataSeries);
            } else {
                arr_data[areaCount - 1].dataPoints.push({ label: row.year_month, y: Number(row.avg_price) });
            }
        }
        //console.log(arr_data);
        
        // -------------------- chart configuration code begins -------------------------- //
        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Sweden: Monthy(x-axis) Average Energy price(y-axis)",
                fontSize: 20,
                fontFamily: 'arial'
            },
            //zoomEnabled: true,
            animationEnabled: true,
            axisX: {
                gridColor: "silver",
                tickColor: "silver",
                labelFontSize: 12,
                labelAngle: -60,
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