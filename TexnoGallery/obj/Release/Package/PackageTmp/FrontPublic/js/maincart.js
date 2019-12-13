﻿
///*****************************************/
//'use strict';

//let cart = JSON.parse(localStorage.getItem('cart')) || [];
//const cartDOM = document.querySelector('.mini_cart');
//const addToCartButtonsDOM = document.querySelectorAll('[data-action="Add_To_Cart"]');
//if (cart.length > 0) {
//    $(".mini_cart").empty();
//    cart.forEach(cartItem => {
//        const product = cartItem;
//        insertItemToDOM(product);
//        countCartTotal();
//        addToCartButtonsDOM.forEach(addToCartButtonDOM => {
//            const productDOM = addToCartButtonDOM.parentNode.parentNode.parentNode.parentNode;
//            if (productDOM.querySelector('.prod_name').innerText.trim() === product.name.trim()) {
//                handleActionButtons(addToCartButtonDOM, product);
//            }
//        });

//     });
//}

//addToCartButtonsDOM.forEach(addToCartButtonDOM => {
//    addToCartButtonDOM.addEventListener('click', () => {
//        const productDOM = addToCartButtonDOM.parentNode.parentNode.parentNode.parentNode;
//        const product = {
//            image: productDOM.querySelector('.prod_image').getAttribute('src'),
//            name: productDOM.querySelector('.prod_name').innerText,
//            price: productDOM.querySelector('.prod_price').innerText,
//            quantity: 1,
//            pId: productDOM.querySelector(".hidePId").getAttribute('value'),
//            totalPrice:0
//        };
//        const isInCart = cart.filter(cartItem => cartItem.name.trim() === product.name.trim()).length > 0;

//        if (!isInCart) {
//            insertItemToDOM(product);
//            cart.push(product);
//            localStorage.setItem('cart', JSON.stringify(cart));
//            countCartTotal();
//            handleActionButtons(addToCartButtonDOM, product);
//            countProductTotal();

//        }
//    });
//});
////handleActionButtons(addToCartButtonsDOM, product)



//function insertItemToDOM(product) {
//    cartDOM.insertAdjacentHTML('beforeend', `


//<div class="cart_item cart-lay-item">
//<input type="hidden" value=${product.pId}">
//<div class="cart_img">
//<a class= href="#"><img src="${product.image}" alt="${product.name}"></a>
//</div>
//<div class="cart_info">
//<a class="cart_item_name" href="#">${product.name}</a>
//<span class="quantity">Qty: ${product.quantity}</span>
//<span class="price_cart">${(product.totalPrice === 0 ? product.price : product.totalPrice)}</span>
//</div>
//<div class="cart_remove">
// <a href="#"><i class="fas fa-times"></i></a>
//</div>
//</div>
  
//  `);
//    addCartFooter();

//}
////cart.forEach(cartItem => {

////    var product = cartItem;

////    const cartItemsDOM = cartDOM.querySelectorAll('.cart_item');
////    cartItemsDOM.forEach(cartItemDOM => {
////        if (cartItemDOM.querySelector('.cart_item_name').innerText.toLowerCase().trim() === product.name.toLowerCase().trim()) {
////            cartItemDOM.querySelector('[data-action="Increase_Item"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
////            cartItemDOM.querySelector('[data-action="Decrease_Item"]').addEventListener('click', () => decreaseItem(product, cartItemDOM));
////            cartItemDOM.querySelector('[data-action="Remove_Item"]').addEventListener('click', () => removeItem(product, cartItemDOM));
////        }
////    });

////});

//function handleActionButtons(addToCartButtonDOM, product) {
//    //addToCartButtonDOM.innerText = 'Səbətə Əlavə Edildi';
//    addToCartButtonDOM.disabled = true;
//    const cartItemsDOM = cartDOM.querySelectorAll('.cart_item');
//    cartItemsDOM.forEach(cartItemDOM => {
//        if (cartItemDOM.querySelector('.cart_item_name').innerText.toLowerCase().trim() === product.name.toLowerCase().trim()) {
//            cartItemDOM.querySelector('[data-action="Increase_Item"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
//            cartItemDOM.querySelector('[data-action="Decrease_Item"]').addEventListener('click', () => decreaseItem(product, cartItemDOM));
//            cartItemDOM.querySelector('[data-action="Remove_Item"]').addEventListener('click', () => removeItem(product, cartItemDOM));
//        }
//    });
//}

