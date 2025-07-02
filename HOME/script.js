document.addEventListener('DOMContentLoaded', carregarProdutos)

async function carregarProdutos(){
    const produtos = document.querySelector("#lista-produtos")

    produtos.innerHTML = `<p>Carregando produtos...</p>`

    try {
        const response = await fetch("../produtos.json")
        const data = await response.json()

        produtos.innerHTML = "";

    data.produtos.forEach(prod => {
      produtos.innerHTML += `
        <article class="card">
          <h2>${prod.produto}</h2>
          <p>${prod.detalhe}</p>
          <p><strong>R$ ${prod.preco.toFixed(2)}</strong></p>
          <img src="${prod.imagem}" alt="${prod.produto}" width="200">
        </article>
      `;
    });


    } catch (erro) {
        produtos.innerHTML = `<p>Erro ao carregar os produtos.</p>`
        console.error(erro)
    }
}