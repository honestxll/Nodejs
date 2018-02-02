const http = require('http');
const fs = require('fs');
http.createServer((request, response) => {
	fs.readFile('./www/index.html', (error, data)=> {
		if (error) {
			response.write('404');
		} else {
			response.write(data);
		}
		response.end();
	});
}).listen(4040, error => (!error || console.log(error)));
