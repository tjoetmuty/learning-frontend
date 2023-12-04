// 1
// Buat Mapping Data Buah-buahan
// minimal 5 buah
// Dalam bentuk array
// terserah mau pake for, foreach, map, dll

//pake forEach
// const fruits = ["jeruk", "melon", "lemon", "semangka", "anggur"];

// fruits.forEach((item) => {
//   console.log(item)
// });

//pake map
// const fruits = ["jeruk", "melon", "lemon", "semangka", "anggur"];

// fruits.map((item) => { 
//     console.log(item)
// });


// 2
// Tambahkan
// Buat menjadi Array Baru, dan tambahkan "Buah 1 :"
// Dalam Bentk Array
//Output
// ["Buah 1: Apel", "Buah 2: Mangga"...]

const fruits = ["jeruk", "melon", "lemon", "semangka", "anggur"];
const arrayFruits = [];

fruits.forEach((item) => { //mau pake forEach atau map output nya sama saja
    if (item == 'jeruk'){
        arrayFruits.push('buah 1 : jeruk')
    } 
    else if (item == 'melon'){
        arrayFruits.push('buah 2 : melon')
    }
    else if (item == 'lemon'){
        arrayFruits.push('buah 3 : lemon')
    }
    else if (item == 'semangka'){
        arrayFruits.push('buah 3 : semangka')
    }
    else{
        arrayFruits.push('buah : anggur')
    }
})
console.log(arrayFruits)


// 3
// Buah agar "Ubah huruf terakhir buah menjadi huruf besar"
// satu satu
// [ApeL]
// [AngguR]
// [MarkisA]


