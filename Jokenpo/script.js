const buttons = document.querySelectorAll("button");
const campoResultado = document.querySelector('[data-escolhas="resultado"]')
const handleClick = function (event) {
  const handValue = +event.target.value;
  const randomHand = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
  var botHand = randomHand;
  let resultado;
  if (botHand == handValue) {
    resultado = 'empate'
    campoResultado.classList.add(resultado)
    console.log(resultado);
  } else if(botHand == 1 && handValue == 3){
    resultado = 'perdeu'
    campoResultado.classList.add(resultado)
    console.log(resultado)
  }else if(botHand == 3 && handValue == 1){
    resultado = 'ganhou'
    campoResultado.classList.add(resultado)
    console.log(resultado)
  }else if ( botHand < handValue) {
    resultado = 'ganhou'
    campoResultado.classList.add(resultado)
    console.log(resultado);
  } else if (botHand > handValue) {
    resultado = 'perdeu'
    campoResultado.classList.add(resultado)
    console.log(resultado);
  }
  console.log(botHand);
  console.log(handValue);
};
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});
