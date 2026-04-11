// let array = [1,2,3,4,5,6]
// array.splice(2,1)
// console.log(array);

// let numeros = [1,25,37,2,10,42]
// console.log(numeros)
// numeros.sort((a, b) => a - b)
// console.log(numeros)

// let convidados = [];
// let opcoes;
// while (opcoes != 2) {
//   opcoes = parseInt(prompt("Digite uma opção\n1- Cadastrar usuário\n2- Sair"));
//   switch (opcoes) {
//     case 1:
//       convidado = prompt("Digite o nome do convidado").toLowerCase();
//       convidados.push(convidado);
//       break;
//     case 2:
//       console.log("Saindo");
//   }
// }
// let validacao = prompt("Digite seu nome").toLowerCase();
// if (convidados.includes(validacao)) {
//   console.log(`Boas-vindas ${validacao}`);
// } else {
//   console.log("Seu nome não está na lista de convidados");
// }

// let nomeProduto = prompt('Digite o nome do produto')
// let valorProduto = parseInt(prompt('Digite o valor do produto'))
// let quantidadeProduto = parseInt(prompt('Digite a quantidade do produto'))
// let produto = {}
// produto.nome = nomeProduto
// produto.valor = valorProduto
// produto.quantidade = quantidadeProduto
// console.log(`O produto: ${produto.nome}, tem como valor total de estoque: ${produto.valor * produto.quantidade}`)

// let nomeAluno = prompt('Digite o nome do aluno')
// let nota1 = parseInt(prompt('Digite a nota 1'))
// let nota2 = parseInt(prompt('Digite a nota 2'))
// let aluno = {}
// aluno.nome = nomeAluno
// aluno.nota1 = nota1
// aluno.nota2 = nota2
// let media = (nota1 + nota2)/2
// let situacao
// if(media >= 7){
//     situacao = "Aprovado"
// }
// else if(media >= 5 && media < 7){
//     situacao = "Recuperação"
// }
// else{
//     situacao = "Reprovado"
// }

// let nome = prompt('Digite o nome')
// let cargo = prompt('Digite o cargo ')
// let salario = parseInt(prompt('Digite o salário '))
// let faltas = parseInt(prompt('Digite as faltas '))
// let funcionario = {}
// funcionario.nome = nome
// funcionario.cargo = cargo
// funcionario.salario = salario
// funcionario.faltas = faltas
// if(funcionario.faltas > 3){
//     console.log('Perdeu bonus')
// }
// else{
//     console.log(`Parabéns pelo bônus de ${funcionario.salario + (funcionario.salario * 0.10)}`)
// }

// let nome = prompt('Digite o nome')
// let lanche = prompt('Digite o lanche ')
// let quantidade = parseInt(prompt('Digite o quantidade '))
// let preco = parseInt(prompt('Digite o preco '))
// let pedido = {}
// pedido.nome = nome
// pedido.lanche = lanche
// pedido.quantidade = quantidade
// pedido.preco = preco
// pedido.total = pedido.quantidade * pedido.preco
// console.log(pedido.total)
// if(pedido.total > 30){
//     pedido.total = pedido.total - (pedido.total*0.05)
//     console.log('Desconto de 5% concedido')
// }
// console.log(pedido.total)

// let marca = prompt("Digite o marca");
// let modelo = prompt("Digite o modelo ");
// let ano = parseInt(prompt("Digite o ano "));
// let valor = parseInt(prompt("Digite o valor "));
// let carro = {};
// carro.marca = marca;
// carro.modelo = modelo;
// carro.ano = ano;
// carro.valor = valor;
// let anoAtual = 2026;
// if (2026 - carro.ano < 10) {
//   console.log("Seminovo");
// } else if (2026 - carro.ano >= 10) {
//   console.log("Usado");
// } else {
//   console.log("Carro vindo do futuro");
// }
let produtos={
    produto1:{
        nome:'Macaco',
        preco:10,
        estoque:2,
    },
    produto2:{
        nome:'Girafa',
        preco:11,
        estoque:10,
    },
    produto3:{
        nome:'Zebra',
        preco:8,
        estoque:0,
    }
}
let produtosArray=[]
produtosArray.push(produtos.produto1,produtos.produto2,produtos.produto3)
console.log(produtosArray)

for(let i = 0;i < 3; i++){
    produtosArray[i].valorTotal = produtosArray[i].estoque * produtosArray[i].preco
    console.log(produtosArray[i].valorTotal)
    if(produtosArray[i].estoque <= 5){
        console.log(`Produto com estoque baixo: ${produtosArray[i].nome}`)    
}}
