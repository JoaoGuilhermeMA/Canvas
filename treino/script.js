let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// ctx.fillStyle = 'red'
// ctx.fillRect(0,0,100,100);
// ctx.lineWidth = 3;
// ctx.strokeStyle = 'blue';
// ctx.strokeRect(100,100, 100,100);
// ctx.moveTo(200, 200);
// ctx.lineTo(300, 300);

// ctx.beginPath();
// ctx.arc(250, 50, 40, 0, 2*Math.PI);
// ctx.fill();
// ctx.stroke();

// ctx.fillStyle = 'green';
// ctx.fillRect(50, 50, 25, 25);
// ctx.save();
// ctx.fillStyle = 'purple';
// ctx.fillRect(100, 50, 25, 25);
// ctx.save();
// ctx.fillStyle = 'blue';
// ctx.fillRect(150, 50, 25, 25);
// ctx.save();
// ctx.restore();


// ctx.drawImage(imagem, 0, 0, 300, 300);
// imagem.onload = function () {
//   ctx.drawImage(imagem, l1, a1, l1, a1 - 10, 300, 300, 100, 100);
//   ctx.drawImage(imagem, l1, a1, l1 + 50, a1 - 10, 400, 400, 100, 100);
//   ctx.drawImage(imagem, l1 * 2 + 50, a1, l1, a1 - 10, 500, 500, 100, 100);
//   ctx.drawImage(imagem, l1 * 2 * 2 - 360, a1, l1, a1 - 10, 600, 600, 100, 100);
// }

// let imagem = new Image();
// imagem.src = 'NicePng_sprite-sheet-png_2303116.png';
// let l1 = 437;
// let a1 = 611;
// let l = 437;
// let a = 563;
// let x = 0;
// let xx = 0;
// let interval = 200;
// function andarPersonagem() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   if (x < 4) {
//     andarParaBaixo();
//   } else
//     if (x < 8) {
//       andarParaDireita();
//     }

//   x = (x + 1) % 4;
//   xx = xx + 20;
//   setTimeout(andarPersonagem, interval);
// }

// function andarParaBaixo() {
//   if (x === 0) {
//     ctx.drawImage(imagem, 0, 0, l, a, 0, xx, 100, 100);
//   } else if (x === 1) {
//     ctx.drawImage(imagem, l, 0, l + 50, a, 0, xx, 100, 100);
//   } else if (x === 2) {
//     ctx.drawImage(imagem, l * 2 + 50, 0, l, a, 0, xx, 100, 100);
//   } else if (x === 3) {
//     ctx.drawImage(imagem, l * 2 * 2 - 360, 0, l, a, 0, xx, 100, 100);
//   }
// }
// imagem.onload = andarPersonagem;


let imagem = new Image();
imagem.src = 'NicePng_sprite-sheet-png_2303116.png';

let largura = 400
let altura = 400
let velocidade = 30
let escala = 1.05
let x = 20
let y = 100
let raio = 4

requestAnimationFrame(andarParaDireita());


function andarParaDireita() {
  context.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imagem, l1, a1, l1, a1 - 10, xx, 100, 100, 100);
    ctx.drawImage(imagem, l1, a1, l1 + 50, a1 - 10, xx, 100, 100, 100);
    ctx.drawImage(imagem, l1 * 2 + 50, a1, l1, a1 - 10, xx, 100, 100, 100);
    ctx.drawImage(imagem, l1 * 2 * 2 - 360, a1, l1, a1 - 10, xx, 100, 100, 100);
  requestAnimationFrame(andarParaDireita());
}


/*
drawImage(imagem, xOrigem, yOrigem, larguraOrigem,
alturaOrigem, xDestino, yDestino, larguraDestino,
alturaDestino): desenha parte da imagem.
 */