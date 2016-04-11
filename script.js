(function() {
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d'); 

// Resize canvas to fit browser size dynamically
window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // All canvas drawings go here
    drawStuff();    
}
resizeCanvas();
    
    
// to make the ball move    
var x = canvas.width/2;
var y = canvas.height-30;
// alter ball speed    
var dx = 2;
var dy = -2;    

// create the ball    
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    
}    

// update frames    
function drawStuff() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}
    
setInterval(drawStuff, 10);

})();





 
 
