// let idade = prompt("Digite sua idade");
// let maior = idade >= 18 ? "Maior de idade" : "Menor de idade";
// console.log(`Você é ${maior}`);

// let numero = prompt("Digite um numero");
// let parOuImpar = numero % 2;
// let resultado = parOuImpar == 0 ? "par" : "impar";
// console.log(`Seu numero é ${resultado}`);

// let nota = prompt("Digite um nota");
// let situacao = nota >= 7 ? "aprovado" : "de recuperação";
// console.log(`Sua situação é ${situacao}`);

// let Numero = prompt("Digite um numero");
// let verificaçao =
//   Numero > 0
//     ? console.log("Numero aceito")
//     : console.log("Numero invalido, digite um numero positivo");

// let valor = prompt("Digite um valor");
// let statuss = valor < 100 ? "Barato" : "Caro";
// console.log(`Seu item é ${statuss}`);

// let opcao = parseInt(
//   prompt(
//     "Digite sua opção:\n1 - Cadastrar usuário \n2 - Listar usuários \n3 - Sair do sistema",
//   ),
// );
// switch (opcao) {
//   case 1:
//     console.log("Cadastrando usuário");
//     break;
//   case 2:
//     console.log("Listando usuários");
//     break;
//   case 3:
//     console.log("Saindo do sistema");
//     break;
//   default:
//     console.log("Opção invalida");
// }

// let mes = parseInt(prompt("Digite um numero para um mês"));
// switch (mes) {
//   case 1:
//     console.log("janeiro");
//     break;
//   case 2:
//     console.log("fevereiro");
//     break;
//   case 3:
//     console.log("março");
//     break;
//   case 4:
//     console.log("abril");
//     break;
//   case 5:
//     console.log("maio");
//     break;
//   case 6:
//     console.log("junho");
//     break;
//   case 7:
//     console.log("julho");
//     break;
//   case 8:
//     console.log("agosto");
//     break;
//   case 9:
//     console.log("setembro");
//     break;
//   case 10:
//     console.log("outubro");
//     break;
//   case 11:
//     console.log("novembro");
//     break;
//   case 12:
//     console.log("dezembro");
//     break;
//   default:
//     console.log("Opção invalida");
// }

// let conceito = prompt("Digite seu conceito(A, B, C ou D)");
// switch (conceito) {
//   case "A":
//     console.log("Excelente desempenho");
//     break;
//   case "B":
//     console.log("Bom desempenho");
//     break;
//   case "C":
//     console.log("Desempenho regular");
//     break;
//   case "D":
//     console.log("Desempenho insuficiente");
//     break;
//   default:
//     console.log("Conceito invalido");
// }

// let opcoes = parseInt(
//   prompt(
//     "Digite sua opção:\n1 - Criar conta \n2 - Fazer login \n3 - Recuperar senha",
//   ),
// );
// switch (opcoes) {
//   case 1:
//     let nome = prompt("Digite seu nome");
//     let email = prompt("Digite seu email");
//     let senha = prompt("Digite sua senha");
//     console.log(`Conta criada com sucesso para ${nome}`);
//     break;
//   case 2:
//     let email2 = prompt("Digite seu email");
//     let senha2 = prompt("Digite sua senha");
//     console.log(`login realizado com sucesso para a senha: ${senha2}`);
//     break;
//   case 3:
//     let email3 = prompt("Digite seu email");
//     let emailOuSms = prompt("Deseja receber por email ou sms?");
//     console.log(`instruções enviadas`);
//     break;
//   default:
//     console.log("Opção invalida");
// }

// let opcao = parseInt(
//   prompt(
//     "Digite sua opção:\n1 - Consultar saldo \n2 - Sacar dinheiro \n3 - Depositar dinheiro",
//   ),
// );
// let saldo = 1000;
// switch (opcao) {
//   case 1:
//     console.log(`Seu saldo é: ${saldo}`);
//     break;
//   case 2:
//     let saque = parseInt(prompt("Digite o valor do saque"));
//     let resposta =
//       saque <= saldo ? (saldo -= saque) : console.log("Saldo insuficiente");
//     console.log(`Seu saldo é: ${saldo}`);
//     break;
//   case 3:
//     let deposito = prompt("Digite o valor do deposito");
//     saldo += +deposito;
//     console.log(`Seu saldo é: ${saldo}`);
//     break;
//   default:
//     console.log("Opção invalida");
// }

// let opcao = parseInt(
//   prompt(
//     "Digite sua opção:\n1 - Cadastrar usuário \n2 - Listar usuários \n3 - Sair do sistema",
//   ),
// );
// while(opcao != 3){
//     if(opcao == 1){
//         console.log('Usuário cadastrado')

