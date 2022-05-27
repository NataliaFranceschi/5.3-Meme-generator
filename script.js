const texto = document.getElementById('meme-text');
const input = document.getElementsByTagName('input')[0];

function createText() {
  texto.innerHTML = input.value;
}

input.addEventListener('keyup', createText);
