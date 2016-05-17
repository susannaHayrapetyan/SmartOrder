angular
.module('smartOrder.services')
.factory('SocketSrv', function() {
	var socket, queue = [];

	function connect(_callbacks){
		var settings = {
			ip: '192.168.1.202'
		},
		ip;

		if(settings.ip){

			ip = "http://" + settings.ip + ":3000";
			console.log(ip)
		}

		try {
		    socket = io.connect(ip, { forceNew: true });

		    if(_callbacks)
		    	socket._callbacks = _callbacks;
		}
		catch(err) {
			console.log(err)
		} 
	}


	return{
		connect: connect,
		reconnect: function(){
			var self = this;
			_callbacks = socket._callbacks;

			socket.disconnect();
			socket.close();
			connect(_callbacks);
		},
		on: function(event, cb){
			if(socket)
				socket.on(event, cb);
		},
		emit: function(event, data){

			if(socket)
				socket.emit(event, data);
		},
		destroy: function(){
			if(socket)
				socket.destroy();
		}
	}
 
})