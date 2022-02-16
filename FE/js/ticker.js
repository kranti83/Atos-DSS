//display graph and table
/*function showTicker(ticker_button) {
    var graph_table = document.getElementById("graph_table");
    graph_table.style.display = ticker_button.clicked ? "block" : "none";
}*/

$(document).ready(function () {

    $("#btn_climate_data").click(function(){
        $("#climate_data_tkr").show();
        $("#todays_market_tkr").hide();
        $("#power_cut_tkr").hide();
        $("#network_data_tkr").hide();
    });
    //for btn_climate_data

    $("#btn_todays_market").click(function(){
        $("#climate_data_tkr").hide();
        $("#todays_market_tkr").show();
        $("#power_cut_tkr").hide();
        $("#network_data_tkr").hide();
    });
    //for btn_todays_market

    $("#btn_power_cut").click(function(){
        $("#climate_data_tkr").hide();
        $("#todays_market_tkr").hide();
        $("#power_cut_tkr").show();
        $("#network_data_tkr").hide();
    });
    //for btn_power_cut

    $("#btn_network_data").click(function(){
        $("#climate_data_tkr").hide();
        $("#todays_market_tkr").hide();
        $("#power_cut_tkr").hide();
        $("#network_data_tkr").show();
    });
    //for btn_network_data
});    
