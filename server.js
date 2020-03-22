var express_module = require('express');
var app = express_module(); //express app/aspress as a function

//var fs = require('fs'); //system file read
//var fileUpload = require('express-fileupload');//to allow express multipart/form-data handling

var PouchDB = require('pouchdb');//pouch db, module
require('dotenv').config();//dot env module



var server_listen_port = process.env.PORT || 3000;//port express server is running on//glitch.me require port to be 3000


//__________________________________ routes _____________________________

// //++++++++++ enable files upload ++++++++++
// app.use(fileUpload());

//++++++++++ static elements ++++++++++
app.use(express_module.static('public'));

//++++++++++ favicon ++++++++++
app.use('/favicon.ico', express_module.static('public/assets/favicon.ico'));


// Parse URL-encoded bodies (as sent by HTML forms)
//app.use(express_module.urlencoded({limit: '50mb'}));


app.use((req, res, next)=>{//(show) get url of requested resources
        console.log('> ' + req.protocol + '://' + req.get('host') + req.originalUrl);
        next();
    })




// +++++++++ HOME ++++++++
app.get('/', function(req, res){

    res.sendFile(__dirname + "/public/html/index.html");
    //res.jsonp('hello there');


});











//__________________________________ routes end _________________________

app.listen(server_listen_port, function(){
    console.log('------------------------------------------');
    console.log('express server running on 127.0.0.1:'+server_listen_port);
    console.log('------------------------------------------');
})