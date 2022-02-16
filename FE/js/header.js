$(document).ready(function () {

    //assigning prev. page values
    var creds = JSON.parse(localStorage.getItem("creds"));
    //alert(creds);
    document.getElementById("div_login").innerHTML=creds.username;
   // document.getElementById("div_register").innerHTML=creds.password;

});