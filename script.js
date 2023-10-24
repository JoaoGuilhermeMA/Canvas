let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let frameIndex = 0;

const largura = 81;
const altura = 350;

const image = new Image();
image.src = "shadow-80x70.png";

image.onload = function () {
  ctx.drawImage(image, 0, 157, largura, altura, 0, 0, largura, altura);
};

/*document.addEventListener("keydown", function funcao(event) {
  console.log("tecla pressionada " + event.key);
});*/

/*
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function handleKeyPress(event) {
  switch (event.key) {
    case "1":
      changeBackgroundColor("red");
      break;
    case "2":
      changeBackgroundColor("green");
      break;
    case "3":
      changeBackgroundColor("blue");
      break;
    case "4":
      changeBackgroundColor("yellow");
      break;
    case "5":
      changeBackgroundColor("black");
      break;
    case "6":
      changeBackgroundColor("brown");
      break;
    case "7":
      changeBackgroundColor("gray");
      break;
    case "8":
      changeBackgroundColor("purple");
      break;
    case "9":
      changeBackgroundColor("pink");
      break;
    default:
      changeBackgroundColor("white"); // Cor padrão
  }
}
document.addEventListener("keydown", handleKeyPress);
*/
