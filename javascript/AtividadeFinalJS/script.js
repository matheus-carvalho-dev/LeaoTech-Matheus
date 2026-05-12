const containerProdutos = document.querySelector("#produtos");

const containerDetalhes = document.querySelector("#produtoDetalhe");
let input = "";
let produtos = "";
let texto = "";
let containerInformacoes = "";
let consultar = "";
let infoCEP = "";
async function fetchProdutos() {
  const dados = await fetch("https://fakestoreapi.com/products");
  const json = await dados.json();
  json.forEach((dado) => {
    texto += `<div class="col-3 produto" id=${dado.id}><div class="card h-100 "><img src="${dado.image}" 
             class="card-img-top p-3" 
             alt="${dado.title}" 
             style="height: 200px; object-fit: contain;"><div class="card-body d-flex flex-column"><p class="card-text text-secondary">${dado.category}</p><h5 class="card-title">${dado.title}</h5><p class="card-text text-success fs-5 fw-bold mt-auto">R$${dado.price}</p><div class='text-center'><a href="#" class="btn btn-primary button w-100">Ver produto</a></div></div></div></div>
    `;
  });
  containerProdutos.innerHTML = texto;
  produtos = document.querySelectorAll(".produto");
  produtos.forEach((produto) => {
    produto.addEventListener("click", handleProduto);
  });
}
function handleSubmit(event) {
  event.preventDefault();
}
async function handleConsultar(event) {
  event.preventDefault();
  const resultadoAnterior = document.querySelector("#resultado");
  if (resultadoAnterior) {
    resultadoAnterior.remove();
  }
  try {
    const dados = await fetch(`https://viacep.com.br/ws/${input.value}/json/`);
    const json = await dados.json();
    infoCEP = document.createElement("div");
    infoCEP.innerHTML = `<div id='resultado' class="d-flex flex-column text-success p-2" style="background-color: rgb(126, 245, 126);">
        <h6>CEP ENCONTRADO</h6>
        <p>Rua: ${json.logradouro}</p>
        <p>Bairro: ${json.bairro}</p>
        <p>Cidade: ${json.localidade}</p>
        <p>Estado: ${json.estado}</p>
      </div>`;
  } catch (error) {
    console.log(error);
    infoCEP = document.createElement("div");
    infoCEP.innerHTML = `
        <h6 id='resultado'>CEP NÃO ENCONTRADO</h6>
        `;
  } finally {
    containerInformacoes.appendChild(infoCEP);
  }
}
function handleComprar(event) {
  event.preventDefault();
  
  if (!document.querySelector("#inputCEP")) {
    const consultaCEP = document.createElement("div");
    consultaCEP.id = "inputCEP";
    
    consultaCEP.innerHTML = `
      <form class="row d-flex flex-column p-0" id="formCEP">
        <label for="cep" class="p-0">Digite o seu CEP</label>
        <div class="row ps-3">
          <input id="cep" type="text" class="col-8 p-0"/>
          <div class="col-4 px-5">
            <button class="col-12 btn btn-primary" type="submit">Consultar CEP</button>
          </div>
        </div>
      </form>`;

    containerInformacoes.appendChild(consultaCEP);
    
    const form = document.querySelector("#formCEP");
    input = document.querySelector("#cep");
    
    form.addEventListener("submit", handleConsultar);
  }
}
function handleProduto(event) {
  event.preventDefault();
  fetch(`https://fakestoreapi.com/products/${event.currentTarget.id}`)
    .then((resp) => resp.json())
    .then((dados) => {
      containerDetalhes.innerHTML = `<div class=""><div class="p-3 row align-items-center"><div class="col-5 text-center" ><img src=${dados.image} class="img-fluid text-center"alt=${dados.title} style="object-fit: contain; max-height: 300px;"/></div><div id="informacoes" class="col-7"><p class="card-text text-secondary">${dados.category}</p><h2 class="card-title">${dados.title}</h2><p class="card-text text-secondary mt-3">${dados.description}</p><p class="card-text text-success fs-5 fw-bold">R$${dados.price}</p><a href="#" id="comprar" class="btn btn-primary">Comprar</a></div></div></div>`;
      const botao = document.querySelector("#comprar");
      containerInformacoes = document.querySelector("#informacoes");
      botao.addEventListener("click", handleComprar);
    });
}
fetchProdutos();
