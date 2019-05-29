const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(express.static("public"));

app.set("view engine","ejs");

// for parsing application/json
app.use(bodyParser.json()); 
// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.listen(3000)