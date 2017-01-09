var express = require('express');
var validUrl = require('valid-url');
var path = require('path');
var mongodb = require('mongodb')
var mongoose = require('mongoose');
// var urlNumberSchema = require('./schemas/urlNumberSchema')
// var urlSchema = require('./schemas/urlSchema')

var app = express()

mongoose.connect('mongodb://localhost:27017/urlshortener');

var urlNumberSchema = new mongoose.Schema({
	urlNumber: {
		type: Number
	}
})

var urlSchema = new mongoose.Schema({
	originalUrl: {
		type: String,
		required: true
	},
	shortUrl: {
		type: String,
		required: true
	}
})

var UrlNumber = new mongoose.model('UrlNumber',urlNumberSchema)

var Url = new mongoose.model('Url',urlSchema)

// app.use('/',express.static(path.join(__dirname,'public')));

app.get('/api/:uri*',function(req,res){

    var uri = req.originalUrl;
    var actualUri = uri.split('api/')[1];
    console.log(actualUri);
    var status = validUrl.isUri(actualUri)
    console.log('status '+status);
    console.log(req.protocol);
    console.log(req.get('host'));

    res.send('stats')

    // if (status !== undefined) {

    // }

    // else 
    // 	res.send('Invalid API request');
})


app.listen(3000);
console.log('Server running on port 3000');