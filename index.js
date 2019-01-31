const express = require('express');
const app = express();
const port = 8000;

app.get('/',function(req, res){
    return res.end('<a href="https://github.com/ayushkarn739">ElDraco</a>');
})











app.listen(port , function(err){
    if(err){
        console.log('Error in running server');
    }
    console.log("server is running on " +port);

})