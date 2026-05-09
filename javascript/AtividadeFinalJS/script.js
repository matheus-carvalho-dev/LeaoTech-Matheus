const containerProdutos = document.querySelector("#produtos");
console.log(containerProdutos);
const containerDetalhes = document.querySelector("#produtoDetalhe");
console.log(containerDetalhes)
let produto = ""
fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json())
  .then((dados) => {
    dados.forEach((dado) => {
      containerProdutos.innerHTML += `<div class="col-3 produto"><div class="card h-100 "><img src="${dado.image}" 
             class="card-img-top p-3" 
             alt="${dado.title}" 
             style="height: 200px; object-fit: contain;"><div class="card-body d-flex flex-column"><p class="card-text text-secondary">${dado.category}</p><h5 class="card-title">${dado.title}</h5><p class="card-text text-success fs-5 fw-bold mt-auto">R$${dado.price}</p><div class='text-center'><a href="#" class="btn btn-primary button w-100">Ver produto</a></div></div></div></div>
    `;
      
    });;
      ;;
  produto = document.querySelectorAll(".produto")})
  produto.addEventListener("click", handleClick);
function handleClick() {
  fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json()).then((dados) => {dados.forEach((dado) => {containerDetalhes.innerHTML =
console.log(containerDetalhes)
    '<div class=""><div class="p-3 row align-items-center"><div class="col-5 text-center" ><imgsrc="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"class="img-fluid text-center"alt="${dado.title}"style="object-fit: contain; max-height: 300px;"/></div><div class="col-7"><p class="card-text text-secondary">mens clothing</p><h2 class="card-title">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h1><p class="card-text text-secondary mt-3">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p><p class="card-text text-success fs-5 fw-bold">R$109.95</p><a href="#" id="comprar" class="btn btn-primary">Comprar</a></div></div></div>'},
  
  )})}
