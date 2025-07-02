document.addEventListener('DOMContentLoaded', carregarProdutos)


async function carregarProdutos() {
  const produtos = document.querySelector("#lista-produtos")
  produtos.innerHTML = <p>ksanmrgflkçaenrtlghçkqan</p>
  
  const response = await fetch("../produtos.json")
  const data = await response.json()
  
  console.log(data)
  produtos.innerHTML = ${data.produtos[0].produto}
  
}