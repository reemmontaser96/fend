// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`)
// Start up an instance of app

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require(`cors`);
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 8000;//port

// Setup Server
const server = app.listen(port,listening);

function listening() {
    console.log(`server running`);
   console.log(`running on localhost: ${port}`);
}

 
  app.get('/all',sendData);//getRoutes all the data to send

function sendData(req, res){//requests response
res.send(projectData);

};


app.post('/add',addData)//post to add the data

function addData(req, res){
    projectData.temp=req.body.temp
    projectData.feel=req.body.feel
    projectData.date=req.body.date
    res.send(projectData);
console.log(req.body);
}

