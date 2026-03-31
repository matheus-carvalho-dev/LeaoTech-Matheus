const imcText = document.querySelector("#imc");
const mediaText = document.querySelector("#media");
const valorFinalText = document.querySelector("#valorfinal");

let altura = prompt("Digite sua altura");
let peso = prompt("Digite seu peso");
let imc = Number(+peso / (+altura * +altura));
let classificacao;
if (imc < 18.5) {
  classificacao = "abaixo do peso";
} else if (imc < 25) {
  classificacao = "com peso normal";
} else if (imc < 30) {
  classificacao = "com sobrepeso";
} else if (30 < imc) {
  classificacao = "obeso";
}
imcText.innerText = ` Seu IMC é ${Math.round(imc)}, você está ${classificacao}`;

let nota1 = prompt("Digite sua primeira nota");
let nota2 = prompt("Digite sua segunda nota");
let nota3 = prompt("Digite sua terceira nota");
let media = Number((+nota1 + +nota2 + +nota3) / 3);
let situacao
if ( media < 4) {
    situacao = "reprovado"
}
else if (media < 7) {
    situacao = "recuperação"
}
else if (7 < media) {
    situacao = "aprovado"
}
mediaText.innerText = `Sua média é ${media}\n sua situação é: ${situacao}`;

let usuario = prompt("Digite seu nível de usuário");
let preco = prompt("Digite o preço do produto");
let desconto;
let preçoFinal
if ((usuario == "gerente")) {
  desconto = prompt("Digite o desconto do produto(máximo de 50%)");
  if (+desconto > 50) {
    preçoFinal = +preco - preco * (+desconto / 100);
    valorFinalText.innerText =
      "Seu desconto máximo é de 50%, faça o processo novamente";
  } else {
    preçoFinal = +preco - preco * (+desconto / 100);
    valorFinalText.innerText = `O preço final é ${preçoFinal}, seu valor original era ${preco}, seu desconto foi de ${desconto}%`;
  }
} else if ((usuario == "vendedor")) {
  desconto = prompt("Digite o desconto do produto(máximo de 30%)");
  if (+desconto > 30) {
    preçoFinal = +preco - preco * (+desconto / 100);
    valorFinalText.innerText =
      "Seu desconto máximo é de 30%, faça o processo novamente";
  } else {
    preçoFinal = +preco - preco * (+desconto / 100);
    valorFinalText.innerText = `O preço final é ${preçoFinal}, seu valor original era ${preco}, seu desconto foi de ${desconto}%`;
  }
} else {
  valorFinalText.innerText =
    "Nível de usuário inválido, refaça o processo escolhendo entre gerente ou vendedor";
}
