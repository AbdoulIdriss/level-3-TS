 let names = ['idriss', 'abdoul', 'ben', 'soul', 'tanjiro'];

// function capital() {


//     for(let i = 0; i < names.length; i++) {

//         let name = names[i];

//         let first = names[i].charAt(0)
//         // console.log(first);

//         let first2 = first.toUpperCase()

//         let first1 = first2 + name.slice(1)

//         console.log(first1);
//     }
// }
// capital(names);

// const result = names.map(name => {
//     let firstLetter = name[0];

//     let capital = firstLetter.toUpperCase();

//     let final = capital + name.slice(1)

//     console.log(final);
//     return name;
// })
// console.log(result)


const arrays = [
    {
        name: 'Idriss',
        level: 3,
        marks: 13
    },
    {
        name: 'Katana',
        level: 3,
        marks: 13
    },
        {
        name: 'Soul',
        level: 3,
        marks: 13
    },
    {
        name: 'Abdoul',
        level: 3,
        marks: 13
    },
    {
        name: 'Ben',
        level: 3,
        marks: 13
    },
    {
        name: 'Wahab',
        level: 3,
        marks: 13
    },
    {
        name: 'Kassim',
        level: 3,
        marks: 13
    },
    {
        name:'Okasan',
        level: 3,
        marks: 13
    },
    {
        name: 'Reverse',
        level: 3,
        marks: 13
    },
    {
        name: 'Couz',
        level: 3,
        marks: 13
    }
]

const filteredArray = arrays.filter((arrays) => {
    return arrays.name;
});
console.log(filteredArray);
