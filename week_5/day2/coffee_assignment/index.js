const coffeeEmailInput = document.getElementById("coffeeEmail");
const coffeeTypeInput = document.getElementById("coffeeType");
const coffeeSizeInput = document.getElementById("coffeeSize");
const coffeePriceInput = document.getElementById("coffeePrice");
const newCoffeeOrderBtn = document.getElementById("newCoffeeOrderBtn");
const displayOrders = document.getElementById('displayOrders');
const getOrderByEmailDiv = document.getElementById('getOrderByEmail');
const orderEmailInput = document.getElementById('orderEmail');
const orderByEmailBtn = document.getElementById('orderByEmailBtn');
const deleteOrderByEmailBtn = document.getElementById('deleteOrderByEmailBtn');

const ordersUrl = "https://troubled-peaceful-hell.glitch.me/orders";

const newCoffeOrder = () => {
    const coffeeEmail = coffeeEmailInput.value;
    const coffeeType = coffeeTypeInput.value;
    const coffeeSize = coffeeSizeInput.value;
    const coffeePrice = coffeePriceInput.value;
    let request = new XMLHttpRequest

    const requestParams = {
        email: coffeeEmail,
        type: coffeeType,
        size: coffeeSize,
        price: parseInt(coffeePrice)
    }

    request.onload = function () {
        if (request.status == 200) {
            showOrders()
        } else {
            alert(`POST DIDNT GO THROUGH!!! STATUS: ${request.statusText}`)
        }
    }
    request.open('POST', ordersUrl)
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(requestParams))
}

const showOrdersByEmail = () => {
    let request = new XMLHttpRequest();
    const orderEmail = orderEmailInput.value

  request.onload = function () {
    let response = JSON.parse(this.responseText)
    let order = `
    <div class='orderItem'>
        <ul>
            <li>${response.email}</li>
            <li>${response.type}</li>
            <li>${response.size}</li>
            <li>${response.price}</li>
            <button onClick=showOrders()>Go Back to all Orders</button>
        </ul>
    </div>
    `
    displayOrders.innerHTML = order
    request.onload = function () {
        if (request.status == 200) {
            showOrders()
        } else {
            alert(`POST DIDNT GO THROUGH!!! STATUS: ${request.statusText}`)
        }
    }
  };

  request.open("GET", `https://troubled-peaceful-hell.glitch.me/orders/${orderEmail}`);
  request.send();
}

const deleteOrderByEmail = () => {
    let request = new XMLHttpRequest();
    const orderEmail = orderEmailInput.value

    request.onload = function() {
        if (request.status == 200) {
            showOrders()
        } else {
            alert(`POST DIDNT GO THROUGH!!! STATUS: ${request.statusText}`)
        }
    }
    request.open("DELETE", `https://troubled-peaceful-hell.glitch.me/orders/${orderEmail}`);
    request.send();
}

const showOrders = () => {
    let request = new XMLHttpRequest();
  
    
    request.onload = function () {
    let response = JSON.parse(this.responseText)
    let orders = response.map((order) => {
      return `
            <div class='orderItem'>
                <ul>
                    <li>${order.email}</li>
                    <li>${order.type}</li>
                    <li>${order.size}</li>
                    <li>${order.price}</li>
                </ul>
            </div>
            `;
    });
    displayOrders.innerHTML = orders.join('')
  };

  request.open("GET", ordersUrl);
  request.send();
}

newCoffeeOrderBtn.addEventListener('click', function() {
    newCoffeOrder()
})


orderByEmailBtn.addEventListener('click', function() {
    showOrdersByEmail()
})

deleteOrderByEmailBtn.addEventListener('click', function() {
    deleteOrderByEmail()
})


window.addEventListener("load", function () {
  showOrders()
});


