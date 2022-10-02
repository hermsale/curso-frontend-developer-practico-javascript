// general

// const mainContainer = document.querySelector('.container');

// desktop ///////////////////////////////////////////

// boton para mostrar u ocultar el desktop menu
const navbarEmail = document.querySelector('.navbar-email');
// desktop menu
const desktopMenu = document.querySelector('.desktop-menu');

///////// mobile //////////////////////////////////////////////////

// icono hamburguesa - boton
const burgerIcon = document.querySelector('.menu')
// mobile menu - menu desplegable
const mobileMenu = document.querySelector('.mobile-menu');

/// aside shopping cart ///////////////////////////////////////////
// boton shopping cart 
const shoppingCart = document.querySelector('.navbar-shopping-cart');
// muestra aside navbar shopping cart 
const asideShoppingCart = document.querySelector('#shopping-cart');

const cardsContainer = document.querySelector('.cards-container');

/// contenedor que muestra el aside product detail ///////////////////////////////////////////
//  const productDetailContainer = document.querySelector('#product-detail');
//  boton para cerrar el product detail
 const buttonProductDetailContainer = document.querySelector('.product-detail-close');

//////////////////////////// EVENTOS //////////////////////////
// desktop menu 
navbarEmail.addEventListener('click',toggleDesktopMenu);

// mobile menu 
burgerIcon.addEventListener('click',toggleMobileMenu);

// Aside shopping cart 
shoppingCart.addEventListener('click',toggleAsideShoppingCart);

// boton para cerrar el product detail container
// buttonProductDetailContainer.addEventListener('click',closeProductDetailContainer);

/////////////////////////// FUNCIONES /////////////////////////

// desktop 
function toggleDesktopMenu(){
    // intercambiamos entre agregar o quitar la clase 
    desktopMenu.classList.toggle('inactive')
    // si estuviera activo el asideShoppingCart, lo oculto 
    asideShoppingCart.classList.add('inactive');
}

// mobile 
// activa transicion del menu mobile 
function toggleMobileMenu(){
    mobileMenu.classList.toggle('menuMobile-activo')

    // corroboro si esta abierto el aside shopping cart 
    if(!asideShoppingCart.classList.contains('inactive')){
        // si esta abierto, lo cierro 
        console.log('esta abierto');
        asideShoppingCart.classList.toggle('inactive');
    }

    // productDetailContainer.classList.add('inactive');
}

// aside shopping cart 
function toggleAsideShoppingCart(){
    asideShoppingCart.classList.toggle('inactive');
    // mainContainer.classList.add('darken');


    // si esta abierto el menu mobile, lo cierro 
    // metodo contains corrobora si ese elemento contiene la clase 
    if(mobileMenu.classList.contains('menuMobile-activo')){
        mobileMenu.classList.toggle('menuMobile-activo')
    }

    // intento de ocultar y mostrar menu 
    // asideShoppingCart.classList.toggle('aside-activo');
    
    // si estuviera activo el desktopMenu, lo oculto 
    desktopMenu.classList.add('inactive');

    // pruebas con metodos classList ///////////////
    // enumera la cantidad de clases 
    console.log(mobileMenu.classList.length);
    const cantidadMobileMenu = mobileMenu.classList.length;
    for(i=0;i<cantidadMobileMenu;i++){
        // cita las clases del elemento
        console.log(mobileMenu.classList.item(i));   
    }

    
}

 // funcion para renderizar el product detail 
function openProductDetailAside(productDetail){
    // si estuviera activo el asideShoppingCart, lo oculto 
    asideShoppingCart.classList.add('inactive');
    
    console.log(productDetail);
    
    // enviamos informacion a la funcion de renderizado de product-detail
    // asideProductDetailContainer.classList.remove('inactive');
    renderProduct(productDetail);
}

// funcion para cerrar el product detail aside 


    // CREACION DEL ELEMENTO CON EL DOM  y CARGA DE INTERFAZ
