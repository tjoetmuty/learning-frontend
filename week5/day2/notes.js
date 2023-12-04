//browser API
navigator.geolocation.getCurrentPosition((position) => { console.log(position);
});

//2. canvas API
//getContext() : digunakan untuk mendapatkan konteks dari canvas
//drawImage(): digunakan untuk membuat gambar di dalam canvas


//3. web workers API
//worker(): digunakan untuk 


//5. DOM API : digunakan untuk mnegubah elemen html / mengakses elemen html
element.addEventListener("click", () => {
    console.log('hello world')
})

//6.web storage api
const storage = localStorage;

storage.setItem = ("name", "muty");
storage.getItem = ("muty");

//7.browser events
//on+event = event handler
//addEventListener

const button = document.querySelector('button');
const clickHandler = () =>{
    alert('hello')
};
button.addEventListener('click', clickHandler);
button.removeEventListener('click', clickHandler);