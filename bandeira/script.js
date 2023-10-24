var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var branco = "#FFFFFF";
var vermelho = "#FF0000";

ctx.fillStyle = branco;
ctx.fillRect(0, 0, canvas.width, canvas.height / 2);
ctx.fillStyle = vermelho;
ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);