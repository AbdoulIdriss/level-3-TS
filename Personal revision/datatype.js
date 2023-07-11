//Learning data types 
//  let soulKvtana = [ 2, 3, "idriss", 'bakayoko' ];

// //1)include()
// katana = soulKvtana.includes("yo");
// console.log(katana);
//2) some()

const persons = [
    {
        name:"Idriss",
        age:20
    },
    {
        name:"Aliou",
        age:22
    },
    {
        name:"Abdoul",
        age:24
    },
    {
        name:"Ben",
        age:26
    },
];

const result = persons.some(isMoreThan21);

function isMoreThan21(person) {
    return person.age < 19; 
}
console.log(result);

//flatMap
// let array = [[1, [3, [5, 6 [9]]]]];
//  me = array.flat(Infinity);
//  console.log(me);