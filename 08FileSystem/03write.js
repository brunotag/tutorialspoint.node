var fs = require("fs");

console.log("Going to write into existing file");

/*
options − The third (optional) parameter is an object which will hold {encoding, mode, flag}. By default. encoding is utf8, mode is octal value 0666. and flag is 'w'
 */

fs.writeFile('input.txt', 'Simply Easy Learning!' /*String or Buffer*/,  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Data written successfully!");
   console.log("Let's read newly written data");
   fs.readFile('input.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Asynchronous read: " + data.toString());
   });
});