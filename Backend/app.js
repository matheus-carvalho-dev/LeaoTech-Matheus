const prompt = require("prompt-sync")();
require("dotenv").config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const bcrypt = require("bcrypt");
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const app = express();
// let login = prompt("Digite seu login:");
// let senha = Number(prompt("Digite seu senha:"));
// let loginCorreto = "admin";
// let senhaCorreta = 123;
// let tries = 0;
// let sucesso = false;
// while (tries < 5) {
//   if (login == loginCorreto && senha == senhaCorreta) {
//     sucesso = true;
//     break;
//   } else {
//     console.log("login ou senha incorretos, tente novamente");
//     login = prompt("Digite seu login:");
//     senha = prompt("Digite seu senha:");
//     sucesso = false;
//     tries++;
//   }
// }
// if (sucesso == true) {
//   console.log("Usuário logado com sucesso");
// } else if (sucesso == false) {
//   console.log("Usuário bloqueado, tente novamente em 24 horas");
// }

// let maria = 0;
// let joao = 0;
// let carlos = 0;
// let voto = "";
// for (let i = 0; i < 10; i++) {
//   console.clear();
//   console.log("=============================");
//   console.log("         CANDIDATOS          ");
//   console.log("=============================");
//   console.log(" 1 - Maria");
//   console.log(" 2 - João");
//   console.log(" 3 - Carlos");
//   console.log("=============================");
//   console.log("Digite o número do seu candidato");

//   voto = Number(prompt());
//   switch (voto) {
//     case 1:
//       maria++;
//       console.log("Candidato Maria votado!");
//       break;
//     case 2:
//       joao++;
//       console.log("Candidato Joao votado!");
//       break;
//     case 3:
//       carlos++;
//       console.log("Candidato Carlos votado!");
//       break;
//     default:
//       console.log("Candidato inválido");
//       i--;
//   }
// }
// if (maria > carlos && maria > joao) {
//   console.log("Candidato vencedor: Maria");
// } else if (carlos > maria && carlos > joao) {
//   console.log("Candidato vencedor: Carlos");
// } else if (joao > carlos && joao > maria) {
//   console.log("Candidato vencedor: Joao");
// }

// let opcao;
// let saldo = 1000;
// while (opcao !== 0) {
//   console.log("=============================");
//   console.log("         OPÇÕES          ");
//   console.log("=============================");
//   console.log(" 1 - Consultar Saldo");
//   console.log(" 2 - Sacar Dinheiro");
//   console.log(" 3 - Depositar Dinheiro");
//   console.log(" 0 - Sair");
//   console.log("=============================");

//   opcao = parseInt(prompt());
//   switch (opcao) {
//     case 1:
//       console.log(`\nSeu saldo é: ${saldo}\n`);
//       break;
//     case 2:
//       let saque = parseInt(prompt("Digite o valor do saque:"));
//       let resposta =
//         saque <= saldo ? (saldo -= saque) : console.log("Saldo insuficiente");
//       console.log(`Seu saldo é: ${saldo}`);
//       break;
//     case 3:
//       let deposito = prompt("Digite o valor do deposito:");
//       saldo += +deposito;
//       console.log(`Seu saldo é: ${saldo}`);
//       break;
//     case 0:
//       console.log("Saindo...");
//       break
//     default:
//       console.log("Opção invalida");
//   }
// }

async function inserirAutor() {
  let nome = prompt("Digite o nome do autor:");
  let nascionalidade = prompt("Digite a nacionalidade do autor:");
  let novoAutor = { nome: nome, nascionalidade: nascionalidade };
  const { data, erro } = await supabase
    .from("biblioteca_autor")
    .insert(novoAutor)
    .select();
  console.log(data, erro);
}

async function inserirLivro() {
  let titulo = prompt("Digite o titulo do livro:");
  let quantidade = parseInt(prompt("Digite a quantidade de livros:"));
  let genero = prompt("Digite o gênero do livro:");
  let id_autor = parseInt(prompt("Digite o id do autor:"));

  let novoLivro = {
    titulo: titulo,
    quantidade: quantidade,
    genero: genero,
    id_autor: id_autor,
  };
  const { data, erro } = await supabase
    .from("biblioteca_livro")
    .insert(novoLivro)
    .select();
  console.log(data, erro);
}

