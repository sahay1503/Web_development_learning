//scope is by default global
// var name='aman';

// function sayName(){
//     var marks=10;
//     console.log(name);
// }
// sayName()
// console.log(marks);

// //global scope
// var x=0;
// function first(){
//     //local scope #1
//     var x=1;
//     console.log(x);
//     function childOfFirst(){
//         var x=2;
//         console.log(x);
//     //local scope #2 
//     }
//     childOfFirst()
// }
// first()

// //global scope
// function second(){
//     //local scope #3
// }
// //global scope
// second()

//try to use global variable lessly
var x=10
{
    var x=1;
    console.log(x);
}
console.log(x);



if(true){
    var foo='bar';
}
console.log(foo);

//lexical Scope
function Dada(){
    var name='Triveni sahay';
    //likes is not accessible
    function Papa(){
        console.log(name);
        //name is accessible here
        //likes is not accessible here
        function Beta(){

            //Innermost level of the scope chain
            //name is also accessible here
            var likes='coding';
        }
        Beta()
    }
    console.log(likes); //uncaught referenceError
    Papa()
}
Dada()
