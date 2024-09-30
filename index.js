const c = document.getElementById("mio");
const ctx = c.getContext("2d");
ctx.fillStyle = "lavender";
ctx.fillRect(20, 20, 75, 50);

//Turn transparency on
ctx.globalAlpha = 0.2;
ctx.fillStyle = "pink"; 
ctx.fillRect(50, 50, 75, 50); 
ctx.fillStyle = "purple"; 
ctx.fillRect(70, 80, 75, 50);