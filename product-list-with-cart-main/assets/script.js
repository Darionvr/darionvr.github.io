const desserts = [
    {
        name: 'Waffle with Berries',
        type: 'Waffle',
        price: '6.50',
        action: 'Add to Cart',
    },
    {
        name: 'Vanilla Bean Crème Brûlée',
        type: 'Crème Brûlée',
        price: '7.00',
        action: 'Add to Cart',
    },
    {
        name: 'Macaron Mix of Five',
        type: 'Macaron',
        price: '8.00',
        action: 'Add to Cart'
    },
    {
        name: 'Classic Tiramisu',
        type: 'Tiramisu',
        price: '5.50',
        action: 'Add to Cart',
    },
    {
        name: 'Pistachio Baklava',
        type: 'Baklava',
        price: '4.00',
        action: 'Add to Cart',
    },
    {
        name: 'Lemon Meringue Pie',
        type: 'Pie',
        price: '5.00',
        action: 'Add to Cart',
    },
    {
        name: 'Red Velvet Cake',
        type: 'Cake',
        price: '4.50',
        action: 'Add to Cart'
    }, {
        name: 'Salted Caramel Brownie',
        type: 'Brownie',
        price: '4.50',
        action: 'Add to Cart',
    },
    {
        name: 'Vanilla Panna Cotta',
        type: 'Panna Cotta',
        price: '6.50',
        action: 'Add to Cart',
    }];

const main = document.querySelector('main');
const order = document.querySelector('.order');
let cart = {};

function updateCartList() {
    const cartList = document.querySelector('.cartlist');
    const totalCost = Object.values(cart).reduce((total, item) => total + item.quantity * item.price, 0);
    const totalCount = Object.values(cart).reduce((total, item) => total + item.quantity, 0);

    order.innerHTML = `
            <p class="yourcart">Your Cart (${totalCount})</p>
            <div class="cartlist">
              ${Object.values(cart).map(item => `
              <div class="details">
                <p class="productname">${item.name}</p>
                <p> <span class="units">${item.quantity}x</span> <span class="unitprice">@$${item.price}</span> <span class="finalprice">$${(item.quantity * item.price).toFixed(2)}</span>
                </p>
              </div>`)}
            </div>
            <div class="total">
              <p>Order Total</p>
              <p class="totalcost">$${totalCost.toFixed(2)}</p>
            </div>
            <p class="neutral"><img src="assets/images/icon-carbon-neutral.svg" alt="">This is a <strong>carbon neutral</strong> delivery</p>
            <button class="confirm">Confirm Order</button>`;



    const confirmButton = document.querySelector('.confirm');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.neworder');
    const cartSummary = document.querySelector('.cartlist-summary');

    confirmButton.addEventListener('click', () => {


        cartSummary.innerHTML = `
                    <img src="assets/images/icon-order-confirmed.svg" alt="">
                    <p class="confirmed"> Order Confirmed</p>
                    <p class="enjoy"> We hope you enjoy your food!</p>
                    <div class="cartlist">
                      ${Object.values(cart).map(item => `
                      <div class="details">
                        <img class="thumb" src="assets/images/image-${item.type}-thumbnail.jpg" alt="">
                        <div class="finaldetail">
                        <p class="productname">${item.name}</p>
                        <p> <span class="units">${item.quantity}x</span> <span class="unitprice">@$${item.price}</span> </p>
                        </div> 
                        <p class="finalprice">$${(item.quantity * item.price).toFixed(2)}</p>
                       
                      </div>`).join('')}
                    </div>
                    <div class="total">
                      <p>Order Total</p>
                      <p class="totalcost">$${totalCost.toFixed(2)}</p>
                    </div>
                    
                    `;

        modal.style.display = 'flex';
    });



    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

   
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


}

function normalizeText(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function renderCards() {
    const width = window.innerWidth;
    let source = '';

    main.innerHTML = '';
    desserts.forEach(dessert => {
        const typeFormatted = normalizeText(dessert.type).split(' ').join('-');

        if (width < 480) {
            source = `image-${typeFormatted}-mobile.jpg`;
        } else if (width < 768) {
            source = `image-${typeFormatted}-tablet.jpg`;
        } else {
            source = `image-${typeFormatted}-desktop.jpg`;
        }

        const card = `
              <div class="card">
                <img src="assets/images/${source}" alt="${dessert.type}" class="picture">
                <button class="addtocart"><img src="assets/images/icon-add-to-cart.svg" alt="Icono añadir al carrito"> Add to Cart</button>
                <div class="text">
                  <p class="type">${dessert.type}</p>
                  <p class="name">${dessert.name}</p>
                  <p class="price" data-price="${dessert.price}">$${dessert.price}</p>
                </div>
              </div>`;

        main.innerHTML += card;
    });

    const addToCartButtons = document.querySelectorAll('.addtocart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.card');
            const dessertType = card.querySelector('.type').textContent;
            const dessertName = card.querySelector('.name').textContent;
            const dessertPrice = parseFloat(card.querySelector('.price').dataset.price);
            card.querySelector('.picture').classList.add('activeborder')

            if (!cart[dessertName]) {
                cart[dessertName] = { name: dessertName, price: dessertPrice, type:dessertType, quantity: 0 };
            }
            cart[dessertName].quantity + 1;

            updateButtonContent(card);
            updateCartList();
        });
    });
}

const updateButtonContent = (card) => {
    const button = card.querySelector('.addtocart');
    const dessertName = card.querySelector('.name').textContent;

    button.innerHTML = `
              <svg class="decrement" xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
              </svg>
              <p class="quantity">${cart[dessertName].quantity}</p>
              <svg class="increment" xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
              </svg>`;
    button.classList.remove('addtocart');
    button.classList.add('counter');

    button.querySelector('.increment').addEventListener('click', () => {
        cart[dessertName].quantity++;
        button.querySelector('.quantity').textContent = cart[dessertName].quantity;
        updateCartList();
    });

    button.querySelector('.decrement').addEventListener('click', () => {
        if (cart[dessertName].quantity - 1 < 0) {
            cart[dessertName].quantity = 0;
        } else {
            cart[dessertName].quantity -= 1;
        }
        button.querySelector('.quantity').textContent = cart[dessertName].quantity;
        updateCartList();
    });
};

renderCards();
window.addEventListener('resize', renderCards);

