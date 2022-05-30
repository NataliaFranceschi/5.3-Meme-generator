const texto = document.getElementById('meme-text');
const input = document.getElementsByTagName('input')[0];
const imagem = document.getElementById('meme-image');
const inputImagem = document.getElementsByTagName('input')[1];
const botaoFire = document.getElementById('fire');
const botaoWater = document.getElementById('water');
const botaoEarth = document.getElementById('earth');
const div = document.getElementById('meme-image-container');

function createText() {
  texto.innerHTML = input.value;
}

input.addEventListener('keyup', createText);

function aparecerImagem(event) {
  imagem.src = URL.createObjectURL(event.target.files[0]);
}

inputImagem.addEventListener('change', aparecerImagem);

function mudarBorda(event) {
  if (event.target.id === 'fire') {
    div.style.border = '3px solid rgb(255, 0, 0)';
}
  else if (event.target.id === 'water') {
    div.style.border = '5px solid rgb(0, 0, 255)';
}  else {
    div.style.border = '6px solid rgb(0, 128, 0)';
}
}

botaoFire.addEventListener('click', mudarBorda);
botaoWater.addEventListener('click', mudarBorda);
botaoEarth.addEventListener('click', mudarBorda);
