//Desktop
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const backgroundGeneral = document.querySelector('.background-general');
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isAsideClosed = myOrders.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isAsideClosed){
        myOrders.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//Mobile
const mobileHamburguerIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

mobileHamburguerIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
    const isAsideClosed = myOrders.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');
    
    if(!isAsideClosed){
        myOrders.classList.add('inactive');
    }

    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//Carrito de la compra
const carritoCompraIcon = document.querySelector('.navbar-shopping-cart');
const myOrders = document.querySelector('.product-detail');

carritoCompraIcon.addEventListener('click', toggleAsideCarrito);

function toggleAsideCarrito(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isProductDetailClosed = productDetail.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    if(!isProductDetailClosed){
        productDetail.classList.add('inactive');
    }

    myOrders.classList.toggle('inactive');
}

//Product detail al clicar
const productDetail = document.querySelector('.product-detail-secondary');
const iconProductDetailClose = document.querySelector('.product-detail-close-secondary');
iconProductDetailClose.addEventListener('click', closeProductDetail);

function closeProductDetail(){
    productDetail.classList.add('inactive');
}

function openProductDetailAside(){
    const isAsideClosed = myOrders.classList.contains('inactive');

    if(!isAsideClosed){
        myOrders.classList.add('inactive');
    }

    productDetail.classList.remove('inactive');
}


//Logic
const cardsContainer = document.querySelector('.cards-container');

const productList = [];

productList.push({
    nombreProducto: 'Bike',
    precio: 120,
    image: '../images/Bike.PNG'
});

productList.push({
    nombreProducto: 'Pantalla',
    precio: 347,
    image: '../images/Bike.PNG'
});

productList.push({
    nombreProducto: 'CPU',
    precio: 647,
    image: '../images/Bike.PNG'
});

/* <div class="product-card">
    <img src="../images/Bike.PNG" alt="" />
    <div class="product-info">
        <div>
            <p>120,00</p>
            <p>Bike</p>
        </div>
        <figure>
            <img src="../Platzi_YardSale_Icons/bt_add_to_cart.svg" alt="" />
        </figure>
    </div>
</div> */


function renderProducts(arr){
    for(product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openProductDetailAside);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.precio;
    
        const productName = document.createElement('p');
        productName.innerText = product.nombreProducto;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src', '../Platzi_YardSale_Icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);