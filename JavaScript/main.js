// Handle active state
function handleActive(ev) {

// Remove Active Class From All Childrens
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {

        element.classList.remove("active");
    });
    // Add Active Class On Self
    ev.target.classList.add("active");
}

//Start filter and products
let mobilesbtn = document.getElementById("mobilesbtn");
let laptopsbtn = document.getElementById("laptopsbtn");
let watchesbtn = document.getElementById("watchesbtn");
let screensbtn = document.getElementById("screensbtn");
let DELLbtn = document.getElementById("DELLbtn");
let HPbtn = document.getElementById("HPbtn");
let OPPObtn = document.getElementById("OPPObtn");
let Casiobtn = document.getElementById("Casiobtn");
let mobiles = document.getElementById("mobils");
let laptops = document.getElementById("laptops");
let watchs = document.getElementById("watchs");
let screens = document.getElementById("screens");
let dell = document.getElementById("dell");
let hp = document.getElementById("hp");
let oppo = document.getElementById("oppo");
let casio = document.getElementById("casio");
//click on filter btns
mobilesbtn.onclick = function () {
    laptops.style.display = "none";
    mobiles.style.display = "block";
    watchs.style.display = "none";
    screens.style.display = "none";
    dell.style.display = "none";
    hp.style.display = "none";
    oppo.style.display = "none";
    casio.style.display = "none";
};
laptopsbtn.onclick = function () {
    laptops.style.display = "block";
    mobiles.style.display = "none";
    watchs.style.display = "none";
    screens.style.display = "none";
    dell.style.display = "none";
    hp.style.display = "none";
    oppo.style.display = "none";
    casio.style.display = "none";
};
watchesbtn.onclick = function () {
    laptops.style.display = "none";
    mobiles.style.display = "none";
    watchs.style.display = "block";
    screens.style.display = "none";
    dell.style.display = "none";
    hp.style.display = "none";
    oppo.style.display = "none";
    casio.style.display = "none";
};
screensbtn.onclick = function () {
    laptops.style.display = "none";
    mobiles.style.display = "none";
    watchs.style.display = "none";
    screens.style.display = "block";
    dell.style.display = "none";
    hp.style.display = "none";
    oppo.style.display = "none";
    casio.style.display = "none";
};
DELLbtn.onclick = function () {
    laptops.style.display = "none";
    mobiles.style.display = "none";
    watchs.style.display = "none";
    screens.style.display = "none";
    dell.style.display = "block";
    hp.style.display = "none";
    oppo.style.display = "none";
    casio.style.display = "none";
};
HPbtn.onclick = function () {
    laptops.style.display = "none";
    mobiles.style.display = "none";
    watchs.style.display = "none";
    screens.style.display = "none";
    dell.style.display = "none";
    hp.style.display = "block";
    oppo.style.display = "none";
    casio.style.display = "none";
};
OPPObtn.onclick = function () {
    laptops.style.display = "none";
    mobiles.style.display = "none";
    watchs.style.display = "none";
    screens.style.display = "none";
    dell.style.display = "none";
    hp.style.display = "none";
    oppo.style.display = "block";
    casio.style.display = "none";
};
Casiobtn.onclick = function () {
    laptops.style.display = "none";
    mobiles.style.display = "none";
    watchs.style.display = "none";
    screens.style.display = "none";
    dell.style.display = "none";
    hp.style.display = "none";
    oppo.style.display = "none";
    casio.style.display = "block";
};
//Handle active state on filter li
let filterLi = document.querySelectorAll(".all .filter ul li");
// Loop On All List Items
for (var i = 0; i < filterLi.length; i++) {

// Click On Every List Items
    filterLi[i].addEventListener("click", (e) => {
        handleActive(e);
    });
}
//End filter and products

//activate column class on ul
let menu = document.getElementById("menu");
let list = document.getElementById("list");
let toggle = true;
menu.onclick = function () {
    if (toggle) {
        list.classList.add('column');
        toggle = false;
    } else {
        list.classList.remove('column');
        toggle = true;
    }
};
// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

    if (e.target !== menu && e.target !== list) {

        // Check If Menu Is Open
        if (list.classList.contains("column")) {

            // Toggle Class "open" On Links
            list.classList.toggle("column");
        }
    }
});

//Start Slider

// Get Slider Items | Array.form [ES6 Feature]
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));
// Get Number Of Slides
var slidesCount = sliderImages.length;
// Set Current Slide
var currentSlide = 1;
// Slide Number Element
var slideNumberElement = document.getElementById('slide-number');
// Previous and Next Buttons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;
// Create The Main UL Element
var paginationElement = document.createElement('ul');
// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');
// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {

