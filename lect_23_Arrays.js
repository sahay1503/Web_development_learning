//Arrays are also objects
//indexing -start with 0
//const array=[1,2,3,4,5,6,7,8,9]
console.log(array[4])
console.log(array[array.length-1])


const num=new Array(1,2,3,4,5,6,7,8,9);
//Push
num.push(10);

//unshift
num.unshift(0);//adds element at the 0 index

//pop
num.pop()

//shift- remove first element
num.shift()
//assigning from outside
num[0]=10

//const names=['aman','yash','sid','yash','aditya','tarun','pavan']
console.log(names)

//indexof
names.indexOf('yash')
names.indexOf('yash',1)
//lastindexof
names.lastIndexOf('yash')

//includes-it only works for primitive data types
names.includes('pawan')
//we use find methods to check includes or not
let channels=[{
    name:'Apna College',
    subscriber:20000
},{
    name:'Apni kaksha',
    subscriber:40000
},{
    name:'Siddhant Sahay',
    subscriber:100000
}];
//how to use find method
// console.log(channels.find(function(element){
//     return element.subscriber === 50000
// }))

//arrorw functions- 
console.log(channels.find(element => element.subscriber === 50000))
console.log(channels.find(element => element.name === 'Apni kaksha'))


//concate method
let names1=['aman','yash','sid'];
let names2 =['neha','aditya','tarun','pavan'];
//let names3= names1.concat(names2)


//console.log(names1.concat(names2))
//console.log(names1.concat('huda'))

console.log(names3.slice(3))//usse phle ki sari ht jaegi
console.log(names3.slice(3,5))//bich ki

//spread method
let names3 = [...names1 ,...names2]
console.log(names3)

//for loop
const names=['aman','yash','sid','yash','aditya','tarun','pavan']
for (let i=0;i<names.length;i++){
    //console.log(names[i])
}

//for of loops
for(let name of names){
    //console.log(name)
}
//JS doesnt have for each loop there is an method which works similiarly to for each loop

names.forEach(function(name,index){
   // console.log(name,index);
})


//join  
let student =['s','h','i','v'];
console.log (student.join('_'))


//split
console.log(student.split('_'))

//filter method

let cities =[
    {name: 'Mumbai',population:3792023},
    {name: 'Delhi',population:8192023},
    {name: 'Banglore',population:26532023},
    {name: 'chennai',population:2092023},
    {name: 'lucknow',population:1592023}
]
//filter
// console.log(cities.filter(city => city.population>300000 ))

//map
console.log(cities.map(city => city.population*2 ))