function renderProducts(arr){
                
            arr.map(product =>{
                const productCard = document.createElement('div');
                // le agregamos la clase al Elemento
                productCard.classList.add('product-card');
        
                // creamos un elemento img
                const productImg = document.createElement('img');
                // modificamos el atributo src, por medio de setAttribute 
                productImg.setAttribute('src',product.img);
    
                // creamos un evento al clickear en la imagen para abrir el detalle
                productImg.onclick = () => openProductDetailAside(product);
        
                 // creamos el div
                 const productInfo = document.createElement('div');
                 // le agregamos la clase al Elemento
                 productInfo.classList.add('product-info');
        
                 const productInfoDiv = document.createElement('div');
        
                //  parrafo que contendra el precio 
                 const productPrice = document.createElement('p');
        
                // incertamos el precio
                productPrice.innerText = '$'+product.price;
        
                // parrafo que contendra el nombre 
                const productName = document.createElement('p');
                // incertamos el nombre 
                productName.innerText = product.name;
        
                // colocamos dentro del div los dos parrafos 
                productInfoDiv.appendChild(productPrice);
                productInfoDiv.appendChild(productName);
        
                const productInfoFigure = document.createElement('figure');
        
                const productImgCart = document.createElement('img');
                productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        
                // metemos dentro de la etiqueta figure, el productInfoFigure
                productInfoFigure.appendChild(productImgCart);
        
                // agregamos a productInfo los dos bloques productInfo y el figure 
                productInfo.appendChild(productInfoDiv);
                productInfo.appendChild(productInfoFigure);
        
                // agregamos a productCard los bloques 
                productCard.appendChild(productImg);
                productCard.appendChild(productInfo);
        
                // agregamos al cards Product el producto
        
                cardsContainer.appendChild(productCard);
            })

    }

///////////// AGREGAMOS MANUALMENTE PRODUCTOS AL ARRAY ////////////////
// creamos un array vacio 
const productList = [];

// caracteristicas de los elementos del array: imagen, nombre y precio. 
// array de objetos 
productList.push({
    name: 'Byke',
    price: 120,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'PC',
    price: 1400,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: 'Smart TV',
    price: 12000,
    img:"https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

////////////// RENDERIZADO DE PRODUCTOS ///////////////// 
renderProducts(productList);

function renderProduct(product){
    const mainContainerDetail = document.querySelector('.main-product-detail');
    const asideProductDetailContainer = document.createElement('aside');
    // if(mainContainerDetail.classList.contains('inactive')){
    //     mainContainerDetail.classList.remove('inactive');
    // }
    // console.log(product);
    // asideProductDetailContainer.className = 'asideProductDetailContainer';
    // productDetailClose.classList.add = 'inactive';
    asideProductDetailContainer.setAttribute('id','product-detail')


    // asideProductDetailContainer.className = "inactive";
    asideProductDetailContainer.innerHTML = `
    <div class="product-detail-close">
        <img src="./icons/icon_close.png" alt="close">
    </div>
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
    <div class="product-info">
        <p>$ ${product.price}</p>
        <p>${product.name}</p>
        <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
        <button class="primary-button add-to-cart-button">
            <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
            Add to cart
        </button>
    </div>
    `;

    mainContainerDetail.appendChild(asideProductDetailContainer);
    const productDetailClose = document.querySelector('.product-detail-close');
    productDetailClose.addEventListener('click',closeProductDetailContainer);
}

// revisar boton de cierre productdetailcontainer 
function closeProductDetailContainer(){
    
    const mainContainerDetail = document.querySelector('.main-product-detail');
    mainContainerDetail.innerHTML = '';
}

/////////////////// ESTO HAY QUE RECREAR ///////////////////////////
{/* <aside id="product-detail" class="inactive">
<div class="product-detail-close">
  <img src="./icons/icon_close.png" alt="close">
</div>
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike">
<div class="product-info">
  <p>$35,00</p>
  <p>Bike</p>
  <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
  <button class="primary-button add-to-cart-button">
    <img src="./icons/bt_add_to_cart.svg" alt="add to cart">
    Add to cart
  </button>
</div>
</aside> */}

