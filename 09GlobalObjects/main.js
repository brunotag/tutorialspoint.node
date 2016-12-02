console.log(__filename);

console.log(__dirname);


function printHello(){
   console.log( "Hello, World!");
}

//Set Timeout (call a function after a certain timeout):
// Now call above function after 2 seconds
var timer = setTimeout(printHello, 2000);

// Clear the timer (stops it) (comment the line to see the call)
clearTimeout(timer);

timer = setInterval(printHello, 1000);

function stopTimer(t){
    clearTimeout(t);
}

setTimeout(stopTimer,4000,timer); //function, timeout, arguments