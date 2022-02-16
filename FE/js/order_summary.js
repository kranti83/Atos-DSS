$(document).ready(function () {

    //assigning prev. page values
    var UserSelection_Option = JSON.parse(localStorage.getItem("UserSelection_Option"));
    $('input[name="timePeriod"]').val(UserSelection_Option.timePeriod);
    $('input[name="exchange"]').val(UserSelection_Option.exchange);

    var UserSelection_Option = JSON.parse(localStorage.getItem("UserSelection_Option"));
    $('input[name="sellerName"]').val(UserSelection_Option.sellerName);
    $('input[name="strikePrice"]').val(UserSelection_Option.strikePrice);
    $('input[name="totalVol"]').val(UserSelection_Option.totalVol);
    $('input[name="totalPrice"]').val(UserSelection_Option.totalPrice);
    $('input[name="orderQty"]').val(UserSelection_Option.orderQty);

    //payment gateway pop up window  (NOT_USED)
    $("#order_confirm").click(function () {
        $("#myOrder_modal").modal();
    });
});