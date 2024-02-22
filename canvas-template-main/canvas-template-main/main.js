// Canvas Template

// Canvas Setup
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Call draw function once all page resources have loaded
window.addEventListener("load", draw);

function draw() {
  drawDoor(60, 150, 20, "green");
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.strokeStyle = "red";
  ctx.stroke();
  // ctx.fillStyle = "green";
  // ctx.fillRect(50, 100, 200, 80);

  // Redraw
  requestAnimationFrame(draw);
}

function drawDoor(x, y, r, frameColor){
ctx.beginPath();
ctx.arc(x, y, r, 0, 2 * Math.PI, false)
 ctx.strokeStyle = frameColor;
 ctx.arc(x, y, radius, 0, 2 * Math.PI, false);


}

