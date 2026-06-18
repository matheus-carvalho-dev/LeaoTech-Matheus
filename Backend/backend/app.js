const prompt = require("prompt-sync")();
require("dotenv").config();
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const bcrypt = require("bcrypt");
const express = require("express");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
const app = express();

const API_KEY = process.env.API_KEY;
const jwt = require("jsonwebtoken");
const JWT_SENHA = process.env.JWT_SENHA;
const cors = require("cors");
app.use(cors());
app.use(express.json());
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

app.post("/inserirusuario", async (req, res) => {
  const { nome, cpf, telefone, endereco, ativo, senha, tipo } = req.body;
  const saltRounds = 10;
  const senhaCrip = await bcrypt.hash(senha, saltRounds);

  const { data, error } = await supabase
    .from("biblioteca_usuarios")
    .insert([{ nome, cpf, telefone, endereco, ativo, senha: senhaCrip, tipo }])
    .select();

  if (error) return res.status(400).json({ erro: error.message });
  res.status(201).json(data);
});

app.get("/listarusuario", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_usuarios")
    .select("*");
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.get("/buscarusuario/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_usuarios")
    .select("*")
    .eq((req.params.id.length = 11 ? "cpf" : "id"), req.params.id)
    .single();
  if (error) return res.status(404).json({ erro: error.message });
  res.json(data);
});

app.put("/atualizarusuario/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_usuarios")
    .update(req.body)
    .eq("id", req.params.id)
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.delete("/deletarusuario/:id", async (req, res) => {
  const { error } = await supabase
    .from("biblioteca_usuarios")
    .delete()
    .eq("id", req.params.id);
  if (error) return res.status(400).json({ erro: error.message });
  res.status(204).send();
});

app.post("/inserirautor", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_autor")
    .insert([req.body])
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.status(201).json(data);
});

app.get("/listarautor", async (req, res) => {
  const { data, error } = await supabase.from("biblioteca_autor").select("*");
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.get("/buscarautor/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_autor")
    .select("*")
    .eq("id", req.params.id)
    .single();
  if (error) return res.status(404).json({ erro: error.message });
  res.json(data);
});

app.put("/atualizarautor/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_autor")
    .update(req.body)
    .eq("id", req.params.id)
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.delete("/deletarautor/:id", async (req, res) => {
  const { error } = await supabase
    .from("biblioteca_autor")
    .delete()
    .eq("id", req.params.id);
  if (error) return res.status(400).json({ erro: error.message });
  res.status(204).send();
});

app.post("/inserirlivro", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_livro")
    .insert([req.body])
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.status(201).json(data);
});

app.get("/listarlivro", async (req, res) => {
  const { data, error } = await supabase.from("biblioteca_livro").select("*");
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.get("/buscarlivro/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_livro")
    .select("*")
    .eq("id", req.params.id)
    .single();
  if (error) return res.status(404).json({ erro: error.message });
  res.json(data);
});

app.put("/atualizarlivro/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_livro")
    .update(req.body)
    .eq("id", req.params.id)
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.delete("/deletarlivro/:id", async (req, res) => {
  const { error } = await supabase
    .from("biblioteca_livro")
    .delete()
    .eq("id", req.params.id);
  if (error) return res.status(400).json({ erro: error.message });
  res.status(204).send();
});

app.post("/inseriremprestimo", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_emprestimo")
    .insert([req.body])
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.status(201).json(data);
});

app.get("/listaremprestimo", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_emprestimo")
    .select("*");
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.get("/buscaremprestimo/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_emprestimo")
    .select("*")
    .eq("id", req.params.id)
    .single();
  if (error) return res.status(404).json({ erro: error.message });
  res.json(data);
});

app.put("/atualizaremprestimo/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_emprestimo")
    .update(req.body)
    .eq("id", req.params.id)
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.delete("/deletaremprestimo/:id", async (req, res) => {
  const { error } = await supabase
    .from("biblioteca_emprestimo")
    .delete()
    .eq("id", req.params.id);
  if (error) return res.status(400).json({ erro: error.message });
  res.status(204).send();
});

app.post("/inserirperfil", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_perfil")
    .insert([req.body])
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.status(201).json(data);
});

app.get("/listarperfil", async (req, res) => {
  const { data, error } = await supabase.from("biblioteca_perfil").select("*");
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.get("/buscarperfil/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_perfil")
    .select("*")
    .eq("id", req.params.id)
    .single();
  if (error) return res.status(404).json({ erro: error.message });
  res.json(data);
});

app.put("/atualizarperfil/:id", async (req, res) => {
  const { data, error } = await supabase
    .from("biblioteca_perfil")
    .update(req.body)
    .eq("id", req.params.id)
    .select();
  if (error) return res.status(400).json({ erro: error.message });
  res.json(data);
});

app.delete("/deletarperfil/:id", async (req, res) => {
  const { error } = await supabase
    .from("biblioteca_perfil")
    .delete()
    .eq("id", req.params.id);
  if (error) return res.status(400).json({ erro: error.message });
  res.status(204).send();
});
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
app.post("/login", async (req, res) => {
  const cpf = req.body.cpf;
  const senha = req.body.senha;
  console.log(senha);
  const { data, error } = await supabase
    .from("biblioteca_usuarios")
    .select("*")
    .eq("cpf", cpf);

  if (error) {
    return res.status(401).json({ error: `${error}` });
  }
  if (data.length == 0) {
    return res.status(404).json({ error: "Cpf não encontrado" });
  }
  const usuario = data[0];
  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) {
    return res.json({ error: false });
  }
  const token = jwt.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      tipo: usuario.tipo,
    },
    JWT_SENHA,
    { expiresIn: "1h" },
  );
  return res.json({
    mensagem: "login realizado com sucesso",
    token,
    usuario: { id: usuario.id, nome: usuario.nome },
  });
});
function autenticaToken(req,res,next){
  const authHeader = req.headers.authorization
  if (!authHeader){
    return res.json({"error":'Token não enviado'})
  }
  const token = authHeader.split(' ')[1]
  try{
   const  usuario = jwt.verify(token, JWT_SENHA )
   req.usuario = usuario
   next()
  }
  catch{return res.json({"Error":'token inválido'})}
}
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
