const fs = require("fs");
const lodash = require("lodash");
const $ = require("jquery");
const soap = require("./soap");

var arr = [1,2,3,4,4,4,5,6,1,2];
var output = lodash.without([...arr, 1,2,3, ...arr],3);
console.log(lodash.uniq(output));

console.log("Watchify is watching");

console.log( soap.getSoap() );

//$("h1").html(output);

