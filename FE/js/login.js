//for modal pop-up window
$(document).ready(function () {
	$("#a_login").click(function () {
		$("#myModal").modal();
		$("#uname").val("");
		$("#pwd").val("");
	});
});

function UserProfile(usr, pass) {
	this.usr = usr;
	this.pass = pass;
}
var profiles = [new UserProfile("aa", "aaa"), new UserProfile("bb", "bbb"), new UserProfile("cc", "ccc"), new UserProfile("dd", "ddd")];
var valid = -1;

function check(entry) {

	for (var i = 0; i < profiles.length; i++) {
		if (entry.uname.value === profiles[i].usr && entry.pwd.value === profiles[i].pass) {
			valid = i;
			//window.location="/";

		}
	}
	if (valid != -1) {
		window.alert("Login Successfull!!!");

		var username = document.getElementById("uname").value;
		//alert(username);
		//document.getElementById("div_login").innerHTML = username;
		
       localStorage.setItem("creds", JSON.stringify({ 'username': username }));
	}
	else {
		window.alert("Incorrect username or password...");
		document.getElementById("myModal").focus();
		document.getElementById("uname").value = "";
		document.getElementById("pwd").value = "";
		
	}

}