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



// app.use(express.static('src/api.js'));
//
// app.get('/',(req, res) =>{
//   res.sendFile('index.html');
// });
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

router.route('/places')

  .get(function(req, res) {
    // req.pipe(request
    // let type="pharmacy";
    let url=
    "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.878178,-114.001003&radius=5000&key=AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE&type=pharmacy";
    req.pipe(request(url)).pipe(res);
    // request("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.878178,-114.001003&radius=5000&type=pharmacy&key=AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE", function (error, response, body) {
    //     console.log(error); // Print the error if one occurred
    //     console.log(response.statusCode); // Print the response status code if a response was received
    //     console.log(JSON.parse(body));

        // res.json(response);
        // res.send(response);
  });

// })
  //   'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=46.878178,-114.001003&radius=5000&type=pharmacy&key=AIzaSyDiIK5Y8YpXKY5_aVv5noyqmPRspT160JE',result => res.json(result));
  // })

app.use('/api', router);
app.listen(3003,()=>console.log("Listening on port 3003"));
