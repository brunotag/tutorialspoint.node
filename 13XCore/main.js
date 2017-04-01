var xcore = require(__dirname + '\\node_modules\\xcorenode\\xcorenode.node');
//var dllFolder = '\\SampleLib\\bin\\Release\\netstandard1.4\\win10-x64\\publish';
var dllFolder = "\\SampleLib\\bin\\Debug\\netstandard1.4";
xcore.initialize(__dirname + dllFolder, "SampleLib.dll", "SampleLib.Initializer")
xcore.loadClass("SampleLib.Calculator, SampleLib");  

var calc = new xcore.Calculator();
console.log(calc.Sum(1,2));
// var netPath = __dirname + "\\node_modules\\xcorenode\\binw10x64";
// // load the dll (initializer is optional), then load the class OrderManager (full qualified name)
// xcore.initialize(netPath, "SampleLibrary.dll", "SampleLibrary.Initializer");
// xcore.loadClass("SampleLibrary.Calculator, SampleLibrary");    

// var calc = new xcore.Calculator();

// console.log(calc.NetAdd(2, 3));         // no overloads

// console.log(calc.Add(2, 3));            // int overload

// console.log(calc.Add("Hello, ", "world"));     // string overload

// console.log(calc.ToString());