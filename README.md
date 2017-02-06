#Urlshortener

An API that takes a given url and returns a shortened version of the same URL. The shortened URL can be used for accessing the same page. 

##Getting Started

###Prerequisites

1. [node](https://nodejs.org/en/)
2. [npm](https://www.npmjs.com)
3. [mongodb](https://www.mongodb.com/)

###Installation
Clone the project

```git
git clone https://github.com/khansubhan95/timestamp-microservice.git
```

run

```
npm install
```

to install the dependencies

###Development
Rename .env.template to .env

The project uses MongoDB to store data so make sure you have it installed. Use the MONGO_URI to make sure that the service has access to a DB

##Deployment

**MONGOLAB_URI**
Use a third party service like [mLab](https://mlab.com/) to make a MongoDB database and note down the access point.

##Usage

[/api/http://www.google.co.in](https://sheltered-tundra-95244.herokuapp.com/api/http://www.google.co.in)

Returns
```javascript
{"originalUrl":"http://www.google.co.in","shortUrl":"https://sheltered-tundra-95244.herokuapp.com0/0"}
```

shortUrl will direct to the original page

##Builtwith
1. [express](https://expressjs.com/)   
2. [mongoose](http://mongoosejs.com/)

View other dependencies in package.json

##Licensing
MIT
