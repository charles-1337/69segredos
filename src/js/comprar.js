document.addEventListener('DOMContentLoaded', function () {
    const dialog = document.getElementById('dialog');

    const produtos = [
        {
            name: 'Produto Sensual 1',
            description: 'Descrição do produto 1.',
            price: 49.90,
            image: './src/imagens/produtos/teste.jfif'
        },
        {
            name: 'Produto Sensual 2',
            description: 'Descrição do produto 2.',
            price: 59.90,
            image: './src/imagens/produtos/teste.jfif'
        },
        {
            name: 'Produto Sensual 3',
            description: 'Descrição do produto 3.',
            price: 69.90,
            image: './src/imagens/produtos/teste.jfif'
        },
        {
            name: 'Produto Sensual 4',
            description: 'Descrição do produto 4.',
            price: 79.90,
            image: './src/imagens/produtos/teste.jfif'
        },
        {
            name: 'Produto Sensual 5',
            description: 'Descrição do produto 5.',
            price: 89.90,
            image: './src/imagens/produtos/teste-2.webp'
        },
        {
            name: 'Produto Sensual 6',
            description: 'Descrição do produto 6.',
            price: 99.90,
            image: './src/imagens/produtos/teste-2.webp'
        },
        {
            name: 'Produto Sensual 7',
            description: 'Descrição do produto 7.',
            price: 109.90,
            image: './src/imagens/produtos/teste-2.webp'
        },
        {
            name: 'Produto Sensual 8',
            description: 'Descrição do produto 8.',
            price: 119.90,
            image: './src/imagens/produtos/teste-2.webp'
        }
    ];

    function showDialog(produto) {
        document.getElementById('productName').innerText = produto.name;
        document.getElementById('productDescription').innerText = produto.description;
        document.getElementById('priceValue').innerText = produto.price.toFixed(2);
        document.getElementById('productImage').src = produto.image;

        dialog.style.display = 'block';
    }

    function closeDialog() {
        dialog.style.display = 'none';
    }

    const buyButtons = document.querySelectorAll('.btn-comprar');
    buyButtons.forEach((button, index) => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            showDialog(produtos[index]);
        });
    });

    document.getElementById('addToCartButton').addEventListener('click', function () {
        showNotification('Produto adicionado ao carrinho!'); // Notificação em vez de alert
        closeDialog();
    });

    document.getElementById('payButton').addEventListener('click', function () {
        showNotification('Redirecionando para pagamento...'); // Notificação em vez de alert
        closeDialog();
    });

    document.getElementById('closeDialog').addEventListener('click', closeDialog);

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && dialog.style.display === 'block') {
            closeDialog();
        }
    });

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.innerText = message;
        notification.className = 'notification';
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 4000);
    }
});
