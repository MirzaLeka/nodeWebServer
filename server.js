const express = require('express');
const hbs = require("hbs");
const fs = require("fs");

var app = express();
/*
app.use((req, res, next) => {
res.render('maintenance.hbs'); // express prati redoslijed operacija. ovdje smo rekli da se renderuje maintenance.hbs te ce to prekriti sve ostale fajlove jer je prije njih (odozgo)
//tj sve sto je ispod nece se nikad aktivirati
} );

*/
hbs.registerHelper("getCurrentYear", () => {
return new Date().getFullYear();
});

hbs.registerHelper("screamIt", text => {
return text.toUpperCase();
});

hbs.registerPartials(__dirname + "/views/partials");

app.set("view engine", "hbs");


/*
app.use((req, res, next) => {
var now = new Date().toString();
var log = `${now}: ${req.method} ${req.url}`; // prikazuje sta sve GET-a, koji hbs, koji css

fs.appendFile('server.log', log + '\n', (err) => {
if (err) {
console.log("Unable to save file");  }
});


next();
});
 */

app.use(express.static(__dirname + '/public', { //for all html files in public directory
    extensions: ['html', 'htm'], // hide extensions html, htm from link
  
}));

app.use(express.static(__dirname, { //for html files in nodeWebServer directory
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


