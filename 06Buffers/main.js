//Method 1
var randomBufferOf10Elements = new Buffer(10);
console.log(randomBufferOf10Elements);

//Method 2
var definedBufferOf5Elements = new Buffer([10,20,30,40,50]);
console.log(definedBufferOf5Elements);

//Method 3
var bufferFromAString = new Buffer("Magnime el cul", "utf-8");
console.log(bufferFromAString);


//write to a buffer
var buf = new Buffer(256);
var len = buf.write("Magnime el cul"/*,[, offset][, length][, encoding]*/);
console.log("Octets written: "+len);


//read from a buffer
var string = buf.toString('ascii',3,len);//encoding, offset, length
console.log(string);


//buffer to json
var json = buf.toJSON(buf);
console.log(json);


//etc.... SEE:
//https://www.tutorialspoint.com/nodejs/nodejs_buffers.htm