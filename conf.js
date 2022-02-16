module.exports = {
//To connect using the mongo shell -->
//"mongoShell":"mongo ds161190.mlab.com:61190/k-mongo -u <dbuser> -p <dbpassword>",

//----which db to use
"useDB":"mysql",

//----mongoDB (local / cloud)
//"mongodbURL" : "mongodb://ks:ks@localhost:27017/test",
"mongodbURL": "mongodb://ks:ks@ds161190.mlab.com:61190/k-mongo",

//----mysql (local)
"mysqlHost" : "localhost",
"mysqlUser" : "dss_user",
"mysqlPass" : "dss",
"mysqlDB" : "dss",

//---- view path
"viewPath" : (__dirname+"/FE"),

//----http
"httpListenPort" : "6969"
}





