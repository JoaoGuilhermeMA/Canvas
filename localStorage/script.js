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
});

document.location.onload;