//display graph and table
function ShowGraphAndTable(checkbox) {
    //var graph_table = document.getElementById("graph_table");
    //var number_of_options = document.getElementById("num");
    //var total_volume = document.getElementById("volume");
    //graph_table.style.display = checkbox.checked ? "block" : "none";
    //number_of_options.style.display = checkbox.checked ? "block" : "none";
    //total_volume.style.display = checkbox.checked ? "block" : "none";
}

var UserSelection_Option = JSON.parse(localStorage.getItem("UserSelection_Option"));
if(UserSelection_Option == null){UserSelection_Option={};}
$(document).ready(function () {
    //assigning prev. page values
    var UserSelection_Option = JSON.parse(localStorage.getItem("UserSelection_Option"));
    if(UserSelection_Option.totalVol !== 0){ toggle($("#btn_continue"), 'enable');}
    
    $('input[name="timeperiod"]').val(UserSelection_Option.timePeriod);
    $('input[name="exchange"]').val(UserSelection_Option.exchange);

    //display value in volume order textbox
    $('input.optqty').on('input', function () {
        UserSelection_Option.orderQty = this.value;
        var _index = this.id.slice(-1);
        var _lot = $('#td_lotsize_' + _index).text();
        var _premium = $('#td_premium_' + _index).text();
        UserSelection_Option.optId = $('#td_optId_' + _index).text();
        UserSelection_Option.strikePrice = $('#td_strikePrice_' + _index).text();
        UserSelection_Option.sellerName = $('#td_sellerName_' + _index).text();
        UserSelection_Option.totalVol = UserSelection_Option.orderQty * _lot;
        UserSelection_Option.totalPrice = UserSelection_Option.orderQty * _premium;

        $('#ip_totalVol').val(UserSelection_Option.totalVol);
        $('#ip_totalPrice').val(UserSelection_Option.totalPrice);
        
        for (var i = 0; i < $("input.optqty").length; i++) {
            if (i != _index) { $("input.optqty")[i].value = ''; }
        }
        if (UserSelection_Option.totalVol !== 0) {
         toggle($("#btn_continue"), 'enable');
        }else {
            toggle($("#btn_continue"), 'disable');
        }
    });

    //on anywhere click remove leading 0s from inputs
    $(document).click(function () {
        for (var i = 0; i < $("input.optqty").length; i++) {
            $("input.optqty")[i].value = $("input.optqty")[i].value.replace(/^0+/, '');
        }
    })

    //on decimal click, stop and alert
    $('input.optqty').keyup(function (e) {
        if (e.which == 190) {
            alert('No decmial figures!');
            //this.value = this.value.slice(0,-1); --> dsnt wrk ok; shud remove only the dot tht was just entered
        }
    });

    //on continue
    $("#btn_continue").click(function () {
        //var volume = $("#txt_totalVol").val();
        localStorage.setItem("UserSelection_Option", JSON.stringify(UserSelection_Option));
    })
});

//toggle function start
function toggle(element, action) {
    if (action == "disable") {
        element.attr('disabled', 'disable');//jq
    } else if (action == "enable") {
        element.removeAttr('disabled');//jq
    } else {
        alert("err: technical!");
    }
}//toggle function ends