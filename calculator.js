const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var resultant = n1 + n2;
  res.send("The Result is " + resultant);
});

app.get("/bmicalculator",function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function(req,res){
  var h = Number(req.body.h);
  var w = Number(req.body.w);
  var resultant = w/(h*h);
  res.send("Your BMI is " + resultant);
});

app.listen(3000, function(){
  console.log("Server running on 3000");
});
