// function cadastrarUsuario(nome, idade, cidade, profissao, usuarios) {
//   let usuario = {};
//   usuario.nome = nome;
//   usuario.idade = idade;
//   usuario.cidade = cidade;
//   usuario.profissao = profissao;
//   if (
//     usuario.nome == "" ||
//     usuario.cidade == "" ||
//     usuario.profissao == "" ||
//     usuario.idade == ""
//   ) {
//     console.log("Informação inválida, tente novamente!");
//     return;
//   } else if (usuario.idade > 150) {
//     console.log("Idade inválida, tente novamente!");
//     return;
//   }
//   usuarios.push(usuario);
// }
// function listarUsuarios(usuarios) {
//   for (let i = 0; i < usuarios.lenght; i++)
//     console.log(`${usuarios[i].nome} - ${usuarios[i].profissao}`);
// }
// function deletarUsuario(usuarios, usuarioDeletar) {
//   let index = 0;
//   for (let i = 0; i < usuarios.lenght; i++) {
//     if (usuarios[i].nome == usuarioDeletar) {
//       index = usuarios[i];
//       break;
//     }
//   }
//   usuarios.splice(index, 1);
// }
// let usuarios = [];
// let opcao = parseInt(
//   prompt(
//     "Digite sua opção:\n1 - Cadastrar usuário \n2 - Listar usuários \n3 - Deletar usuário \n4 - Sair do sistema",
//   ),
// );
// while (opcao != 4) {
//   if (opcao == 1) {
//     let nome = prompt("Digite o nome do usuário");
//     let idade = prompt("Digite a idade do usuário");
//     let cidade = prompt("Digite a cidade do usuário");
//     let profissao = prompt("Digite a profissão do usuário");
//     cadastrarUsuario(nome, idade, cidade, profissao, usuarios);
//     console.log(usuarios);
//   } else if (opcao == 2) {
//     listarUsuarios(usuarios);
//     console.log("Usuários listados");
//     console.log(usuarios);
//   } else if (opcao == 3) {
//     let usuarioDeletar = prompt("Digite o nome do usuário a ser deletado");
//     deletarUsuario(usuarios, usuarioDeletar);
//     console.log("Usuário deletado");
//     console.log(usuarios);
//   }
//   opcao = parseInt(
//     prompt(
//       "Digite sua opção:\n1 - Cadastrar usuário \n2 - Listar usuários \n3 - Deletar usuário \n4 - Sair do sistema",
//     ),
//   );
// }

function calcularImc(peso, altura){
    let resultado = peso * (altura * altura)
    console.log(resultado)
}

function verificarNome(nome, lista){  
    
}