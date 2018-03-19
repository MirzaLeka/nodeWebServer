const express = require('express');
var app = express();

app.use(express.static(__dirname + '/public')); //middleware

app.get("/", (request, response) => {
response.send('<h2 style="color: red">Home Page</h2>');
/*response.send({
name: "Mirza",
likes : [
"Biking", 
"Cities" ]
});*/

});

app.get("/about", (req, res) => {
res.send("<h2>About Page</h2>");
});

app.get("/bad", (req, res) => {
res.send({
errorMessage: 'Unable to handle request'
});


});

app.listen(3000, () => {
console.log("Server is running on port 3000");
});