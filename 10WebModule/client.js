var http = require('http');

// Options to be used by request 
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.htm'  
};

// Callback function is used to deal with response
var callback = function(response){
   // Continuously update stream with data
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Data received completely.
      if (response.statusCode == 200){
          console.log(body);
      }
      else{
          console.log("error: " + response.statusMessage);
      }
   });
}
// Make a request to the server
var req = http.request(options, callback);
req.end();