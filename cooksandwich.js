let bread1=prompt("Which bread would you like to have:-");
let veggies1=prompt("What are your favourite veggies");
let sauce1=prompt("Which sauce would you like to have:-");

function makeSandwich(bread,veggies,sauce){
    let sandwich=bread+"bread"+veggies+"veggies"+sauce+"sandwich";
    return sandwich;
}
let vegsandwich=makeSandwich(bread1,veggies1,sauce1);
