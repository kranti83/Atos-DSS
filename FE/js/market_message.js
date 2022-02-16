$(document).ready(function() {
    $("#btn_marketNews").click(function() {
        $("#todaysIndices").hide();
        $("#marketNews").show();
    });
    $("#btn_todaysIndices").click(function() {
        $("#todaysIndices").show();
        $("#marketNews").hide();
    });
    getMarketNews();
})//f

function getMarketNews() {
    $.get("/current_data/market_news", function(data, status){
        var ul = $("#ul_marketNews");
        $.each(data, function(i){
            var li = $('<li/>')
            .append($('<span/>').text(data[i].date))
            .append($('<span/>').text(" (" + data[i].time + ")"))
            .append($('<br>'))
            .append($('<span/>').text("Exchange: " + data[i].market_name))
            .append($('<br>'))
            .append($('<span/>'))
            .append($('<a/>').attr("href", data[i].external_url).text(data[i].news_text).css("color", "white"))
            .append($('<br><br>'))
            .appendTo(ul)
        })//loop through
    })
}//f

function getMarketIndices() {
    $.get("/current_data/market_indices", function(data, status){
        

    })
}//f