//function increaseItem(product, cartItemDOM) {
//    cart.forEach(cartItem => {

//        if (cartItem.name === product.name) {
//            cartItemDOM.querySelector('.cart_item_quantity').innerText = ++cartItem.quantity;
//            cartItem.totalPrice = parseInt(cartItem.price) * cartItem.quantity;
            
//            cartItemDOM.querySelector(".cart_item_price").innerText = cartItem.totalPrice+" Azn";

//            cartItemDOM.querySelector('[data-action="Decrease_Item"]').classList.remove('btn-danger');
//            localStorage.setItem('cart', JSON.stringify(cart));
//            countCartTotal();
//        }
//    });
//}

//function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
//    cart.forEach(cartItem => {
//        if (cartItem.name === product.name) {
//            if (cartItem.quantity > 1) {
//                cartItemDOM.querySelector('.cart_item_quantity').innerText = --cartItem.quantity;
//                cartItem.totalPrice = parseInt(cartItem.price) * cartItem.quantity;
//                cartItemDOM.querySelector(".cart_item_price").innerText = cartItem.totalPrice + " Azn";

//                localStorage.setItem('cart', JSON.stringify(cart));
//                countCartTotal();
//            } else {
//                removeItem(product, cartItemDOM, addToCartButtonDOM);
//            }

//            if (cartItem.quantity === 1) {
//                cartItemDOM.querySelector('[data-action="Decrease_Item"]').classList.add('btn-danger');
//            }
//        }
//    });
//}

//function removeItem(product, cartItemDOM) {
//    cartItemDOM.classList.add('cart_item_removed');
//    setTimeout(() => cartItemDOM.remove(), 250);
//    cart = cart.filter(cartItem => cartItem.name !== product.name);
//    localStorage.setItem('cart', JSON.stringify(cart));
//    countCartTotal();

//    //addToCartButtonDOM.innerText = 'Səbətə Əlavə Et';
//    //addToCartButtonDOM.disabled = false;
//    countProductTotal();
//    if (cart.length < 1) {
//        document.querySelector('.cart-footer').remove();
//    }
//}

//function addCartFooter() {
//    if (document.querySelector('.cart-footer') === null) {
//        cartDOM.insertAdjacentHTML('afterend', `
//    <div class="cart-footer">
//         <button class="btn btn-danger" data-action="Clear_Cart">Səbəti Təmizlə</button>
//         <a class="btn btn-primary" href="/Product/Checkout" data-action="Checkout">Ödə</a>

//    </div>
//`);
//        document.querySelector('[data-action="Clear_Cart"]').addEventListener('click', () => clearCart());
//        document.querySelector('[data-action="Checkout"]').addEventListener('click', () => checkOut());
//    }
//} 
//function clearCart() {
//    cartDOM.querySelectorAll('.cart_item').forEach(cartItemDOM => {
//        cartItemDOM.classList.add('cart_item_removed');
//        setTimeout(() => cartItemDOM.remove(), 250);
//    });

//    cart = [];
//    localStorage.removeItem('cart');
   
//    countProductTotal();
//    addToCartButtonsDOM.forEach(addToCartButtonDOM => {
//        addToCartButtonDOM.innerText = 'Səbətə Əlavə Et';
//        addToCartButtonDOM.disabled = false;

//    });

//}


//function countCartTotal() {
//    let cartTotal = 0;
//    cart.forEach(cartItem => {
//        cartTotal += parseInt(cartItem.quantity) * parseInt(cartItem.price);
//    });
//    document.querySelector("[data-action='Checkout']").innerText = "Ödə " + cartTotal + " Azn";
//}
//countProductTotal();
//function countProductTotal() {
//    //$(".header-cart .items").empty();
//    //document.querySelector(".header-cart .items").innerText = "("+cart.length+")";
    
//}

////document.getElementById('cart').addEventListener('click',
////    function () {
////        document.querySelector('.bg-modal').style.display = 'flex';
////        $("body").addClass("modalActive");
////    });

