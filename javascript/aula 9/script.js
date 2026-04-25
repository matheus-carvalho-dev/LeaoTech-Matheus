const inputId = document.querySelector("#id");
const botao = document.querySelector("#botao");
const img = document.querySelector("img");
const titulo = document.querySelector("titulo");
const descricao = document.querySelector("descricao");
const preco = document.querySelector("preco");

function handleClick() {
  const id = inputId.value;
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((resp) => {
      console.log(resp);
      return resp.json();
    })
    .then(
      (dados) => {console.log(dados.image),
      img.setAttribute("src", dados.image)}
    );
}
botao.addEventListener("click", handleClick);
