let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let imagem = new Image();
imagem.src = '3840x2400-AjFP5.png';

let numSprite = 0;
let posIniX = 0;
let Limagem = 0;
let larguraSprite = imagem.width / 4;
let alturaSprite = imagem.height / 4;
let posIniY = 0;
let posX = 0;
let posY = 0;
let velocidade = 2;
let cima = false, baixo = false, direita = false, esquerda = false;
let posFrame = 0;
let qntPos = 4;

const desenha = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.drawImage(imagem, posIniX, posIniY, larguraSprite, alturaSprite, posX, posY, 50, 50)
}


window.addEventListener('keydown', (event) => {
    if (event.key == "ArrowLeft") {
        esquerda = true;
    } else if (event.key == "ArrowRight") {
        direita = true;
    } else if (event.key == "ArrowUp") {
        cima = true;
    } else if (event.key == "ArrowDown") {
        baixo = true;
    }
})

window.addEventListener('keyup', (event) => {
    if (event.key == "ArrowLeft") {
        esquerda = false;
    } else if (event.key == "ArrowRight") {
        direita = false;
    } else if (event.key == "ArrowUp") {
        cima = false;
    } else if (event.key == "ArrowDown") {
        baixo = false;
    }
})

const game = () => {
    if (cima) {
        posY -= velocidade;
    }
    if (baixo) {
        numSprite +=1;
        if (numSprite > 3) {
            numSprite=0;
        }
        posIniX = larguraSprite * numSprite; 
        posY += velocidade;
    }
    if (direita) {
        posX += velocidade;
    }
    if (esquerda) {
        posX -= velocidade;
    }
    desenha();
}

setInterval(game, 90);


/*
drawImage(imagem, xOrigem, yOrigem, larguraOrigem,
alturaOrigem, xDestino, yDestino, larguraDestino,
alturaDestino): desenha parte da imagem.
 */
