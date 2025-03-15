// simulação de adicão de produtos ao carrinho

const botoesAdicionar = document.querySelectorAll('.adicionar');
const listaPedido = document.getElementById('listapedidos');
const totalElemento = document.getElementById('total');
let total = 0;

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const produtos = botao.parentElement;
        const nome = produtos.querySelector('h3').textContent;
        const preco = parseFloat(produtos.querySelector('.preco').textContent.replace('R$', '').trim());

        const itemPedido = document.createElement('li');
        itemPedido.textContent = `${nome}  - R$ ${preco.toFixed(2)}`;

        // Add the item to the list
        listaPedido.appendChild(itemPedido);

        // Update the total
        total += preco;
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});

const botaoFinalizarPedido = document.getElementById('finalizar-pedido');
botaoFinalizarPedido.addEventListener('click', () => {
    alert("Pedido realizado com sucesso");

    // Optionally, you could clear the order after finalization
    listaPedido.innerHTML = ''; // Clear the list of items
    total = 0; // Reset total
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`; // Reset total display
});
