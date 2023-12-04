//DOM

//1
const paragraph = document.querySelectorAll('p')

paragraph.forEach((item) => {
    console.log(item.innerText)
})

//2
const handleClick = () => {
    const inputText = document.getElementById('textName')
    console.log('hello + ')
}