async function inserirUsuario() {
  let nome = prompt("Digite o nome do usuário:");
  let idade = parseInt(prompt("Digite a idade do usuário:"));
  let senha = prompt("Digite o senha do usuário:");
  let email = prompt("Digite o email do usuário:");
  let telefone = parseInt(prompt("Digite o telefone do autor:"));
  let endereco = prompt("Digite o endereço do autor:");

  let novoUsuario = {
    nome,
    idade,
    senha,
    email,
    telefone,
    endereco,
  };
  const { data, erro } = await supabase
    .from("usuarios")
    .insert(novoUsuario)
    .select();
  console.log(data, erro);
}

async function inserirAluno() {
  let nome = prompt("Digite o nome do usuário:");
  let cpf = parseInt(prompt("Digite o cpf do usuário:"));
  let telefone = parseInt(prompt("Digite o telefone do usuário:"));
  let idade = prompt("Digite a idade do usuário:");

  let novoAluno = {
    nome,
    idade,
    cpf,
    telefone,
  };
  const { data, erro } = await supabase
    .from("alunos")
    .insert(novoAluno)
    .select();
  console.log(data, erro);
}

async function inserirCurso() {
  let nome = prompt("Digite o nome do curso:");
  let carga_horaria = parseInt(prompt("Digite o carga horaria do curso:"));
  let preco = parseInt(prompt("Digite o preço do curso:"));
  let novoCurso = {
    nome,
    carga_horaria,
    preco,
  };
  const { data, erro } = await supabase
    .from("curso")
    .insert(novoCurso)
    .select();
  console.log(data, erro);
}

async function inserirUsuarioBiblioteca() {
  let nome = prompt("Digite o nome do usuário:");
  let cpf = parseInt(prompt("Digite o cpf do usuário:"));
  let telefone = parseInt(prompt("Digite o telefone do usuário:"));
  let endereco = prompt("Digite o endereço do usuário:");
  let ativo =
    prompt("Usuário está ativo? (true/false):") == "true" ? true : false;
  let senha = prompt("Digite a senha do usuário:");
  let tipo = prompt(
    "Digite número do tipo de usuário:\n1- Administrador\n2- Aluno",
  );

  const saltRounds = 10;
  const senhaCrip = await bcrypt.hash(senha, saltRounds);
  let novoUsuario = {
    nome,
    cpf,
    telefone,
    endereco,
    ativo,
    senha: senhaCrip,
    tipo,
  };
  const { data, erro } = await supabase
    .from("biblioteca_usuarios")
    .insert(novoUsuario)
    .select();
  console.log(data, erro);
}
async function AtualizarUsuarioBiblioteca(id) {
  const update = prompt("Escreva as atualizações em formato de JSON");
  const { data, erro } = await supabase
    .from("biblioteca_usuarios")
    .update(JSON.parse(update))
    .eq("id", id)
    .select();
  console.log(data, erro);
}
async function inserirMatricula() {
  let id_aluno = parseInt(prompt("Digite o id do aluno:"));
  let id_curso = parseInt(prompt("Digite o id do curso:"));
  let ativo =
    prompt("Matricula está ativa? (true/false):") == "true" ? true : false;
  let novaMatricula = {
    id_aluno,
    id_curso,
    ativo,
  };
  const { data, erro } = await supabase
    .from("matricula")
    .insert(novaMatricula)
    .select();
  console.log(data, erro);
}

async function inserirPerfilBiblioteca() {
  let foto = prompt("Digite o foto do perfil:");
  let bio = prompt("Digite a bio do perfil:");
  let preferencias = prompt("Digite o preferencias do perfil:");
  let id_usuario = prompt("Digite o id do usuário:");
  let novoPerfilBiblioteca = {
    foto,
    bio,
    preferencias,
    id_usuario,
  };
  const { data, erro } = await supabase
    .from("biblioteca_perfil")
    .insert(novoPerfilBiblioteca)
    .select();
  console.log(data, erro);
}

