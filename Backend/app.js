const prompt = require("prompt-sync")();
require('dotenv').config()
const SUPABASE_URL = process.env.SUPABASE_URL
const SUPABASE_KEY = process.env.SUPABASE_KEY

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

const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
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
inserirAutor();
