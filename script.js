(function() {
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// Resize canvas to fit browser size dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // All canvas drawings go here
    draw();
}
resizeCanvas();

// to make the ball move
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
// ball stats
var dx = 2;
var dy = -2;
//  paddle var farm
var paddleHeight = 15;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
//  keyboard controls var farm
var rightPressed = false;
var leftPressed = false;



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// if key is pressed down, run the function
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode ==37) {
        leftPressed = true;
    }
}

// if key is not pressed, set to false and stand by
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

// create the ball
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// create the paddle
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "0095DD";
    ctx.fill();
    ctx.closePath();
}

// update frames
function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
}

// set wall boundaries and ball bounce
    // top and bottom
if(y +dy > canvas.height-ballRadius || y + dy < ballRadius) {
    dy = -dy;
}

if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);

})();
