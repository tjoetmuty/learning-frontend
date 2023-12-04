//tugas 2
//buat input berat badan
// contoh: berat 54, buat looping  
// jangan sampai berat nya kurang dari 30
// dan sisa nya tampilkan
//prompt nya 1 kali ja
//kalo beratnya dibawah 30 tampilkan "berat tidak ideal"
// contoh output : 30-54 (sampe batas berat badan yg diinput)

let beratBadan = prompt('input berat badan')

if (beratBadan <= 30){
    console.log('berat tidak ideal')
} 
else{
    for(let i=30; i <= beratBadan; i++){
        console.log(i)
    }
}


// let beratBadan = parseInt(prompt('input berat badan'))

// if(beratBadan >= 30){
//     for(i = 30; i >= beratBadan ; i++ ){
//         console.log(beratBadan)
//     }
// }else{
//     console.log("berat tidak ideal")
// }

// let beratBadan = parseInt(prompt('input berat badan'))

// if (beratBadan <= 30){
//     for(let i = 1; i < beratBadan; i++){
//         console.log(i)
//     }
//     console.log(beratBadan)
//     console.log('berat tidak ideal')
// } else{
//     for(let i=1; i < beratBadan; i++)
// }



