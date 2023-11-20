const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let x = canvas.width / 2
let y = canvas.height - 55

let dx = 2
let dy = -2

const squareSize = 50
let squareX = (canvas.width - squareSize) / 2
let squareY = (canvas.height - squareSize) / 2
let squareSpeed = 3


let rightPressed = false
let leftPressed = false
let upPressed = false
let downPressed = false

function drawSquare() {
  ctx.beginPath()
  ctx.fillStyle = "orange"
  ctx.fillRect(squareX, squareY, squareSize, squareSize)
  ctx.closePath()
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  drawSquare()

  if (rightPressed) {
    squareX = Math.min(squareX + squareSpeed, canvas.width - squareSize)
  } else if (leftPressed) {
    squareX = Math.max(squareX - squareSpeed, 0)
  } else if (downPressed) {
    squareY = Math.min(squareY + squareSpeed, canvas.height - squareSize)
  } else if (upPressed) {
    squareY = Math.max(squareY - squareSpeed, 0)
  }

}

function keyDownHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = true
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = true
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    upPressed = true
  } else if (e.key === "Down" || e.key === "ArrowDown") {
    downPressed = true
  }
}

function keyUpHandler(e) {
  if (e.key === "Right" || e.key === "ArrowRight") {
    rightPressed = false
  } else if (e.key === "Left" || e.key === "ArrowLeft") {
    leftPressed = false
  } else if (e.key === "Up" || e.key === "ArrowUp") {
    upPressed = false
  } else if (e.key === "Down" || e.key === "ArrowDown") {
    downPressed = false
  }
}

document.addEventListener("keydown", keyDownHandler, false)
document.addEventListener("keyup", keyUpHandler, false)

setInterval(draw, 10)
