let form = document.getElementById('form');
let campo = document.getElementById('textoEnvia');
let lista = document.getElementById('lista');
let vetor = [];
let textos = [];

 form.addEventListener('submit', function(e) {
  let novoItem = document.createElement('li');
  novoItem.textContent = campo.value;
  lista.appendChild(novoItem);
  vetor.push(campo.value);
  localStorage.setItem('itens',JSON.stringify(vetor));
  textos = localStorage.getItem('itens')
  textos = JSON.parse(textos);
  campo.value = '';
  e.preventDefault();
  console.log(vetor);
});

function limparLista() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

function atualizarLista() {
  if (localStorage.getItem('itens')) {
    vetor = JSON.parse(localStorage.getItem('itens'));
    limparLista();
    for (let item of vetor) {
      let novoItem = document.createElement('li');
      novoItem.textContent = item;
      lista.appendChild(novoItem);
    }
  }
}

form.addEventListener('submit', function(e) {
  let novoItem = campo.value;
  vetor.push(novoItem);
  localStorage.setItem('itens', JSON.stringify(vetor));
  limparLista(); 
  atualizarLista(); 
  campo.value = '';
  e.preventDefault();
  console.log(vetor);
});

addEventListener('load', atualizarLista);

atualizarLista();
