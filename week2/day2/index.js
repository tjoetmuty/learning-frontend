// const numberArray = [1, 2, 3]; //array angka
const stringArray = ['muty', 'cut']; //array string
// console.log(stringArray[0])
// console.log(stringArray.length)// cari panjang

stringArray.push('mutyy')//menambahkan data terakhir array
stringArray.pop(); //menghapus nilai terakhir array

stringArray.unshift('halo'); //menambahkan nilai didepan
// stringArray.shift('halo'); //menghapus nilai awal
// stringArray.shift(); //menghapus nilai awal

// stringArray[3] = 'helo'; //menambah data di indeks 3
// stringArray[2] = 'hai'; //menambah data di indeks 2
// stringArray[0] = 'cuttt' ;//menambah data di indeks 0
console.log(stringArray)
// console.table(stringArray) //akses array menggunakan table

//array dalam array
// const data = [
//     [1,2,3, [11, 21, 13]],
//     [1,3,4 ,[12, 5, 9]],
//     [4,5,10 ,[6,7,8]]
// ];

// // data[0][3][2] = 99; //mengganti angka 13 dengan 99
// data[2][3].push(5); //menambahkan angka 5 di akhir (habis 8)
// console.log(data)

//arrayIteration
//1. forEach() digunakan dalam array
// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach((item) => { //tanpa arrow function aslinya seperti numbers.forEach(function(item){blablabla})
//     sum += item;
// })
// console.log(sum); //output : 125

//2.map
// let sum= 0;
// const numbers = [3, 4, 5];
// numbers.map((item) => {
//     sum += item;
// })
// console.log(sum); //output 12


//practice
// const points = [1, 2, 3, 4]
// const arr = []

// points.map((item) => {
//     // console.log(item)
//     if (item == 1){
//         arr.push(10)
//     } 
//     else if (item == 2){
//         arr.push(15)
//     }
//     else if (item == 3){
//         arr.push(20)
//     }
//     else{
//         arr.push(25)
//     }
// })
// console.log(arr) //output : [10, 15, 20, 25]

