// //Declaring a class
// class Product{
//     constructor(itemName,price,discount,itemCode){
//         this.itemName= name;
//         this.price=price;
//         this.discount=discount;
//         this.itemCode=itemCode;
//     }
// }

// let pencil =new Product('Pencil',20,2,'P10');

//Object using expression
// const Product1 = class Product{
//     constructor(itemName,price,discount,itemCode){
//         this.itemName= name;
//         this.price=price;
//         this.discount=discount;
//         this.itemCode=itemCode;
//     }
// }
// let chair= new Product1('chair',499,15,'C18')

// //getter and setter Methods
// const Product1 = class Product{
//     constructor(itemName,price,discount,itemCode){
//         this.itemName= name;
//         this.price=price;
//         this.discount=discount;
//         this.itemCode=itemCode;
//     }
//     get getdiscountValue(){
//         return this.discount
//     }
//     set setdiscountValue(value){
//         return this.discount
//     }
//     //method
//     discountValue(){
//         return this.discount=this.price/100
//     }
// }


//Extending Classes

class Product{
    constructor(itemName){
        console.log('Passed by Furniture'+itemName);
        this.itemName=itemName;

    }
    getItemName(){
        return this.itemName+"is a product";
    }
}

class Furniture extends Product{
    constructor(itemName){
        super(itemName)
    }
    getItemName(){
        return this.itemName+"is a Furniture"
    }
}
let pencil =new Product('Pencil');

let chair= new Furniture('chair');


//super Function