async function inserirEmprestimo() {
  let id_livro = parseInt(prompt("Digite o id do livro:"));
  let id_usuario = parseInt(prompt("Digite o id do usuario:"));
  let data_entrega = prompt("Digite a data da entrega:");
  let novoEmprestimo = {
    id_livro,
    id_usuario,
    data_entrega,
  };
  const { data, erro } = await supabase
    .from("biblioteca_emprestimo")
    .insert(novoEmprestimo)
    .select();
  console.log(data, erro);
}
async function listarAutores() {
  const { data, error } = await supabase
    .from("biblioteca_autor")
    .select("nascionalidade,nome");
  if (error) {
  }
  data.forEach((autor) => {
    console.log(`Nome: ${autor.nome}\n Nacionalidade: ${autor.nascionalidade}`);
  });
}
app.get('/listarLivros', async (req,res)=>{
  const { data, error } = await supabase.from("biblioteca_livro").select("*");
  if (error) {
  }
  data.forEach((livro) => {
    console.log(`Nome: ${livro.titulo}\nGênero: ${livro.genero}`);
  });
})
{
  const { data, error } = await supabase.from("biblioteca_livro").select("*");
  if (error) {
  }
  data.forEach((livro) => {
    console.log(`Nome: ${livro.titulo}\nGênero: ${livro.genero}`);
  });
}
// listarAutores();
async function buscarAutores(nome) {
  const { data, error } = await supabase
    .from("biblioteca_autor")
    .select("nascionalidade,nome")
    .eq("nome", nome);
  if (error) {
  }
  data.forEach((autor) => {
    console.log(`Nome: ${autor.nome}\n Nacionalidade: ${autor.nascionalidade}`);
  });
}
async function login() {
  const cpf = prompt("Digite seu cpf:");
  const senha = prompt("Digite sua senha:");

  const { data, error } = await supabase
    .from("biblioteca_usuarios")
    .select()
    .eq("cpf", cpf);
  if (error) {
    console.log(error);
  } else if (data.length !== 0) {
    const senhaCorreta = await bcrypt.compare(senha, data[0].senha);
    if (senhaCorreta) {
      console.log("Usuário logado com sucesso");
      return data[0];
    } else {
      console.log("Cpf ou senha incorretos");
    }
  }
}
async function menuAdmin(usuario) {
  let opcao;
  do {
    console.log(`=====USUÁRIO: ${usuario.nome}=====`);
    console.log(
      `=====OPÇÕES DE ${usuario.tipo == 1 ? "Administrador" : "Usuário"}=====`,
    );
    console.log("1- Cadastrar novo Autor");
    console.log("2- Cadastrar novo Livro");
    console.log("0- sair");
    opcao = parseInt(prompt("Escolha uma opção:"));
    switch (opcao) {
      case 1:
        await inserirUsuarioBiblioteca();
        break;
      case 2:
        await inserirAutor();
        break;
      case 3:
        await inserirLivro();
        break;
      case 0:
        console.log("Saindo...");
        return;
    }
  } while (opcao !== 0);
}
async function menuUser(usuario) {
  let opcao;
  do {
    console.log(`=====USUÁRIO: ${usuario.nome} =====`);
    console.log(
      `=====OPÇÕES DE ${usuario.tipo == 1 ? "ADMINISTRADOR" : "USUÁRIO"}=====`,
    );
    console.log("1- Ver livros");
    console.log("0- sair");
    opcao = parseInt(prompt("Escolha uma opção:"));
    switch (opcao) {
      case 1:
        console.log("Listando livros...");
        await listarLivros();
        break;
      case 0:
        console.log("Saindo...");
        return;
    }
  } while (opcao !== 0);
}
async function menu() {
  let opcao;
  do {
    console.log("=====OPÇÕES=====");
    console.log("1- Logar usuário");
    console.log("2- Cadastrar usuário");
    console.log("0- sair");
    opcao = parseInt(prompt("Escolha uma opção:"));
    switch (opcao) {
      case 1:
        const usuario = await login();
        if (usuario) {
          switch (usuario.tipo) {
            case 1:
              await menuAdmin(usuario);
              break;
            case 2:
              await menuUser(usuario);
              break;
            default:
              console.log("Usuário de tipo não identificado");
          }
        }
      case 2:
        await inserirUsuarioBiblioteca();
        break;
      case 0:
        console.log("Saindo...");
        break;
    }
  } while (opcao !== 0);
}
app.listen(3000, () => {
  console.log("hello world!");
});
