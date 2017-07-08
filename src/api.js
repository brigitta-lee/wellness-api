import express from 'express';
import path from 'path';
var bodyParser = require('body-parser');
import axios from 'axios';
const app = express();
import cors from 'cors';
var request = require('request');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var router = express.Router();

app.use(function(req,res,next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

router.use(function(res, req, next) {
  console.log("something is happening");
  next();
});

router.get('/',function(req, res) {
  res.json({ message: "Hello, welcome to our api!"})
})

router.route('/map')

  .get(function(req, res) {

    let url=
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE&callback=initMap"

    req.pipe(request(url)).pipe(res);
  });

  router.route('/places/:type')

    .get(function(req, res) {
      let baseUrl=
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.878178,-114.001003&radius=5000&key=AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE&type="+req.params.type;
      req.pipe(request(baseUrl)).pipe(res);
    });


app.use('/api', router);
app.listen(process.env.PORT || 3001,()=>console.log("Listening on port 3001"));
