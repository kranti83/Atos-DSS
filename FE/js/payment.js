
$(document).ready(function () {
    $("#btn_ok_payment").click(function() {
        alert("hi");
    });


    //for radio and checkbox enable/disable
    $('input[name="optradio"]').click(function () {
        if ($('input[name="optradio"]').is(':checked')) {
            var radioValue = $("input[name='optradio']:checked").val();

            if (radioValue == "credit_card") {
                $("#sel_Cbank").prop("disabled", false);
                $("#sel_Dbank").prop("disabled", true);
                $("#sel_Nbank").prop("disabled", true);
            }

            else if (radioValue == "debit_card") {
                $("#sel_Cbank").prop("disabled", true);
                $("#sel_Dbank").prop("disabled", false);
                $("#sel_Nbank").prop("disabled", true);
            }
            else if (radioValue == "net_banking") {
                $("#sel_Cbank").prop("disabled", true);
                $("#sel_Dbank").prop("disabled", true);
                $("#sel_Nbank").prop("disabled", false);
            }
            else if (radioValue == "letter_of_credit") {
                $("#sel_Cbank").prop("disabled", true);
                $("#sel_Dbank").prop("disabled", true);
                $("#sel_Nbank").prop("disabled", true);
            }
            else if (radioValue == "cash") {
                $("#sel_Cbank").prop("disabled", true);
                $("#sel_Dbank").prop("disabled", true);
                $("#sel_Nbank").prop("disabled", true);
            }
            else if (radioValue == "cheque") {
                $("#sel_Cbank").prop("disabled", true);
                $("#sel_Dbank").prop("disabled", true);
                $("#sel_Nbank").prop("disabled", true);
            }
            else {
                $("#sel_Cbank").prop("disabled", true);
                $("#sel_Dbank").prop("disabled", true);
                $("#sel_Nbank").prop("disabled", true);
            }
        }
    });

    //for Pay Premium Now button enable/disable
    toggle($("#payment_gateway"), "disable");
    $(":radio").click(function () {
        if ($('input[name="optradio"]').is(':checked')) {
            toggle($("#payment_gateway"), "enable");
        }
    });

    //payment gateway pop up window 
    $("#payment_gateway").click(function () {
        var UserSelection_Option = JSON.parse(localStorage.getItem("UserSelection_Option"));
        //console.log(UserSelection_Option);
        $.ajax({
            url: "/upd_orders_holdings",
            data: UserSelection_Option,
            cache: false,
            type: "POST",
            success: function (response) {
                $("#myPayment_modal").modal();
            },
            error: function (err) {
                alert(err.responseText);
            }
        })//ajax 
    });
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




