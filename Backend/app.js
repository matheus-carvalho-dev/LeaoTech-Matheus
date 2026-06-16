const prompt = require("prompt-sync")();
require("dotenv").config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const bcrypt = require("bcrypt");
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const app = express();
app.use(express.json());
const API_KEY = process.env.API_KEY;
function verificarChave(chaveRecebida) {
  if (chaveRecebida !== API_KEY) {
    return false;
  } else {
    return true;
  }
}
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

async function inserirAutor(dados) {
  let nome = data.nome;
  let nascionalidade = data.nascionalidade;
  let novoAutor = { nome: nome, nascionalidade: nascionalidade };
  const { data, erro } = await supabase
    .from("biblioteca_autor")
    .insert(novoAutor)
    .select();
  console.log(data, erro);
}
app.post("/cadastrarautor", async (req, res) => {
  const dados = req.body;
  console.log(dados);
  const resultado = await inserirAutor(dados);
  res.send(resultado);
  console.log(resultado);
});
async function inserirLivro(dados) {
  let titulo = dados.titulo;
  let quantidade = dados.quantidade;
  let genero = dados.genero;
  let id_autor = dados.id_autor;

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
app.post("/cadastrarlivro", async (req, res) => {
  const dados = req.body;
  console.log(dados);
  const resultado = await inserirLivro(dados);
  res.send(resultado);
  console.log(resultado);
});
app.put("/atualizarlivro/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const atualizacoes = req.body;
  const { data, erro } = await supabase
    .from("biblioteca_livro")
    .update(atualizacoes)
    .eq("id", 1)
    .select();
  console.log();
});
app.delete("/deletarlivro/:id", async (req, res) => {
  const id = req.params.id;
  const atualizacoes = req.body;
  const { data, erro } = await supabase
    .from("biblioteca_livro")
    .delete()
    .eq("id", id)
    .select();
});
async function inserirUsuario(dados) {
  let nome = dados.nome;
  let idade = dados.idade;
  let senha = dados.senha;
  let email = dados.email;
  let telefone = dados.telefone;
  let endereco = dados.endereco;
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
app.post("/cadastrarusuario", async (req, res) => {
  const dados = req.body;
  console.log(dados);
  const resultado = await inserirUsuario(dados);
  res.send(resultado);
  console.log(resultado);
});
async function inserirAluno(dados) {
  let nome = dados.nome;
  let cpf = dados.cpf;
  let telefone = dados.telefone;
  let idade = dados.idade;

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
app.post("/cadastraraluno", async (req, res) => {
  const dados = req.body;
  console.log(dados);
  const resultado = await inserirAluno(dados);
  res.send(resultado);
  console.log(resultado);
});

async function inserirCurso(dados) {
  let nome = dados.nome;
  let carga_horaria = dados.carga_horaria;
  let preco = dados.preco;
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
app.post("/cadastrarcurso", async (req, res) => {
  const dados = req.body;
  console.log(dados);
  const resultado = await inserirCurso(dados);
  res.send(resultado);
  console.log(resultado);
});
async function inserirUsuarioBiblioteca(dados) {
  let nome = dados.nome;
  let cpf = dados.cpf;
  let telefone = dados.telefone;
  let endereco = dados.endereco;
  let ativo = dados.ativo;
  let senha = dados.senha;
  let tipo = dados.tipo;
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
  return data;
}
app.post("/cadastrarusuariobiblioteca", async (req, res) => {
  const dados = req.body;
  console.log(dados);
  const resultado = await inserirUsuarioBiblioteca(dados);
  res.send(resultado);
  console.log(resultado);
});
async function AtualizarUsuarioBiblioteca(id) {
  const update = prompt("Escreva as atualizações em formato de JSON");
  const { data, erro } = await supabase
    .from("biblioteca_usuarios")
    .update(JSON.parse(update))
    .eq("id", id)
    .select();
  console.log(data, erro);
}
async function inserirMatricula(dados) {
  let id_aluno = dados.id_aluno;
  let id_curso = dados.id_curso;
  let ativo = dados.ativo;
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
app.post("/cadastrarmatricula", async (req, res) => {
  const dados = req.body;
  console.log(dados);
  const resultado = await inserirMatricula(dados);
  res.send(resultado);
  console.log(resultado);
});
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
app.post("/cadastrarperfilbiblioteca", async (req, res) => {
  const dados = req.body;
  console.log(dados);
  const resultado = await inserirPerfilBiblioteca(dados);
  res.send(resultado);
  console.log(resultado);
});
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

app.get("/listarlivros", async (req, res) => {
  const chaveRecebida = req.headers["api-key"];
  if (verificarChave(chaveRecebida));
  {
    const { data, error } = await supabase.from("biblioteca_livro").select("*");
    if (error) {
    }
    data.forEach((livro) => {
      console.log(`Nome: ${livro.titulo}\nGênero: ${livro.genero}`);
    });
  }
});
app.get("/listarlivros/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await supabase
    .from("biblioteca_livro")
    .select("*")
    .eq("id", id);
  if (error) {
    res.send(`Erro: ${error}`);
    return;
  } else if (data.length > 0) {
    res.json(data[0]);
  } else {
    res.send("Livro não encontrado");
  }
});
app.get("/buscarlivro", async (req, res) => {
  const titulo = req.query.titulo;
  const { data, error } = await supabase
    .from("biblioteca_livro")
    .select("*")
    .ilike("titulo", `%${titulo}%`);
  if (error) {
    res.send(`Erro: ${error}`);
    return;
  } else if (data.length > 0) {
    res.json(data);
  } else {
    res.send("Livro não encontrado");
  }
});
app.get("/listarautores", async (req, res) => {
  const { data, error } = await supabase.from("biblioteca_autor").select("*");
  if (error) {
    res.send(`Erro: ${error}`);
    return;
  } else if (data.length > 0) {
    res.json(data);
  } else {
    res.send("Autor não encontrado");
  }
});
app.get("/listarautor/:id", async (req, res) => {
  const id = req.params.id;
  const { data, error } = await supabase
    .from("biblioteca_autor")
    .select("*")
    .eq("id", id);
  if (error) {
    res.send(`Erro: ${error}`);
    return;
  } else if (data.length > 0) {
    res.json(data[0]);
  } else {
    res.send("Autor não encontrado");
  }
});
app.get("/buscarautor", async (req, res) => {
  const nome = req.query.nome;
  const nacionalidade = req.query.nacionalidade;
  const { data, error } = await supabase
    .from("biblioteca_autor")
    .select("*")
    .ilike("nome", `%${nome}%`)
    .ilike("nascionalidade", `%${nacionalidade}%`);
  if (error) {
    res.send(`Erro: ${error}`);
    return;
  } else if (data.length > 0) {
    res.json(data);
  } else {
    res.send("Autor não encontrado");
  }
});

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
  console.log(`Link do sistema: http://localhost:3000`);
});
