//Bringing in the html buttons and canvas by ID 
//And adding the html5 canvas content
const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');

//Global variables for the JS
const ctx = canvas.getContext('2d');
let size = 10
let isPressed = false
//Defualt black
colorEl.value = 'black'
let color = colorEl.value
let x
let y

// This listens for when the user holds the mouse down
canvas.addEventListener('mousedown', (e) => {
    isPressed = true
    // This gives the position of where the mouse is.
    x = e.offsetX
    y = e.offsetY
})
// This is for when the mouse is then released
document.addEventListener('mouseup', (e) => {
    isPressed = false

    x = undefined
    y = undefined
})
//This gives the positioning and allows the movement
canvas.addEventListener('mousemove', (e) => {
    if(isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        // This allows it to do both circles and lines
        drawCircle(x2, y2)
        drawLine(x, y, x2, y2)

        x = x2
        y = y2
    }
})
//Taking in the x and y axis
//We begin a path
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    //Setting a color on the circle
    ctx.fillStyle = color
    ctx.fill()
}
//This fulction allows lines to be drawn and it give a
//point a to point b
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    //This gives the line a border and gives the color same as circle
    ctx.strokeStyle = color
    //Size 20 to begin, if this wasn't * 2 you would have a 
    //mix of lines and circles
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    //Sets inner text to what size is.
    sizeEL.innerText = size
}
//This retreaves the size that the user selects and creates size change.
increaseBtn.addEventListener('click', () => {
    size += 5
    //Makes size no larger then 50
    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5
    //if size is less then 5 make it 5
    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})
// Sets the color variable to the color value
colorEl.addEventListener('change', (e) => color = e.target.value)
//This uses method clearRect to clear canvas
clearEl.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))