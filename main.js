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

       
        listaPedido.appendChild(itemPedido);

  
        total += preco;
        totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`;
    });
});

const botaoFinalizarPedido = document.getElementById('finalizar-pedido');
botaoFinalizarPedido.addEventListener('click', () => {
    alert("Pedido realizado com sucesso");
    listaPedido.innerHTML = ''; 
    total = 0;
    totalElemento.textContent = `Total: R$ ${total.toFixed(2)}`; 
});
