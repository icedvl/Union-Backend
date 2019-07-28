const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);

app.use('/', express.static(path.join(__dirname, '/../client/build')));

app.use(function(req, res, next){
	res.sendFile(path.join(__dirname+'/../client/build/index.html'), { headers: { ['x-lang']: 'en' }});
})

const port = 5000;

http.listen(port, function(){

	process.stdout.write('\033c')

	console.log('\x1b[32m','Wake up, Neo...')
})