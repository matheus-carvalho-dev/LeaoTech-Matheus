const inputCEP = document.querySelector("#cep")
const inputRua = document.querySelector("#rua")
const inputComplemento = document.querySelector("#complemento")
const inputCidade = document.querySelector("#cidade")
const inputEstado = document.querySelector("#estado")
const inputRegiao = document.querySelector("#regiao")
const confirmacao = document.querySelector("span")

let dados
function handleInput(){
  console.log
  if(inputCEP.value.length == 8){
    const cep8 = inputCEP.value
    inputCEP.value = cep8
    confirmacao.innerText = `Seu cep é ${inputCEP.value}`
    fetch(`https://viacep.com.br/ws/${inputCEP.value}/json`).then(response=> {return response.json()}).then(dados => {inputRua.value = dados.logradouro,inputCidade.value = dados.localidade,inputEstado.value = dados.estado, inputRegiao.value = dados.regiao})

    
  }
}
inputCEP.addEventListener('input',handleInput)