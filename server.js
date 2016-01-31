// call the packages we need
var express    			= require('express');
var app        			= express();
var server 				= require('http').createServer(app);
var io 					= require('socket.io').listen(server);
var ecstatic 			= require('ecstatic');

// set our port
// by default, ecstatic uses port 8000
var port = process.env.PORT || 8000;

//tell the application the /public directory is the root directory
//if page does not exist, go to 404.html
app.use(ecstatic({ root: __dirname + '/', handleError:false }));
app.get('*', function(request, response){
    response.sendfile("./index.html");
});

// SOCKET.IO Integration
// =============================================================================
//socket.io events here
io.on('connection', function(socket){
    io.emit("HELLO", {welcome: "Socket is Sending to Client"});
});

// START THE SERVER
// =============================================================================
server.listen(port);
console.log('Listening on port ' + port);

