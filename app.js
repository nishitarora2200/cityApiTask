const express = require('express');
const app = express();
const axios = require('axios');
const path = require('path');
const bodyParser = require('body-parser');

const parser = bodyParser.urlencoded({extended:false});
app.set('view engine','ejs');

app.use(express.static('public'))
app.get('/geoLoc',(req,res)=>{
   res.sendFile(path.join(__dirname,'public','index.html'))
   
})


app.post('/submit',parser,(req,res)=>{
    const city = req.body.city;
    console.log(req.body.city);
    axios.get(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=17aa577881644d71b365cb2be014f19c`).then(response=>{
    res.render('latLong.ejs',{
        city:req.body.city,
        latLong:response.data.results[0].geometry,
        details:response.data.results[0].components
    })})})



app.listen(3000,(req,res)=>{
    console.log("server is listening");
})
