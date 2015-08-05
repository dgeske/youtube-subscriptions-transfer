var parser = require('xml2json');
var fs = require("fs");
 
var xml = "<foo>bar</foo>";
fs.readFile("subscription_manager.xml", "utf8", function(error, xml) {
    console.log(xml);
});
var json = parser.toJson(xml); //returns a string containing the JSON structure by default
console.log(json);
