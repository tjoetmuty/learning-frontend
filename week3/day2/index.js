//1. object (cara mengakses object adalah object destructuring, dot notation, bracket notation)
// const person = {
//     name: 'muty',
//     age: 19,
// };

//2. object destructuring
//const {identifier} = expression
// const {name} = person //akses nama
// console.log(name)

// const person = {
//     name: 'muty',
//     hobbies: [
//         {
//             no: 1,
//             hobby: 'swimming'
//         },
//         {
//             no: 2,
//             hobby: 'nda tau'
//         },
//     ],
// };

// console.log(person.hobbies[1])

// let file = person.hobbies.filter(data => data.no===2) //filter untuk menyaring
// console.log(file)



//3.  dot notation , digunakan untuk mengakses
// const person = {
//     name: 'muty',
//     age: 19,
// };
// person.hobby = 'swimming';
// person.name ='razer';
// person['job'] = 'student'; // bracket notation, mengakses menggunakan key
// delete person.name

//loop thru an object
// for (const key in person){
//     console.log(`key : ${key} - value: ${person[key]}`);
// }
// console.log(person)


//object.keys
// const keys = Object.keys(person);
// console.log(keys);

// keys.forEach((key, index) => { //cara panjang  kek for diatas
//     console.log(`${key}: ${person[key]}`)
// })

// //Object.values
// const values = Object.values(person);
// console.log(values)


// //pass by value
// let num1 = 70;
// let num2 = num1;

// console.log(num1); //70
// console.log(num2); //70

// num1 = 40;

// console.log(num1); //40
// console.log(num2); //70

//pass by reference


//spread ooperator
const obj = [
    {
        id: 1,
        name: "muty"
    },
    {
        id: 2,
        name: "mutyy"
    },
]
const obj2 =[...obj]
console.log(...obj) //spread operator
console.log(obj)//output nya pake array

const name = {
    name: "putra",
    length: 2,
}
    const hobby ={
        ...name,
        hobby: "basket"
    }
    

    const movie = {
        ...hobby,
        movie: "avengers"
    }


console.log(movie)
