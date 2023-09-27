const body = document.createElement('div')
const container = document.querySelector('.test')
body.classList.add('t')
container.appendChild(body)
let mouseDown = false
const colorpick = document.querySelector('#cl')
const colormix = document.querySelector('.mix')
const color = document.querySelector('.color')
const array = document.querySelectorAll('.v')
const slider = document.querySelector('#slider')
let defualt_size = 16;
let onload = true;
const p = document.querySelector('.n-size')
const clear_buttn = document.querySelector('.clear')
let defualt_mode = color;



if (onload) {
    create_grid(defualt_size)
    p.innerHTML = '16*16 squares'
    onload = false;
}

slider.addEventListener('input', () => {
    p.innerHTML = `${slider.value}*${slider.value} squares`;
    defualt_size = slider.value;
    console.log(slider.v)
    clear();
    create_grid(slider.value)
})

function clear() {
    body.innerHTML = ""
}

color.addEventListener('click', () => { defualt_mode = color })
colormix.addEventListener('click', () => { defualt_mode = colormix })



function changeColor(e) {
    if (mouseDown && defualt_mode == color) {
        e.target.style.backgroundColor = colorpick.value;
    }
    else if (mouseDown && defualt_mode == colormix) {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    }
}


function create_grid(size) {
    for (let index = 0; index < size * size; index++) {
        console.log(slider.value)
        let width = Number(body.style.width) / size;
        const element = document.createElement('div');
        element.classList.add('v')
        element.addEventListener('mousedown', () => {
            mouseDown = true;
            if (defualt_mode === color) {
                element.style.backgroundColor = colorpick.value;
            }
            else {
                const randomR = Math.floor(Math.random() * 256)
                const randomG = Math.floor(Math.random() * 256)
                const randomB = Math.floor(Math.random() * 256)
                element.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
            }
        })
        element.addEventListener('mouseup', () => { mouseDown = false })
        element.addEventListener('mouseover', changeColor)
        element.currentTime = 0;
        element.style.width = `${(450 / size)}px`;
        clear_buttn.addEventListener('click', () => {
            element.style.backgroundColor = 'white'
        })
        body.appendChild(element)
    }
}