////document.querySelector('.close-modal').addEventListener('click',
////    function () {
////        document.querySelector('.bg-modal').style.display = 'none';
////        $("body").removeClass("modalActive");

////    });

///*********************************************/
















/*****************************************/
'use strict';

let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartDOM = document.querySelector('.mini_cart_lay');
const addToCartButtonsDOM = $('[data-action="Add_To_Cart"]');
if (cart.length > 0) {
    $(".mini_cart_lay").empty();
    cart.forEach(cartItem => {
        const product = cartItem;
        insertItemToDOM(product);
        countCartTotal();
        addToCartButtonsDOM.each(function (id, addToCartButtonDOM) {
            const productDOM = $(addToCartButtonDOM).parents(".single_product");
            if (productDOM.find('.prod_name').text().trim() === product.name.trim()) {
                handleActionButtons(addToCartButtonDOM, product);
            }
        });

    });
}

$('[data-action="Add_To_Cart"]').each(function(id,addToCartButtonDOM) {
    $(addToCartButtonDOM).on('click', function () {
        const productDOM = $(this).parents(".single_product");
        const product = {
            image: productDOM.find('.prod_image').attr('src'),
            name: productDOM.find('.prod_name').text(),
            price: productDOM.find('.prod_price').text(),
            quantity: 1,
            pId: productDOM.find(".hidePId").attr('value'),
            totalPrice: 0
        };
        const isInCart = cart.filter(cartItem => cartItem.name.trim() === product.name.trim()).length > 0;

        if (!isInCart) {
            insertItemToDOM(product);
            cart.push(product);
            localStorage.setItem('cart', JSON.stringify(cart));
            countCartTotal();
            handleActionButtons(addToCartButtonDOM, product);
            countProductTotal();

        }
    });
});

function insertItemToDOM(product) {
    cartDOM.insertAdjacentHTML('beforeend', `


<div class="cart_item cart-lay-item mt-2 mb-2" style="border-bottom:.7px solid gold;width:100%">
<input type="hidden" value=${product.pId}">
<div class="cart_img">
<a class= href="#"><img src="${product.image}" alt="${product.name}"></a>
</div>
<div class="cart_info">
<a class="cart_item_name" href="#"><span>${product.name}</span></a>
<span class="quantity">Qty: ${product.quantity}</span>
<span class="price_cart">${(product.totalPrice === 0 ? product.price : product.totalPrice)}</span>
</div>
<div data-action="Remove_Item" class="cart_remove">
 <a href="#"><i class="fas fa-times"></i></a>
</div>
<hr>
</div>
  `);
    addCartFooter();

}

const cartItemsDOM = cartDOM.querySelectorAll('.cart-lay-item');
cartItemsDOM.forEach(cartItemDOM => {
    cart.forEach(cartItem => {
        var product = cartItem;
        console.log(product.name.toLowerCase().trim())
        console.log("-----")
        console.log(cartItemDOM.querySelector('.cart_item_name span').innerHTML.trim())
        if (cartItemDOM.querySelector('.cart_item_name span').innerHTML.toLowerCase().trim() === product.name.toLowerCase().trim()) {

            //cartItemDOM.querySelector('[data-action="Increase_Item"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
            //cartItemDOM.querySelector('[data-action="Decrease_Item"]').addEventListener('click', () => decreaseItem(product, cartItemDOM));
            cartItemDOM.querySelector('[data-action="Remove_Item"]').addEventListener('click', () => removeItem(product, cartItemDOM));
        }
    });

});

