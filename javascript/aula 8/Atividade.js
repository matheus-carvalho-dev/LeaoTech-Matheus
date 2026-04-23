// const inputNome = document.querySelector('#nome')
// const inputIdade = document.querySelector('#idade')
// const inputCidade = document.querySelector('#cidade')
// const inputProfissao = document.querySelector('#profissao')
// const btnCadastrar = document.querySelector('#cadastrar')
// const btnListar = document.querySelector('#listar')
// const lista = document.querySelector('#lista')
// const inputs = [inputNome,inputIdade,inputCidade,inputProfissao]
// let usuarios = []

// function cadastrarUsuario(){
//   let usuario = {}
//   usuario.nome = inputNome.value
//   usuario.idade = inputIdade.value
//   usuario.cidade = inputCidade.value
//   usuario.profissao = inputProfissao.value
//   usuarios.push(usuario)
//   inputs.forEach(input=>input.value = "")
// }
// function listarUsuarios(){
//   lista.innerHTML = "Lista de usuários:"
//   usuarios.forEach(usuario=>{
//     lista.innerHTML += `<div>
//       <h4>Nome de usuário: ${usuario.nome}.</h4><p>Idade do usuário: ${usuario.idade}.</p><p>Cidade do usuário: ${usuario.cidade}.</p><p>Profissao do usuário: ${usuario.profissao}.</p>
//     </div>`
//   })
// }

// btnCadastrar.addEventListener("click",cadastrarUsuario)
// btnListar.addEventListener("click",listarUsuarios)

const img = document.querySelector('img')
const button = document.querySelector('button')
const url = document.querySelector('#url')
function handleClick(){
  img.setAttribute('src',url.value)
  console.log('È PRA TER IDO')
}
button.addEventListener("click",handleClick)