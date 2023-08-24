//Exercise-01 Area of square
let square={
    side:5,
    get area(){
        //this.side*this.side
        return this.side**2
    }
}
square.side=10
// square.area=5
console.log(square.area)

//Exercise 02
function StringConcat(separator, ...strings){
    let returnVal=''
    strings.forEach((string,i)=>{
        if(i == strings.length -1){
         returnVal += string + separator;
        }
        else{
            returnVal +=string +separator;
        }
    })
    return returnVal;
}

//Exercise 03
let [first,second,third, ...other]= [1,2,3,4,5,6,7,8]


//Matchstick Houses
function matchHouses(step){
    if(step){
        return 0;
    }
    else{
        return (step*6)-(step-1);
    }

}