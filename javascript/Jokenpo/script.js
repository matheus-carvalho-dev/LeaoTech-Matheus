const buttons = document.querySelectorAll("button");
const campoResultado = document.querySelector('[data-escolhas="resultado"]');
const playerChoose = document.querySelector('[data-escolhas="playerChoose"]');
const botChoose = document.querySelector('[data-escolhas="botChoose"]');
const containerResultado = document.querySelector('[data-escolhas=""]');
const imgPlayer = document.querySelector('[data-escolhas="imgPlayer"]');
const imgBot = document.querySelector('[data-escolhas="imgBot"]');
const playerWins = document.querySelector('[data-scoreboard="playerWins"]');
const botWins = document.querySelector('[data-scoreboard="botWins"]');
const imagens = document.querySelectorAll("img");
let botWin = 0;
let playerWin = 0;
const handleClick = function (event) {
  const imgArray = Array.from(imagens);
  const handValue = +event.target.value;
  const randomHand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  const botHand = randomHand;
  let resultado;
  containerResultado.classList.add("ativo");
  campoResultado.classList.remove(...campoResultado.classList);
  if (botHand == handValue) {
    resultado = "empate";
    console.log(resultado);
  } else if (botHand == 1 && handValue == 3) {
    resultado = "perdeu";
    botWin = botWin + 1;
    botWins.innerText = botWin;
    console.log(resultado);
  } else if (botHand == 3 && handValue == 1) {
    resultado = "ganhou";
    playerWin = playerWin + 1;
    playerWins.innerText = playerWin;
    console.log(resultado);
  } else if (botHand < handValue) {
    resultado = "ganhou";
    playerWin = playerWin + 1;
    playerWins.innerText = playerWin;
    console.log(resultado);
  } else if (botHand > handValue) {
    resultado = "perdeu";
    botWin = botWin + 1;
    botWins.innerText = botWin;
    console.log(resultado);
  }
  imgPlayer.src = imagens[handValue - 1].src;
  imgBot.src = imagens[botHand - 1].src;
  campoResultado.classList.add(resultado);
  campoResultado.innerText = resultado;
  botChoose.innerText = `Bot escolheu ${imagens[botHand - 1].alt}`;
  playerChoose.innerText = `Você escolheu ${imagens[handValue - 1].alt}`;

  console.log(botHand);
  console.log(handValue);
};
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
