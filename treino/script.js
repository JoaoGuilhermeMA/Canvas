let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");

//parede esquerda
contexto.beginPath();
contexto.moveTo(50,260);
contexto.lineTo(50,500);
contexto.closePath();
contexto.stroke();  
//chao
contexto.beginPath();
contexto.moveTo(50,500);
contexto.lineTo(500,500);
contexto.closePath();
contexto.stroke(); 
//parede direita
contexto.beginPath();
contexto.moveTo(500,500);
contexto.lineTo(500,50);
contexto.closePath();
contexto.stroke();