//     }
//     if(opcao == 2){
//         console.log('Usuários listados')
//     }
//     opcao = parseInt(
//   prompt(
//     "Digite sua opção:\n1 - Cadastrar usuário \n2 - Listar usuários \n3 - Sair do sistema",
//   ),
// );
// }

// for(numeroPedidos = 0; numeroPedidos < 3; numeroPedidos++){
//     pedido = prompt('Digite seu pedido')
//     console.log(pedido)
// }

// let valor = parseInt(prompt('Digite o valor do produto'))
// let parcelas = parseInt(prompt('Digite o numero de parcelas'))
// for(parcela = 1; parcela <= parcelas;parcela++){
//     console.log(`Parcela ${parcela}x tem o valor de R$${valor/parcelas}`)
// }

// let quantidade = parseInt(prompt('Quantos produtos você comprou'))
// let valorTotal = 0
// for(produto = 1;produto <= quantidade; produto++){
//     let valor = parseInt(prompt('Digite o valor do produto'))
//     valorTotal += valor
// }
// console.log(`O valor da sua compra é ${valorTotal}`);

// let aprovados = 0
// let recuperandos = 0
// for(let alunos = 0;alunos < 10;alunos++){
//     let notaDoAluno = parseInt(prompt('Digite a nota do aluno'))
//     if(notaDoAluno >= 7){
//         aprovados++
//     }
//     else if(notaDoAluno < 7){
//         recuperandos++
//     }
//     else{
//         console.log('Número inválido')
//         alunos--
//     }
// }
// console.log(aprovados)
// console.log(recuperandos)

// let senha = prompt("Digite a senha");
// while (senha != 1234) {
//   senha = prompt("Senha incorreta, digite novamente");
// }
// console.log("Acesso liberado");

// let saldo = 1000;
// let opcao = parseInt(
//   prompt(
//     "Digite sua opção:\n1 - Consultar saldo \n2 - Saca dinheiro\n3 - Depositar dinheiro\n4 - Sair do sistema",
//   ),
// );
// while (opcao != 4) {
//   switch (opcao) {
//     case 1:
//       console.log(`O saldo atual é ${saldo}`);
//       break;
//     case 2:
//       let saque = parseInt(prompt("Valor do saque"));
//       if (saque <= saldo) {
//         saldo -= saque;
//         console.log("Saque bem sucedido");
//         console.log(`Seu saldo atual é ${saldo}`);
//       } else if (saque > saldo) {
//         console.log("Saldo insuficiente");
//       } else {
//         console.log("Valor inválido");
//       }
//       break;
//     case 3:
//       let deposito = parseInt(prompt("Valor do deposito"));
//       saldo += deposito;
//       console.log("Deposito bem sucedido");
//       console.log(`Seu saldo atual é ${saldo}`);
//       break;
//     default:
//       console.log("Número inválido");
//       break;
//   }
//   opcao = parseInt(
//     prompt(
//       "Digite sua opção:\n1 - Consultar saldo \n2 - Saca dinheiro\n3 - Depositar dinheiro\n4 - Sair do sistema",
//     ),
//   );
// }

// let confirmacao = prompt("Registrar item?");
// let valorTotal = 0;
// while (confirmacao == "s") {
//   let valor = parseInt(prompt("Digite o valor do item"));
//   if (typeof valor == "number") {
//     valorTotal += valor;
//   } else {
//     console.log("Valor inválido");
//   }
//   confirmacao = prompt("Registrar novo item?");
// }
// console.log(`O total da sua compra é ${valorTotal}`)

// let numero = parseInt(prompt('Digite um número de entre 1 e 10'))
// while(numero <= 1 || numero >= 10 ){
//   numero = parseInt(prompt('Número inválido, digite um número de entre 1 e 10'))
// }

// let numero1 = Math.floor(Math.random() * (10 - 1)) + 1;
// let numero2 = Math.floor(Math.random() * (10 - 1)) + 1;
// let opcao;
// do {
//   numero1 = Math.floor(Math.random() * (10 - 1)) + 1;
//   numero2 = Math.floor(Math.random() * (10 - 1)) + 1;
//   opcao = parseInt(
//     prompt(
//       "Digite sua opção:\n1 - Somar números aleatórios \n2 - Subtrair números aleatórios\n3 - Sair do sistema",
//     ),
//   );
//   switch (opcao) {
//     case 1:
//       console.log(`${numero1} + ${numero2 + 2} = ${numero1 + numero2}`);
//       break;
//     case 2:
//       console.log(`${numero1} - ${numero2 + 2} = ${numero1 - numero2}`);
//       break;
//   }
// } while (opcao != 3);


