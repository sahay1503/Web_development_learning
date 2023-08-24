// let counter={
//     count: 0,
//     increment: function(){
//         counter.count++;
//     }
// }
//factory function 
// let counter= createCounter();
// let counter1= createCounter();

//     function createCounter(){
//         return{
//             count:0,
//             increment:function(){
//                 this.count++;
//             }
//         }
//     }


// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter1);


// var count=0;
// function incrementCounter(counter){
//     this.count++;
// }
// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();
// incrementCounter();
console.log(this);

function Car(name){
    this.name=name;
    this.start=function(){
        console.log(this.name+'started');
    }
}
let swift=new Car('Swift');
swift.start();

console.log(swift);


