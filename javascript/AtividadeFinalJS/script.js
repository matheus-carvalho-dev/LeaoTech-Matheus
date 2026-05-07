const containerProdutos = document.querySelector("#produtos");
console.log(containerProdutos)

fetch("https://fakestoreapi.com/products")
  .then((resp) => resp.json())
  .then((dados) => {dados.forEach(dado => {
    containerProdutos.innerHTML += `<div class="col-3 produto"><div class="card h-100"><img src="${dado.image}" 
             class="card-img-top p-3" 
             alt="${dado.title}" 
             style="height: 200px; object-fit: contain;"><div class="card-body"><p class="card-text text-secondary">${dado.category}</p><h5 class="card-title">${dado.title}</h5><p class="card-text text-success fs-5 fw-bold">R$${dado.price}</p><a href="#" class="btn btn-primary">Ver produto</a></div></div></div>
    `;
  });
    
  
  });
