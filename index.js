console.log("Server đã khởi động");
var server = require("http");

var sv = server.Server();
var io = require("socket.io")(sv);
sv.listen(process.env.PORT || 3000);
io.on("connection",function(socket){
	console.log(socket.id + " đã kết nối");
	socket.on("disconnect",function(){
		console.log(socket.id + " đã ngắt kết nối");
	});
	socket.on("ArdSendData",function(dt){
		console.log(dt);
	})
});



