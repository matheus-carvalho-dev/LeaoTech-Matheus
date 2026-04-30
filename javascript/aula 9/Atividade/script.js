const body = document.querySelector("body");
const inputId = document.querySelector("#id");
const botao = document.querySelector("#botao");
const img = document.querySelector("img");
const titulo = document.querySelector("#titulo");
const descricao = document.querySelector("#descricao");
const preco = document.querySelector("#preco");
const produtos = [];
async function carregarProdutos() {
  let produto = {};
  try {
    for (let i = 1; i <= 20; i++) {
      produto = await fetch(`https://fakestoreapi.com/products/${i}`).then(
        (resp) => {
          console.log(resp);
          return resp.json();
        },
      );
      produtos.push(produto);
    }
  } catch (error) {
    console.log(error);
  }
}

// function handleClick() {
//   titulo.innerHTML = "";
//   descricao.innerHTML = "";
//   preco.innerHTML = "";
//   const id = inputId.value;
//   const dados = fetch(`https://fakestoreapi.com/products/${id}`)
//     .then((resp) => {
//       console.log(resp);
//       return resp.json();
//     })
//     .then((dados) => {
//       (img.setAttribute("src", dados.image),
//         img.classList.add("ativo"),
//         (titulo.innerHTML += dados.title),
//         titulo.classList.add("ativo"),
//         (descricao.innerHTML += dados.description),
//         descricao.classList.add("ativo"),
//         (preco.innerHTML += `R$${dados.price}`),
//         preco.classList.add("ativo"));
//     });
// }
let produtoAchado
function handleKeydown() {
  if (produtos.some((produto) => (produto.title == inputId.value))) {
    produtoAchado = produtos.find(
      (produto) => (produto.title == inputId.value),
    );console.log(produtoAchado)
    const divProduto = document.createElement("div");
    divProduto.setAttribute("id", produtoAchado.id);
    divProduto.innerHTML = `<div><h2>${produtoAchado.title}</h2><img src="${produtoAchado.image}" alt=""><p>${produtoAchado.description}</p><p>R$ ${produtoAchado.price}</p></div>`;
    body.appendChild(divProduto);
  }
}
// botao.addEventListener("click", handleClick);
carregarProdutos();
inputId.addEventListener("keydown", handleKeydown);
