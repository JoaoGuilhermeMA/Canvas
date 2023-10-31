export class Sprite {
    constructor(ctx, imagem, qntdSprite) {
        this.ctx = ctx;
        this.imagem = imagem;
        this.qntdSprite = qntdSprite;
        this.larguraSprite = imagem.width / qntdSprite;
        this.alturaSprite = imagem.height / qntdSprite;
        this.posIniX=0;
        this.posIniY=0;
        this.posX=0;
        this.posY=0;
        this.numSprite=0;
        
        
        this.imagem.onload = () => {
            this.baixo(); 
        };
    }

    desenhar() {
        this.ctx.drawImage(this.imagem, posIniX, posIniY, larguraSprite, alturaSprite, posX, posY, 50, 50);
    }

    baixo() {
        this.posIniX = this.larguraSprite*this.numSprite;
        this.numSprite +=1;
        this.ctx.drawImage(this.imagem, this.posIniX, this.posIniY, this.larguraSprite, this.alturaSprite, 0, 0, 50, 50);
        this.posIniX = this.larguraSprite*this.numSprite;
        this.numSprite +=1;
        this.ctx.drawImage(this.imagem, this.posIniX, this.posIniY, this.larguraSprite, this.alturaSprite, 0, 0, 50, 50);
        this.posIniX = this.larguraSprite*this.numSprite;
        this.numSprite +=1;
        this.ctx.drawImage(this.imagem, this.posIniX, this.posIniY, this.larguraSprite, this.alturaSprite, 0, 0, 50, 50);
        this.posIniX = this.larguraSprite*this.numSprite;
        this.numSprite +=1;
        this.ctx.drawImage(this.imagem, this.posIniX, this.posIniY, this.larguraSprite, this.alturaSprite, 0, 0, 50, 50);

        console.log("to aqui");
    }
}

// let numSprite = 0;
// let posIniX = 0;
// let larguraSprite = imagem.width / 4;
// let alturaSprite = imagem.height / 4;
// let posIniY = 0;
// let posX = 0;
// let posY = 0;
// let velocidade = 2;
// let cima = false, baixo = false, direita = false, esquerda = false;