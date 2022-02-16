$(document).ready(function () {
    
    //enable/disable certificate button
    toggle($("#btn_certificate"), "enable");
    $(":checkbox").click(function () {
        if ($('input[name="checkbox"]').is(':checked')) {
            toggle($("#btn_certificate"), "enable");
        }
    });

    //payment gateway pop up window 
    $("#btn_certificate").click(function () {
        $("#certificate_modal").modal();
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