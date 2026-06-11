const prompt = require("prompt-sync")();
require("dotenv").config();
const SUPABASE_URL = process.env.SUPABASE_URL_ATIVIDADE;
const SUPABASE_KEY = process.env.SUPABASE_KEY_ATIVIDADE;
const bcrypt = require("bcrypt");
const { createClient } = require("@supabase/supabase-js");
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

async function inserirCliente() {
  let nome = prompt("Digite o nome do autor:");
  let nascionalidade = prompt("Digite a nacionalidade do autor:");
  let novoAutor = { nome: nome, nascionalidade: nascionalidade };
  const { data, erro } = await supabase
    .from("biblioteca_autor")
    .insert(novoAutor)
    .select();
  console.log(data, erro);
}
async function listarLivros() {
  const { data, error } = await supabase.from("biblioteca_livro").select("*");
  if (error) {
  }
  data.forEach((livro) => {
    console.log(`Nome: ${livro.titulo}\nGênero: ${livro.genero}`);
  });
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