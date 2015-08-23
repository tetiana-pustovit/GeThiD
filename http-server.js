var http = require('http');

var server = http.createServer(function (req, res) {
	var onEnd = function (data) {
		console.log('Post data:  %s', data);
		req.removeListener(onEnd);
	};
	res.writeHead(200);
	res.end('Hello Http');
	req.on('end', onEnd);
});
server.listen(8080);