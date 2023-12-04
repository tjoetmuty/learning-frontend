// function hello(name){
//     console.log('hello' + name)
// }

// hello('muty') //argumen


// const helloYuhu = function(){
//     console.log('yuhuuu')
// }

// helloYuhu()



// function mine(age) {
//     console.log('muty is' + ' ' + age);
// }
// mine('18')




// const sum = (num1, num2) => num1 + num2
// console.log(sum(3,3))



// const sum = (num1, num2) => {
//     const result = num1 + num2 === 5 //truthy false
//     if (result) return "benar"
//     return "salah" 
// }
// console.log(sum(2,3))

// const fullName = "Tjoet Muty Ahmad"
// const lastIndex =fullName.length - 1

// console.log(lastIndex)



const jumlahBarang = Number(prompt('masukkan jumlah barang'))

const store = (jumlah) =>{
    let totalBiaya = 0
    for(let i = 0; i < jumlah; i++){
        const barang = Number(prompt('isi harga barang anda!!')) 
        totalBiaya += barang
    }
    const tax = ()
}