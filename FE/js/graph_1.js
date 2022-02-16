$(document).ready(function() {

    //on load show first (default) graph
    doGraph1();

    $("#btn_graph1").click(doGraph1);

});
//graph code - get data by doing a ajax call to server, organize into data sets, use canvasJS to render graph
function doGraph1() {
    $.get("/graphs/graph1", function(data, status) {
        var arr_2014 = [];
        var arr_2015 = [];
        var arr_2016 = [];
        for (var i = 0; i < data.length; i++) {
            item = data[i];
            if (item.year == '2014') {
                arr_2014.push({ y: Number(item.average_value), label: item.zoneID });
            } else if (item.year == '2015') {
                arr_2015.push({ y: Number(item.average_value), label: item.zoneID });
            } else if (item.year == '2016') {
                arr_2016.push({ y: Number(item.average_value), label: item.zoneID });
            }
        } //for

        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Yearly congestion hours(y-axis), per zone for last 3 years(x-axis)",
                fontSize: 24
            },
            animationEnabled: true,
            axisX: {
                gridColor: "black",
                tickColor: "black",
                labelFontSize: 13,
                labelAngle: -45,
                interval: 1,
                labelAutoFit: true,
                labelFontColor: "black"
            },
            axisY: {
                gridColor: "gray",
                tickColor: "black",
                labelFontSize: 13,
                labelAutoFit: true,
                labelFontColor: "black"
            },
            toolTip: {
                shared: true
            },

            theme: "theme3",

            legendText: "This is Graph 1",

            showInLegend: true,

            data: [{
                type: "column",
                legendText: "2014",
                showInLegend: "true",
                dataPoints: arr_2014
            }, {
                type: "column",
                legendText: "2015",
                showInLegend: "true",
                dataPoints: arr_2015
            }, {
                type: "column",
                legendText: "2016",
                showInLegend: "true",
                dataPoints: arr_2016
            }]
        });
        chart.render();
    });
} //function