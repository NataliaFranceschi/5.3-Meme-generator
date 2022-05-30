const texto = document.getElementById('meme-text');
const input = document.getElementsByTagName('input')[0];
const imagem = document.getElementById('meme-image');
const inputImagem = document.getElementsByTagName('input')[1];

function createText() {
  texto.innerHTML = input.value;
}

input.addEventListener('keyup', createText);

function loadFile(event) {
  imagem.src = URL.createObjectURL(event.target.files[0]);
}

inputImagem.addEventListener('change', loadFile);
