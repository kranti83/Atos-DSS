$(document).ready(function () {

    //assigning prev. page values
    var lastPageValues = JSON.parse(localStorage.getItem("pageObject_option"));
    $('input[name="timeperiod"]').val(lastPageValues.timePeriod);
    $('input[name="exchange"]').val(lastPageValues.exchange);

});    