const arr = [];
const body = document.createElement('div')
body.classList.add('t')
document.body.appendChild(body)
for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const element = document.createElement('div');
        arr.push(element)
    }
}


console.log(arr)
for (let index = 0; index < 16*16; index++) {
            body.appendChild(arr[index])
}


const n = document.querySelector('input')

arr.forEach(element => {
    element.addEventListener('mousemove',()=>{
        element.style.backgroundColor = n.value
    })
});