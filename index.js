const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let x = canvas.width / 2
let y = canvas.height - 55

let dx = 2
let dy = -2

const squareSize = 50

function drawSquare() {
  ctx.beginPath()
  ctx.fillStyle = "orange"
  ctx.fillRect(x, y, squareSize, squareSize)
  ctx.closePath()
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawSquare()

  if(x + dx > canvas.width - squareSize || x + dx < 0) {
    dx = -dx
  }
  if(y + dy > canvas.height - squareSize || y + dy < 0) {
    dy = -dy
  }
  x += dx
  y += dy
}

setInterval(draw, 10)