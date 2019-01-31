const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');
const Event = require('./models/event');
const Registration = require('./models/registration');


app.set('view engine', 'ejs');
app.use(express.urlencoded());



app.get('/',function(req, res){
    return res.render('home',{
        page_title: "Event Manager"
    }
    )
});

app.post("/create-event",function(req,res){
    Event.create({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date
    },
    function(err, event){
        console.log(event);
    })
});



app.listen(port , function(err){
    if(err){
        console.log('Error in running server');
    }
    console.log("server is running on " +port);

})