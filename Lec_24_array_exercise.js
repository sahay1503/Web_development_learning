const characters =[
    {
        name:'Tarak Mehta',
        height:'172',
        mass: '77',
        eye_color: 'brown',
        gender:'male'
    },
    {
        name:'Jethalal',
        height:'165',
        mass: '81',
        eye_color: 'black',
        gender:'male'
    },
    {
        name:'Babita Ji',
        height:'178',
        mass: '67',
        eye_color: 'grey',
        gender:'female'
    },
    {
        name:'Krishnan Iyer',
        height:'168',
        mass: '174',
        eye_color: 'black',
        gender:'male'
    },
];

//Task1: Get an array of all names
const names=characters.map(ch =>ch.name)
console.log(names)

//Task2: Get an array of objects with
//just name and height properties
const Nameandheight=characters.map(ch =>{
    return{
        name:ch.name,
        height:ch.height
    }
})
console.log(Nameandheight);

//Task3: Get the total height of the all characters
const totheight=characters.reduce((prevheight,character) =>{
    return prevheight+Number(character.height);
});



//Task4: Get characters with mass greater than 100
const greaterthanmass =characters.filter((character) =>{
    return character.mass >100
});
console.log(greaterthanmass);

//Task5: Get all male characters
const allmale =characters.filter((character) =>{
    return character.gender == 'male'
});
console.log(allmale);

//Task6: sort by gender
const sortgender =characters.sort((character1,character2) =>{
    if(character1.gender<character2.gender){
        return -1;
    }
    if(character1.gender>character2.gender){
        return 1;
    }
    return 0
})
console.log(sortgender);


//task7: sort by name
const sortName =characters.sort((character1,character2) =>{
    if(character1.name<character2.name){
        return -1;
    }
    if(character1.name>character2.name){
        return 1;
    }
    return 0
})
console.log(sortname);
//task8: Does every charcter have mass more than 40?
console.log(characters.every((character) =>character.mass >40));

//task 9: Does every charcter has blue eyes?
console.log(characters.every((character) =>character.eye_color =='blue'));

//Task11: is there atleast one male character?
console.log(characters.some((character) =>character.gender))

//Task12: Is there atleast one charater taller than 200?
console.log(characters.some((character) =>character.height >200))