// Create The LI
    var paginationItem = document.createElement('li');
    // Set Custom Attribute
    paginationItem.setAttribute('data-index', i);
    // Set Item Content
    paginationItem.appendChild(document.createTextNode(i));
    // Append Items to The Main Ul List
    paginationElement.appendChild(paginationItem);
}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);
// Get The New Created UL
var paginationCreatedUl = document.getElementById('pagination-ul');
// Get Pagination Items | Array.form [ES6 Feature]
var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
// Loop Through All Bullets Items
for (var i = 0; i < paginationsBullets.length; i++) {

    paginationsBullets[i].onclick = function () {

        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();
    }

}

// Trigger The Checker Function
theChecker();
// Next Slide Function
function nextSlide() {

    if (nextButton.classList.contains('disabled')) {

        // Do Nothing
        return false;
    } else {

        currentSlide++;
        theChecker();
    }

}

// Previous Slide Function
function prevSlide() {

    if (prevButton.classList.contains('disabled')) {

// Do Nothing
        return false;
    } else {

        currentSlide--;
        theChecker();
    }

}

// Create The Checker Function
function theChecker() {

// Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);
    // Remove All Active Classes
    removeAllActive();
    // Set Active Class On Current Slide
    sliderImages[currentSlide - 1].classList.add('active');
    // Set Active Class on Current Pagination Item
    paginationCreatedUl.children[currentSlide - 1].classList.add('active');
    // Check if Current Slide is The First
    if (currentSlide == 1) {

// Add Disabled Class on Previous Button
        prevButton.classList.add('disabled');
    } else {

// Remove Disabled Class From Previous Button
        prevButton.classList.remove('disabled');
    }

// Check if Current Slide is The Last
    if (currentSlide == slidesCount) {

// Add Disabled Class on Next Button
        nextButton.classList.add('disabled');
    } else {

// Remove Disabled Class From Next Button
        nextButton.classList.remove('disabled');
    }

}

// Remove All Active Classes From Images and Pagination Bullets
function removeAllActive() {

// Loop Through Images
    sliderImages.forEach(function (img) {

        img.classList.remove('active');
    });
    // Loop Through Pagination Bullets
    paginationsBullets.forEach(function (bullet) {

        bullet.classList.remove('active');
    });
}
//End Slider

// Start Cart code
let products = [
    {
        name: "Mobile",
        tag: "mobile",
        price: 90,
        number: 0
    },
    {
        name: "Mobile",
        tag: "mobile",
        price: 90,
        number: 0
    },
    {
        name: "Mobile",
        tag: "mobile",
        price: 90,
        number: 0
    },
    {
        name: "Mobile",
        tag: "mobile",
        price: 90,
        number: 0
    },
    {
        name: "Laptop",
        tag: "laptop3",
        price: 199,
        number: 1
    },
    {
        name: "Laptop",
        tag: "laptop3",
        price: 199,
        number: 1
    },
    {
        name: "Laptop",
        tag: "laptop3",
        price: 199,
        number: 1
    },
    {
        name: "Laptop",
        tag: "laptop3",
        price: 199,
        number: 1
    },
    {
        name: "Watch",
        tag: "Watch2",
        price: 50,
        number: 2
    },
    {
        name: "Watch",
        tag: "Watch2",
        price: 50,
        number: 2
    },
    {
        name: "Watch",
        tag: "Watch2",
        price: 50,
        number: 2
    },
    {
        name: "Screen",
        tag: "screen1",
        price: 70,
        number: 3
    },
    {
        name: "Screen",
        tag: "screen1",
        price: 70,
        number: 3
    },
    {
        name: "Screen",
        tag: "screen1",
        price: 70,
        number: 3
    },
    {
        name: "Screen",
        tag: "screen1",
        price: 70,
        number: 3
    },
    {
        name: "Laptop",
        tag: "laptop1",
        price: 210,
        number: 4
    },
    {
        name: "Laptop",
        tag: "laptop1",
        price: 210,
        number: 4
    },
    {
        name: "Laptop",
        tag: "laptop1",
        price: 210,
        number: 4
    },
    {
        name: "Laptop",
        tag: "laptop2",
        price: 190,
        number: 5
    },
    {
        name: "Laptop",
        tag: "laptop2",
        price: 190,
        number: 5
    },
    {
        name: "Laptop",
        tag: "laptop2",
        price: 190,
        number: 5
    },
    {
        name: "Mobile",
        tag: "mobile",
        price: 90,
        number: 6
    },
    {
        name: "Mobile",
        tag: "mobile",
        price: 90,
        number: 6
    },
    {
        name: "Mobile",
        tag: "mobile",
        price: 90,
        number: 6
    },
    {
        name: "Mobile",
        tag: "mobileoppo",
        price: 90,
        number: 6
    },
    {
        name: "Watch",
        tag: "Watch2",
        price: 40,
        number: 7
    },
    {
        name: "Watch",
        tag: "Watch2",
        price: 40,
        number: 7
    },
    {
        name: "Watch",
        tag: "Watch2",
        price: 40,
        number: 7
    },
];
let cartsbuttons = document.querySelectorAll('.addtocart');
let cartspan = document.querySelector('.shopping span');
for (let i = 0; i < cartsbuttons.length; i++) {
    cartsbuttons[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    });
}
function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        cartspan.textContent = productNumbers;
    }
}

