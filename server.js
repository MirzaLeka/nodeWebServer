const express = require('express');
const hbs = require("hbs");

var app = express();

hbs.registerHelper("getCurrentYear", () => {
return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
return text.toUpperCase();
});


hbs.registerPartials(__dirname + "/views/partials");
app.set("view engine", "hbs");



app.use(express.static(__dirname + '/public', {
    extensions: ['html', 'htm'],
  
}));

app.use(express.static(__dirname, {
    extensions: ['html', 'htm'],
 
}));



app.listen(3000, () => {
console.log("Starting Server");
console.log("Server is running on port 3000");
});



//app.use(express.static(__dirname + '/public')); //middleware
/*
app.get("/", (request, response) => {
response.send('<h2 style="color: red">Home Page</h2><br>'
+ '<a href="reservations">Make a reservations</a>');
/*response.send({
name: "Mirza",
likes : [
"Biking", 
"Cities" ]
});

}); */

app.get("/", (req, res) => {

res.render("home.hbs", {
welcomeMessage: 'Welcome stranger!',
pageTitle: 'Home Page',

});
});



app.get("/about", (req, res) => {
//res.send("<h2>About Page</h2>");
res.render("about.hbs", {
pageTitle: 'About Page',

});
});

app.get("/reservations", (req, res) => {

res.render("reservations.hbs", {
pageTitle: 'Make a reservation',

});
});


app.get("/help", (req, res) => {

res.render("help.hbs", {
pageTitle: 'TRY',

});
});




/*

app.get("/bad", (req, res) => {
res.send({
errorMessage: 'Unable to handle request'
});


})

*/


