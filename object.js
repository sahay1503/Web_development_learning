/*let lecture =10;
let section =3;
let title="Javascript";

const course={
    lecture:10,
    section:3,
    title:"JAvascript",
    notes:{
        intro:"Welcome to JS COurse",
    },
    enroll() {
        console.log("You are successfully enrolled");

    }
}
course.enroll()
console.log(course)*/

//factory function uses camelcase convention
function createCourse(title){
    return  {
        
        titleof:title,
        notes:{
            intro:"Welcome to JS COurse",
        },
        enroll() {
            console.log("You are successfully enrolled");
    
        }
    }
}

//const course= createCourse();
//course.enroll();
const newCourse=createCourse('JavaScript')

//Constructor Function follow pascal case naming convention
function Course(title){
    this.title=title,
    this.enroll=function(){
        console.log("You are successfully enrolled");
    }
}
const course= new Course("Javascript");
course.enroll()

//delete keyword
delete course.title;
//we can create new function 
course.checkEnrollment=function(){
    console.log('30 users are enrollled');
}

//Most Confusing Topic--->
const course =new Course('JavaScript');
console.log(course.constructor)
console.log(newCourse.constructor)//object 


const course={
    title:title,
    enroll(){
        console.log("You are successfully enrolled");
    }
}
/*const course=new Object({
   title:title,
   enroll(){
    console.log("you are successfully enrolled")
   }
})*/

//const course='jreke' //string object and also have predefined methods


//javascript did like this internally 

const course_1 =new Function('title',`
this.title=title,
this.enroll=function(){
    console.log("You are successfully enrolled");
}
`)
const course_2=new course_1('javascript');
course_2.enroll();


// //primitive datatype
// let number=10;
// //PAss by value
// let number_2=number;
// number=15;

// console.log(number)
// console.log(number_2);
// //reference datatype
// let obj= {number: 10};
// //Pass by refernce
// let obj2=obj;

// obj.number=15;

// console.log(obj);
// console.log(obj2);


const course= {
    title: 'Javascript',
    enroll(){
        console.log('You are successfully enrolled');
    }
}

// const course=Object.assign({}.course)
// course_1.title='C++';

//for in loop 
// for (let key in course){
//     console.log(key.course[key]);
// }

const course_11= {};
for(let value of Object.keys(course)){
    console.log(key.course[key]);
}






