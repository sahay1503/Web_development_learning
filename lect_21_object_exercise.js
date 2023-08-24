//exercise using objects
//itemName
//price
//discount
//itemCode

const product={
    itemname :'flower',
    price : 50,
    discount:20,
    itemCode: 'F40'
}

//factory function

function createProduct(name,price ,discount,itemCode){
    return{
        itemname :name,
        price : price,
        discount:discount,
        itemCode:itemCode
    }
}

const football=createProduct('football',400,10,'F30');

function Product(name,price,discount,itemCode){
    this.itemName= name;
    this.price=price;
    this.discount=discount;
    this.itemCode=itemCode;
    this.discountValue=function(){
        return price*discount/100;
    }
}

const mobile= new Product('OnePlus NOrd',30000,5,'OP20')

