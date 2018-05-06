//mongodb commands: http://howtonode.org/node-js-and-mongodb-getting-started-with-mongojs
//http://docs.mongodb.org/manual/reference/mongo-shell/

/*var databaseURI = "localhost:27017/somedb";
var collections = ["users", "blogs"];
var db = require("mongojs").connect(databaseURI, collections);

module.exports = db;

and then just require it where you need to connect to mongo like:

var db = require("./db");
*/

var express = require('express');
var app = express();

var mongoose = require('mongoose');

var ObjectId = mongoose.Types.ObjectId;
mongoose.connect('mongodb://localhost/smah_swp');

var Contacts = require('./models/Contacts');



var bodyParser = require('body-parser');

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/Contacts', function (req, res) {
	console.log('Received find all Contacts request');
	Contacts.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	})
});

app.get('/Contact/:id', function (req, res) {
	console.log('Received findOne Contact request');
	Contacts.findOne({
		_id: ObjectId(req.params.id)
	}, function (err, docs) {
		console.log(docs);
		res.json(docs);
	})
});

app.post('/addContact', function (req, res) {
	console.log(req.body);

	var Contact = new Contacts({
		name: req.body.name,
		phone: req.body.phone,
		location: req.body.location,
		job: req.body.job
	})
	Contact.save(function (err, docs) {
		if (err) console.log("error : " + err)
		console.log(docs);
		res.json(docs);
	})
});

app.delete('/deleteContact/:id', function (req, res) {
	console.log("Received delete one Contact request...");
	Contacts.remove({
		_id: ObjectId(req.params.id)
	}, function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.put('/updateContact', function (req, res) {
	console.log("Received updateContact request");
	console.log("Received id " + req.body._id);
	var id = req.body._id;

	Contacts.findByIdAndUpdate({
		_id: ObjectId(id)
	}, {
		$set: {
			name: req.body.name,
			phone: req.body.phone,
			location: req.body.location,
			job: req.body.job
		}

	}, {
		new: true
	}, function (err, docs) {
		console.log("body ubdated >> >> " + req.body.phone);
		res.json(docs);
	})
});

//app.use(express.static(__dirname + "/app/views"));
app.listen(3000);
console.log("server running on port 3000");