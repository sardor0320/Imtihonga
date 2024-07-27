let dom = document.querySelector("body");
let dom2 = document.createElement("section");
let dom3 = document.createElement("section");
dom2.classList.add("second-sixth");
dom3.classList.add("second");


fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        data.products.map(item => {
                dom2.innerHTML += `
                <div>
                    <img src="${item.thumbnail}" alt="">
                    <h3>${item.title}</h3>
                </div>
            `
        })
    })

fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        data.products.map(item => {
            dom3.innerHTML += `
                <div class="section">
                    <img src="${item.thumbnail}" alt="">
                    <h3>${item.title}</h3>
                    <b>${item.price}</b>
                </div>
            `
        })
    })

dom.innerHTML += `
    <header>
        <div class="header-logo">
            <img width="40px" src="assets/img/plant.jpg" alt="">
            <h1>Ecobazar</h1>
        </div>
        <input type="text" placeholder="Search">
        <div class="acc">
            <img src="assets/img/Heart.png" alt="">
            <div>
                <img src="assets/img/Cart.png" alt="">
                <span>
                    <p>Shopping cart</p>
                    <p>$57.00</p>
                </span>
            </div>
        </div>
    </header>
        <nav>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>Pages</li>
                <li>Blog</li>
                <li>About us</li>
                <li>Contact us</li>
            </ul>
            <div>
                <img src="./assets/img/Group.png" alt="">
                <b>(219) 555-0114</b>
            </div>

        </nav>
    <section class="first">
        <img src="./assets/img/opa.png" alt="">
        <div class="">
            <img src="./assets/img/Bannar.png" alt="">
            <img src="./assets/img/Bannar (1).png" alt="">
        </div>
    </section>
        <section class="second-card">
        <div>
            <img width="50px" src="./assets/img/kamz.png" alt="">
            <span>
                <b>Free Shipping</b>
                <p>Free shipping on all your order</p>
            </span>
        </div>
        <div>
            <img width="50px" src="./assets/img/kamz.png" alt="">
            <span>
                <b>Free Shipping</b>
                <p>Free shipping on all your order</p>
            </span>
        </div>
        <div>
            <img width="50px" src="./assets/img/kamz.png" alt="">
            <span>
                <b>Free Shipping</b>
                <p>Free shipping on all your order</p>
            </span>
        </div>
        <div>
            <img width="50px" src="./assets/img/kamz.png" alt="">
            <span>
                <b>Free Shipping</b>
                <p>Free shipping on all your order</p>
            </span>
        </div>
    </section>
    <section class="third-card">
        <h1>Popular Categories</h1>
        <p>View All</p>
    </section>

`;

let arr = [
    {
        id: 1,
        img: "./assets/img/olma.png",
        title: "Fresh Fruit",
        price: 14.99
    }
]

dom.appendChild(dom2)
dom.appendChild(dom3)