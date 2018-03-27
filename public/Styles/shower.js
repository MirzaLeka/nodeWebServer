const fs = require("fs");
const lodash = require("lodash");
const $ = require("jquery");


var output = lodash.without([1,2,3],3);
console.log(output);

$("h1").html(output);

