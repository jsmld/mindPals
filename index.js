const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let x = canvas.width / 2
let y = canvas.height - 55

let dx = 2
let dy = -2

function drawSquare() {
  ctx.beginPath()
  ctx.fillStyle = "orange"
  ctx.fillRect(x,y,50,50)
  ctx.closePath()
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawSquare()
  x += dx
  y += dy
}

setInterval(draw, 10)