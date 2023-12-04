//buat data array kelas kalian terdiri dari
//name
//age
//religion
//hobbies: [] dalam bentuk array (map)
//looping tampilkan dalam alert 

const students = [
    {
        name: "cut muty",
        age: 19,
        religion: "Islam",
        hobbies: ["renang", "coding azek"]
    },
    {
        name: "cut",
        age: 17,
        religion: "Islam",
        hobbies: ["lari", "lari"]
    },
    {
        name: "muty",
        age: 18,
        religion: "Islam",
        hobbies: ["depan laptop", "Bermain gitar"]
    }
];

students.map((values) =>{
    const {name, age, religion, hobbies} = values //destructuring
    const joinHobbies = hobbies.join(',')
    alert(`halo nama saya ${name} umur saya ${age} tahun, dan hobi saya adalah ${joinHobbies}`)
})

