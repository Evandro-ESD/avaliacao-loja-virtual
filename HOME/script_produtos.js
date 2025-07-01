SCRIPT

document.addEventListener('DOMContentLoaded', () => {
    fetch('produtos.json')
        .then(response => response.json())
        .then(data => {
            const produtosArray = data.produtos;
            const produtosContainer = document.getElementById('produtos-container');

            if (!produtosContainer) {
                console.error('Erro: Elemento com id "produtos-container" não foi encontrado no HTML.');
                return;
            }

            produtosArray.forEach(produto => {
                const card = document.createElement('div');
                card.className = 'produto-card'; // Use uma classe para estilizar no CSS

                card.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.produto}">
                    <h4>${produto.produto}</h4>
                    <p>${produto.detalhe}</p>
                    <p class="preco">R$ ${produto.preço.toFixed(2).replace('.', ',')}</p>
                    <button>Ver detalhes</button>
                `;

                produtosContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Erro ao carregar ou processar o arquivo produtos.json:', error));
});