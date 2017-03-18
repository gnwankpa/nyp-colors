'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // req.body
const cors = require('cors'); // 8080
const mongoose = require('mongoose');
const uriUtil = require('mongodb-uri');


const mongodbUri ='mongodb://nypcolors:nypcolors@ds135700.mlab.com:35700/nyp-colors';
const mongooseUri = uriUtil.formatMongoose(mongodbUri);
const dbOptions = {};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors()); //true
app.use(express.static(__dirname + '/'));


app.use('/api/questions', require('./api/questions/routes/post_question'));
app.use('/api/questions', require('./api/questions/routes/get_questions'));
app.use('/api/questions', require('./api/questions/routes/get_question'));
app.use('/api/questions', require('./api/questions/routes/put_question'));
app.use('/api/questions', require('./api/questions/routes/delete_question'));


const hostname = 'localhost';
const port = 3001;


const server = app.listen(port, hostname, () => {
	mongoose.connect(mongooseUri, dbOptions, (err) => {
		if (err) {
			console.log(err);
			}
			console.log('server is running at http://${hostname}:${port}');

	});
});