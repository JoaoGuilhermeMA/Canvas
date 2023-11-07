let form = document.getElementById('form');
let campo = document.getElementById('textoEnvia');
let lista = document.getElementById('lista');
let vetor = [];

function limparLista() {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
}

function atualizarLista() {
  if (localStorage.getItem('itens')) {
    vetor = JSON.parse(localStorage.getItem('itens'));
    limparLista();
    for (let i = 0; i < vetor.length; i++) {
      adicionarItem(vetor[i], i);
    }
  }
}

function adicionarItem(texto, index) {
  let novoItem = document.createElement('li');
  novoItem.textContent = texto;

  let editarButton = document.createElement('button');
  editarButton.textContent = "Editar";
  editarButton.addEventListener('click', function () {
    editarItem(index);
  });


  let excluirButton = document.createElement('button');
  excluirButton.textContent = "Excluir";
  excluirButton.addEventListener('click', function () {
    excluirItem(index);
  });

  novoItem.appendChild(editarButton);
  novoItem.appendChild(excluirButton);
  lista.appendChild(novoItem);
}

function editarItem(index) {
  let novoTexto = prompt("Editar o item:", vetor[index]);
  if (novoTexto !== null) {
    vetor[index] = novoTexto;
    localStorage.setItem('itens', JSON.stringify(vetor));
    atualizarLista();
  }
}

function excluirItem(index) {
  vetor.splice(index, 1);
  localStorage.setItem('itens', JSON.stringify(vetor));
  atualizarLista();
}

form.addEventListener('submit', function(e) {
  let novoItem = campo.value;
  vetor.push(novoItem);
  localStorage.setItem('itens', JSON.stringify(vetor));
  limparLista();
  atualizarLista();
  campo.value = '';
  e.preventDefault();
});

window.addEventListener('load', atualizarLista);

atualizarLista();
