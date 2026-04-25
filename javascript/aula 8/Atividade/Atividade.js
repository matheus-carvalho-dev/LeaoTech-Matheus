const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const inputFoto = document.querySelector("#foto");
const inputCpf = document.querySelector("#cpf");
const btnCadastrar = document.querySelector("#cadastrar");
const btnListar = document.querySelector("#listar");
const btnEditar = document.querySelector("#editar");
const lista = document.querySelector("#lista");
const inputs = [inputNome, inputIdade, inputFoto, inputCpf];
let usuarios = [
  {
    nome: "Maria",
    idade: 124214,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGeMgdoWjNYV6-BCxiZeJuaTiWZjRiKkS1QA&s",
    cpf: 13252123819,
  },
  {
    nome: "Lucas",
    idade: 61,
    foto: "https://www.pedigree.com.br/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf2401/files/2024-02/dia-nacional-dos-animais%20.jpg",
    cpf: 13252193819,
  },
  {
    nome: "Pedro",
    idade: 24,
    foto: "https://www.petz.com.br/blog/wp-content/uploads/2022/06/animais-selvagens-3.jpg",
    cpf: 13246123819,
  },
];

function cadastrarUsuario() {
  let usuario = {};
  usuario.nome = inputNome.value;
  usuario.idade = inputIdade.value;
  usuario.foto = inputFoto.value;
  usuario.cpf = Number(inputCpf.value);
  let usuarioCpf = usuarios.find((usuarioA) => {
    return usuarioA.cpf === usuario.cpf;
  });
  if (usuarioCpf) {
    usuarioCpf.nome = usuario.nome;
    usuarioCpf.idade = usuario.idade;
    usuarioCpf.foto = usuario.foto;
  } else {
    usuarios.push(usuario);
  }
  inputs.forEach((input) => (input.value = ""));
}
function listarUsuarios() {
  lista.innerHTML = "Lista de usuários:";
  usuarios.forEach((usuario) => {
    lista.innerHTML += `<div>
      <h4>Nome de usuário: ${usuario.nome}.</h4><p>Idade do usuário: ${usuario.idade}.</p><p>foto do usuário: </p><img src=${usuario.foto}><p>Cpf do usuário: ${usuario.cpf}.</p>
    </div>`;
  });
}
function editarUsuario() {
  let usuario = usuarios.find((usuario) => {
    return usuario.cpf == inputCpf.value;
  });
  if (usuario) {
    inputNome.value = usuario.nome;
    inputIdade.value = usuario.idade;
    inputFoto.value = usuario.foto;
    inputCpf.value = usuario.cpf;
  }
}

btnCadastrar.addEventListener("click", cadastrarUsuario);
btnListar.addEventListener("click", listarUsuarios);
btnEditar.addEventListener("click", editarUsuario);