function cartNumbers(product) {
    let productNumbers = localStorage.getItem("cartNumbers");
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem("cartNumbers", productNumbers + 1);
        cartspan.textContent = productNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        cartspan.textcontent = 1;
    }
    setItems(product);
}
function setItems(product) {
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    if (cartItems !== null) {
        if (cartItems[product.tag] === undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            };
            console.log("undefined");
            product.inCart = 0;
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        };
    }
    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}
function totalCost(product) {
    //console. log("The product price is", product.price);
    let cartcost = localStorage.getItem("totalcost");
    if (cartcost !== null) {
        cartcost = parseInt(cartcost);
        localStorage.setItem("totalcost", cartcost += product.price);

    } else {
        localStorage.setItem("totalcost", product.price);
    }
}


function displayCart() {
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products-container .productincart");
    let cartcost = localStorage.getItem("totalcost");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
<div>
<div class="productimg"> 
<div id="closebtn" class="remove" onclick="removeproduct(${item.number})">x</div> 
<img src="./Images/${item.tag}.jpg">
 <span class="productname">${item.name}</span>
</div>
<div id="price" class= "price">$${item.price}</div>
<div class="quant">
<div id="decreasebtn" class="decrease" onclick="ChangeNumberOfProducts('minus',${item.number})">-</div>
<span>${item.inCart}</span>
<div id="increasebtn" class="increase" onclick="ChangeNumberOfProducts('plus',${item.number})">+</div>
</div> 
<div class="tota">
$${item.inCart * item.price},00
</div> 
            </div>
 `;
        });

        productContainer.innerHTML += `
       <br>
 <div class="basketTotalContainer"> 
<h4 class="basket Total">CART TOTAL:$${cartcost},00 </h4> 
 </div>`;
    }
}
//create x button on cart
let xbtn = document.getElementById("xbtn");
let slidercontrols = document.getElementById("slidercontrols");
let slidercontainer = document.getElementById("slider-container");
let allproducts = document.getElementById("allproducts");
let cart = document.getElementById("cart");
let cartIcon = document.getElementById("carticon");

xbtn.onclick = function () {
    slidercontrols.style.display = "block";
    slidercontainer.style.display = "block";
    allproducts.style.display = "flex";
    xbtn.style.display = "none";
    cart.style.display = "none";
};
cartIcon.onclick = function () {
    slidercontrols.style.display = "none";
    slidercontainer.style.display = "none";
    allproducts.style.display = "none";
    xbtn.style.display = "block";
    cart.style.display = "block";
    displayCart();
};
// increase and decrease quantity functions
function ChangeNumberOfProducts(action, id) {
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    let cartcost = localStorage.getItem("totalcost");
    cartcost = JSON.parse(cartcost);
    let CartNumbers = localStorage.getItem("cartNumbers");
    CartNumbers = JSON.parse(CartNumbers);
    Object.values(cartItems).map(item => {
        if (item.number === id) {
            if (action === "plus") {
                item.inCart += 1;
                let x = parseInt(item.price);
                localStorage.setItem("productsIncart", JSON.stringify(cartItems));
                localStorage.setItem("totalcost", cartcost += x);
                localStorage.setItem("cartNumbers", CartNumbers += 1);
                onLoadCartNumbers();
                displayCart();
            } else if (action === "minus" && item.inCart > 0) {
                item.inCart = item.inCart - 1;
                let x = parseInt(item.price);
                localStorage.setItem("productsIncart", JSON.stringify(cartItems));
                localStorage.setItem("totalcost", cartcost - x);
                localStorage.setItem("cartNumbers", CartNumbers - 1);
                onLoadCartNumbers();
                displayCart();
            }
        }
    });
}
// remove product from cart
function removeproduct(id) {
    let cartItems = localStorage.getItem("productsIncart");
    CartItems = JSON.parse(cartItems);
    let cartcost = localStorage.getItem("totalcost");
    cartcost = JSON.parse(cartcost);
    let CartNumbers = localStorage.getItem("cartNumbers");
    CartNumbers = JSON.parse(CartNumbers);

    //update numbers and cost on the cart
    Object.values(CartItems).map(item => {
        if (item.number === id) {
            let x = parseInt(item.price);
            let y = parseInt(item.inCart);
            localStorage.setItem("totalcost", cartcost -= (x * y));
            localStorage.setItem("cartNumbers", CartNumbers -= y);
        }
    });

    // Remove Item from cart
    const values = Object.values(CartItems);
    let  newcart = values.filter((item) => item.number !== id);
    localStorage.setItem('productsIncart', JSON.stringify(newcart));

    onLoadCartNumbers();
    displayCart();
}
onLoadCartNumbers();
displayCart();
/*End Cart code */
