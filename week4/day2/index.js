//array itu type nya object
//function itu type nya object
//object itu type nya object
//undefined itu type nya undefined

//callback
// const name  = (name) => {
//     return 'hello' + name
// }

// const age = (age, callback) => {
//     return 'helo umur saya ' + age + 'dan nama saya ' + callback
// }

// console.log(age(20, name("yuhu"))) //helo umur saya20dan nama saya helloyuhu

//1. synchronus (eksekusi nya berurutan)
// function calculation (param1, param2, callback){
//     return callback(param1, param2)
// }

// function callbackDolar (param1,param2){
//     return '$' + param1 + param2
// }

// function callbackRupiah (param1,param2) {
//     return 'Rp.' +param1 + param2
// }

// console.log(callbackDolar)


//2. asynchronus (eksekusi nya tidak berurutan, sesuai waktu)
// const name = (name, callback) =>  {
//     console.log('nama saya adalah ' + name)

//     setTimeout(() => {
//         callback(name)
//     }, 3000)
// }

// const item = (name) =>{
//     console.log('okey ' + name)
// }

// name('muty ', item)


//3. promise(resolve, reject)
// const name = "cut"

// const examplePromise = new Promise ((resolve, reject) => {
//     if (name === "muty"){
//         resolve ('success')
//     }
//     else {
//         reject ('variabel name is not "muty"')
//     }
// })

// console.log (examplePromise)


//4. promise asynchronus
// const newPromise = new Promise ((resolve, reject) => {
//     if (Math.random() > 0.5){
//         resolve('Belajar JavaScript')
//     }
//     else{
//         reject(new Error ('Failed!'))
//     }
// })

// .then((result) => {
//     console.log('success')
// }) 
// .catch((err) => {
//     console.log('error')
// })
// .finally(() => {
//     console.log('oke')
// })


//5.Rest API (pake fetch)
//fetch(url, body)

// fetch ('https://jsonplaceholder.typicode.com/users/1')
// .then((res) => {
//     return res.json()
// })
// .then((res) => {
//     console.log(res)
// })

//-----------------------------------------------------------
//.then(response)
//.then(json)

// const generateId = () => {
//     return Math.floor(Math.random() * 10)
// }
// const setName = document.getElementById('name')

// fetch (`https://jsonplaceholder.typicode.com/users/` + generateId())
// .then((res) => {
//     return res.json()
// })
// .then((json) => {
//     console.log(json)
//     setName.innerHTML = json.name
// })


//6. math random
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);


//6.method ada get, post, put (mengubah), patch (mengubah), delete

