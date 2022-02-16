//display graph and table
function ShowGraph_table(checkbox) {
    var graph_table = document.getElementById("graph_table");
    graph_table.style.display = checkbox.checked ? "block" : "none";
}


$(document).ready(function () {

    //assigning values to next page....
    /* $("#btn_continue").click(function () {
        var holding = $("#sel_holdings").val();
        var expiry = $("#sel_day").val();
        localStorage.setItem("pageObject_option_sell_put", JSON.stringify({ 'holding': holding, 'expiry': expiry }));
    }) */
    //enable/disable continue button
    toggle($("#btn_continue"), "disable");
    $(":checkbox").click(function () {
        if ($('input[name="checkbox"]').is(':checked')) {
            toggle($("#btn_continue"), "enable");
        }
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