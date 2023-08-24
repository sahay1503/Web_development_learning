//when code runs there will be memory execution context,there are two phases in it 
//these are:memory execution and thread of execution

//memory get allocated before thread of execution this is called hoisting
//sayHello()
// console.log(i);
// var  sayHello=function(){ //uncaught TypeError
//     console.log("hello");
// }
// var i=10;

let foo='bar';
var bar='foo';
function sayHello() {
    //variable shadowing
    let foo='baz';
    var bar='foobar';
    console.log(foo);//baz
    console.log(bar);//foobar
}
sayHello()
console.log(foo);//bar
console.log(bar);//foobar //var will overwrite the variable details


//illegal shadowing
//let foo='bar';//it cant be declare again 
// var bar='foo';
// function sayHello() {
//     //variable shadowing
//     var foo='baz';
//     var bar='foobar';
//     console.log(foo);//baz
//     console.log(bar);//foobar
// }

//const will be declared and intialized at the same time but we can let and var declare only and initialize later

//Hoisting: It refers to the proces whereby the interpreterallocates the memory for variable and function declarations prior to the execution of the code.
//Declarations that are made using var are initialized with a default value of undefined.
//Declarations made using let and const are not initialized as part of hoisting.







