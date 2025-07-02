
fetch("/HOME/produtos.json")
    .then(res => res.json())
    .then(produtos => {
      alert(`${produtos} produtos encontrados!`);
        const container = document.getElementById("produtos");
        produtos.forEach(prod => {
            container.innerHTML += `
            <article class="card">
              <div class="card-image">
                <img src="${prod.imagem}" alt="${prod.produto}">
              </div>
              <div class="card-content">
                <h2>${prod.produto}</h2>
                <p>${prod.detalhe}</p>
                <p><strong>R$ ${prod.preco.toFixed(2)}</strong></p>
                <button class="btn">Fazer Pedido</button>
              </div>
            </article>
          `;
        });
    })
    .catch(err => {
        document.getElementById("lista-produtos").innerHTML = "<p>Erro ao carregar produtos.</p>";
        console.error(err);
    });
