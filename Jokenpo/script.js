const buttons = document.querySelectorAll("button");
const campoResultado = document.querySelector('[data-escolhas="resultado"]');
const imagens = document.querySelectorAll("img");
const handleClick = function (event) {
  const imgPlayer = document.querySelector('[data-escolhas="imgPlayer"]');
  const imgBot = document.querySelector('[data-escolhas="imgBot"]');
  const imgArray = Array.from(imagens);
  const handValue = +event.target.value;
  const randomHand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  var botHand = randomHand;
  let resultado;
  campoResultado.classList.remove(...campoResultado.classList);
  if (botHand == handValue) {
    resultado = "empate";
    console.log(resultado);
  } else if (botHand == 1 && handValue == 3) {
    resultado = "perdeu";
    console.log(resultado);
  } else if (botHand == 3 && handValue == 1) {
    resultado = "ganhou";
    console.log(resultado);
  } else if (botHand < handValue) {
    resultado = "ganhou";
    console.log(resultado);
  } else if (botHand > handValue) {
    resultado = "perdeu";
    console.log(resultado);
  }
  imgPlayer.src = imagens[handValue - 1].src;
  imgBot.src = imagens[botHand - 1].src;
  campoResultado.classList.add(resultado);
  campoResultado.innerText = resultado

  console.log(botHand);
  console.log(handValue);
};
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
