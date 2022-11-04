// var scope = "global scope"; // A global variable
// function checkscope() {
//  var scope = "local scope"; // A local variable
//  function f() { return scope; } // Return the value in scope here
//  return f;
// }
// console.log(checkscope()()) 

var invokeInteger = (function() {
    var counter = 0;
    return function() {
        return counter++;
    }
}());