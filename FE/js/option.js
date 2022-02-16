$(document).ready(function () {
    //on ready disable btn=continue
    toggle($("#btn_continue"), "disable");
    toggle($("#radio1"), "disable");

    var UserSelection_Option = JSON.parse(localStorage.getItem("UserSelection_Option"));
    if(UserSelection_Option == null){UserSelection_Option = {};}
    
    //click on list item=sel_time --> check other list and call func=fillPrices
    $("#sel_time").change(function (evt) {
        var time = $(this).val();
        var exchange = $("#sel_exchange").find(":selected").val();
        if (time != "?" && exchange != "?") { fillPrices(time, exchange); } //call a function to fill dummy values
        else { fillPrices("00.00", "00.00"); }; // if default opt selected call function to fill "00.00"
    });

    //click on list item=sel_exchange --> check other list and call func=fillPrices
    $("#sel_exchange").change(function (evt) {
        var exchange = $(this).val();
        var time = $("#sel_time").find(":selected").val();
        if (time != "?" && exchange != "?") { fillPrices(time, exchange); } //call a function to fill dummy values
        else { fillPrices("00.00", "00.00"); }; // if default opt selected call function to fill "00.00"
    });

    //on any radio button click...
    $(":radio").click(function () {
        //1) if spot and forecast are 00 then alert the user, else enable the continue button
        if ($("#td_spot").text() == '00.00' || $("#td_forecast").text() == '00.00') {
            alert("Pls choose Time Period and Exchange to continue");
        } else {
            toggle($("#btn_continue"), "enable");
        }
    });

    //click anywhere else then 1) option radios will be un-checked ==> 2) btn_continue should be disabled
    $(document).click(function (evt) {
        if (evt.target.id.search(/(^rad_|^btn_con)/) == -1) {//jq + regex
            var temp_opt = $("input[name='rad_opt']:checked");
            if (temp_opt.val() == "on") {
                temp_opt.prop('checked', false); // 1) un-check radio options
            }
            toggle($("#btn_continue"), "disable"); // 2) disable btn_continue
        }
    });

    //assigning prev. page values
    $("#btn_continue").click(function () {
        UserSelection_Option.timePeriod = $("#sel_time").val();
        UserSelection_Option.exchange = $("#sel_exchange").val();
        var _url = "";       
        if ($('#rad_bc').is(':checked')) { _url = "/option_list"; UserSelection_Option.orderType = "buy"; UserSelection_Option.itemType="call";}
        else if ($('#rad_bp').is(':checked')) { _url = "/option_list"; UserSelection_Option.orderType = "buy"; UserSelection_Option.itemType="put";}
        else if ($('#rad_sc').is(':checked')) { _url = "/holdings"; UserSelection_Option.orderType = "sell"; UserSelection_Option.itemType="call";}
        else if ($('#rad_sp').is(':checked')) { _url = "/holdings"; UserSelection_Option.orderType = "sell"; UserSelection_Option.itemType="put";}
        else { }

        if (_url == "") {
            alert("No options are selected!");
        }else{
            localStorage.setItem("UserSelection_Option", JSON.stringify(UserSelection_Option));
            //call server with constructed url
            window.location = _url  + "?timePeriod="+UserSelection_Option.timePeriod
                                    + "&exchange="+UserSelection_Option.exchange
                                    + "&type="+UserSelection_Option.itemType;
            /*
            $.ajax({
                url: _url,
                data: {
                    timePeriod: UserSelection_Option.timePeriod,
                    exchange: UserSelection_Option.exchange,
                    type: UserSelection_Option.itemType
                },
                cache: false,
                type: "GET",
                success: function (response) {
                    //console.log(response);
                    localStorage.setItem("res_optionlist", response);
                    $("body").html(response);
                },
                error: function (err) {
                    alert(err.responseText);
                }
            });// ajax call (not used for now) */
        }
    })//on button click
});//f=ready

//toggle any element (enable / disable)
function toggle(element, action) {
    if (action == "disable") {
        element.attr('disabled', 'disable');//jq
    } else if (action == "enable") {
        element.removeAttr('disabled');//jq
    } else {
        alert("err: technical!");
    }
}//f=toggle

//fillPrices in forecasted and spot with values (dummy)
function fillPrices(time, exchange) {
    var td_spot = $("#td_spot");
    var td_forecast = $("#td_forecast");
    if (time == "00.00" || exchange == "00.00") { td_spot.text(time); td_forecast.text(exchange); }
    if (time == "1-2 Months" && exchange == "EEX") { td_spot.text('68.00'); td_forecast.text('74.00'); }
    if (time == "1-2 Months" && exchange == "NPS") { td_spot.text('66.00'); td_forecast.text('75.20'); }
    if (time == "1-2 Months" && exchange == "Fingrid") { td_spot.text('66.80'); td_forecast.text('74.64'); }
    if (time == "1-2 Months" && exchange == "PJM") { td_spot.text('66.24'); td_forecast.text('73.16'); }
    if (time == "2-3 Months" && exchange == "EEX") { td_spot.text('68.00'); td_forecast.text('78.00'); }
    if (time == "2-3 Months" && exchange == "NPS") { td_spot.text('66.00'); td_forecast.text('78.20'); }
    if (time == "2-3 Months" && exchange == "Fingrid") { td_spot.text('66.80'); td_forecast.text('79.44'); }
    if (time == "2-3 Months" && exchange == "PJM") { td_spot.text('66.24'); td_forecast.text('79.32'); }
    if (time == "3-4 Months" && exchange == "EEX") { td_spot.text('68.00'); td_forecast.text('75.60'); }
    if (time == "3-4 Months" && exchange == "NPS") { td_spot.text('66.00'); td_forecast.text('75.00'); }
    if (time == "3-4 Months" && exchange == "Fingrid") { td_spot.text('66.80'); td_forecast.text('74.88'); }
    if (time == "3-4 Months" && exchange == "PJM") { td_spot.text('66.24'); td_forecast.text('74.32'); }
    if (time == "5-6 Months" && exchange == "EEX") { td_spot.text('68.00'); td_forecast.text('73.36'); }
    if (time == "5-6 Months" && exchange == "NPS") { td_spot.text('66.00'); td_forecast.text('73.88'); }
    if (time == "5-6 Months" && exchange == "Fingrid") { td_spot.text('66.80'); td_forecast.text('72.80'); }
    if (time == "5-6 Months" && exchange == "PJM") { td_spot.text('66.24'); td_forecast.text('72.64'); }
}//f=fillPrices

