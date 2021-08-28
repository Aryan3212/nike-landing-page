const calculateTax = (price, taxRateInDecimal = 0.15) => price * taxRateInDecimal;

const taxedPrice = (price) => calculateTax(price) + price;


const calculateTotalPrice = (shoppingCartList) => {
    const sumFunction = (initialSum, currentValue) => initialSum + taxedPrice(currentValue);
    return shoppingCartList.reduce(sumFunction, 0);
}

const renderCart = () => {

}

const addShoeToCart = () => {

}
const removeShoeFromCart = () => {
    
}
// get Data from database and populate products slide

const shoeData = {
    1: {
        desc:"red-shoe",
        price: 250
    },
    2: {
        desc:"purple-shoe",
        price: 350
    },
    3: {
        desc:"black-shoe",
        price: 550
    }
}


const cart = []
if(localStorage.getItem("cart")){
    cart = JSON.parse(localStorage.getItem("cart"));
 }
if (cart) {
    // populate cart1
}

// Event delegation


product_buttons = document.querySelectorAll("#product_btn");

quantity_plus_btns = document.querySelectorAll(".cart_estimation .btn-outline-warning");

color_changers = document.querySelectorAll(".cart_estimation .btn-outline-warning");



console.dir(product_buttons)
product_buttons.forEach((button) => {
    button.addEventListener('click', () => {
      addShoeToCart(button)
    });
    button['id'] 
  });




// const cart = [250,250,250,250];

// console.log(calculateTotalPrice(cart));
