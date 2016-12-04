var express = require('express');
var app = express();

var Ajv = require('ajv');
var ajv = new Ajv();
var userValidator;

var jsonfile = require('jsonfile');

jsonfile.spaces = 4;

jsonfile.readFile(__dirname + "/" + "user.schema.json", function(err, schema){
    userValidator = ajv.compile(schema);
});

app.get('/listUsers', function (req, res) {
   jsonfile.readFile( __dirname + "/" + "users.json", function (err, data) {
       console.log( data );
       res.end( data );
   });
})

app.put('/addUser', function (req, res) {
   // First read existing users.
   req.on("data", function (data){
       var newUser = JSON.parse(data);
        if (!userValidator(newUser)){
            res.statusCode = 400;
            res.statusMessage = "body is not a valid user";
            res.end();
        };
        jsonfile.readFile( __dirname + "/" + "users.json", function (err, allUsers) {
            allUsers[newUser.name] = newUser;
            jsonfile.writeFile( __dirname + "/" + "users.json", allUsers, function (err) {
                if (err){
                    console.log(err);
                }                
            });            
            //console.log( data );
            //res.end( JSON.stringify(data));
        });
        res.end();
   })
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})