function handleActionButtons(addToCartButtonDOM, product) {
    addToCartButtonDOM.innerText = 'Səbətə Əlavə Edildi';
    addToCartButtonDOM.disabled = true;
    const cartItemsDOM = cartDOM.querySelectorAll('.cart_item');
    cartItemsDOM.forEach(cartItemDOM => {
        if (cartItemDOM.querySelector('.cart_item_name span').innerHTML.toLowerCase().trim() === product.name.toLowerCase().trim()) {
            cartItemDOM.querySelector('[data-action="Remove_Item"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
        }
    });
}

function increaseItem(product, cartItemDOM) {
    cart.forEach(cartItem => {

        if (cartItem.name === product.name) {
            cartItemDOM.querySelector('.cart_item_quantity').innerText = ++cartItem.quantity;
            cartItem.totalPrice = parseInt(cartItem.price) * cartItem.quantity;

            cartItemDOM.querySelector(".cart_item_price").innerText = cartItem.totalPrice + " Azn";

            cartItemDOM.querySelector('[data-action="Decrease_Item"]').classList.remove('btn-danger');
            localStorage.setItem('cart', JSON.stringify(cart));
            countCartTotal();
        }
    });
}

function decreaseItem(product, cartItemDOM, addToCartButtonDOM) {
    cart.forEach(cartItem => {
        if (cartItem.name === product.name) {
            if (cartItem.quantity > 1) {
                cartItemDOM.querySelector('.cart_item_quantity').innerText = --cartItem.quantity;
                cartItem.totalPrice = parseInt(cartItem.price) * cartItem.quantity;
                cartItemDOM.querySelector(".cart_item_price").innerText = cartItem.totalPrice + " Azn";

                localStorage.setItem('cart', JSON.stringify(cart));
                countCartTotal();
            } else {
                removeItem(product, cartItemDOM, addToCartButtonDOM);
            }

            if (cartItem.quantity === 1) {
                cartItemDOM.querySelector('[data-action="Decrease_Item"]').classList.add('btn-danger');
            }
        }
    });
}

function removeItem(product, cartItemDOM,addCrtButtonDom) {
    cartItemDOM.classList.add('cart_item_removed');
    setTimeout(() => cartItemDOM.remove(), 250);
    cart = cart.filter(cartItem => cartItem.name !== product.name);
    localStorage.setItem('cart', JSON.stringify(cart));
    countCartTotal();

    addCrtButtonDom.innerHTML="<span class='fas fa-shopping-cart'></span>";
    addCrtButtonDom.disabled = false;
    countProductTotal();
    if (cart.length < 1) {
        document.querySelector('.cart-footer').remove();
    }
}

function addCartFooter() {
    if (document.querySelector('.cart-footer') === null) {
        document.querySelector('.mini_cart').insertAdjacentHTML('beforeend', `
<div style="position:relative;width:100%">
<div class="cart-footer d-flex justify-content-between">
         <button class="btn btn-danger btn-sm" data-action="Clear_Cart">Səbəti Təmizlə</button>
         <a class="btn btn-primary btn-sm" href="/Product/Checkout" data-action="Checkout">Ödə</a>
    </div>
</div>    

`);
        document.querySelector('[data-action="Clear_Cart"]').addEventListener('click', () => clearCart());
        document.querySelector('[data-action="Checkout"]').addEventListener('click', () => checkOut());
    }
}
function clearCart() {
    cartDOM.querySelectorAll('.cart_item').forEach(cartItemDOM => {
        cartItemDOM.classList.add('cart_item_removed');
        setTimeout(() => cartItemDOM.remove(), 250);
    });

    cart = [];
    localStorage.removeItem('cart');
        document.querySelector('.cart-footer').remove();
    addToCartButtonsDOM.each(function (vl, addCrtButtonDom) {
        addCrtButtonDom.innerHTML = "<span class='fas fa-shopping-cart'></span>";
        addCrtButtonDom.disabled = false;
    });
    countProductTotal();

}


function countCartTotal() {
    let cartTotal = 0;
    cart.forEach(cartItem => {
        cartTotal += parseInt(cartItem.quantity) * parseInt(cartItem.price);
    });
    document.querySelector("[data-action='Checkout']").innerText = "Ödə " + cartTotal + " Azn";
}
countProductTotal();
function countProductTotal() {
    $(".mini_cart_wrapper .cart_quantity").empty();
    $(".mini_cart_wrapper .cart_quantity").text( cart.length);

}


/*********************************************/

//document.getElementById('cart').addEventListener('click',
//    function () {
//        document.querySelector('.bg-modal').style.display = 'flex';
//        $("body").addClass("modalActive");
//    });

//document.querySelector('.close-modal').addEventListener('click',
//    function () {
//        document.querySelector('.bg-modal').style.display = 'none';
//        $("body").removeClass("modalActive");

//    });





