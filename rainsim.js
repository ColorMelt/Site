var canvas = document.getElementById('rainsim');
var ctx = canvas.getContext('2d');
var raindrops = [];
var rainDrop = function(x,y, radius)
{
  this.centerX = x;
  this.centerY = y;
  this.radius = radius;
  this.draw = function(ctx)
   {
     ctx.beginPath();
     ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
     ctx.fillStyle = 'blue';
     ctx.fill();
     ctx.lineWidth = 1;
     ctx.strokeStyle = '#003300';
     ctx.stroke();
   };
   this.update = function(ctx, width, height)
   {
     this.centerX += 1;
     this.centerX %= width;
     this.centerY += 3;
     this.centerY %= height;
     this.draw(ctx);
   };
};
for(var i = 0; i < 10; i++)
{
  raindrops[i] = new rainDrop(Math.random()*canvas.width, Math.random()*canvas.height, 2);
}

render = function()
{
  console.log("render loop is running");
	ctx.clearRect(0,0,canvas.width,canvas.height);
  raindrops.forEach(function(i) { i.update(ctx,canvas.width,canvas.height);})
  requestAnimationFrame(render);
}
function main()
{
  render();
}
function init()
{
  main();
}
