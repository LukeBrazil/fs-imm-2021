const titleTextbox = document.getElementById("titleTextbox");
const symbolTextbox = document.getElementById("symbolTextbox");
const priceTextbox = document.getElementById("priceTextbox");
const quantityTextbox = document.getElementById("quantityTextbox");
const buyStockBtn = document.getElementById("buyStockBtn");
const stockDisplay = document.getElementById("stock-display");
const showStocksBtn = document.getElementById("showStocksBtn");

function buyStock() {
  const title = titleTextbox.value;
  const symbol = symbolTextbox.value;
  const price = priceTextbox.value;
  const quantity = quantityTextbox.value;

  let request = new XMLHttpRequest();

  const requestParams = {
    title: title,
    symbol: symbol,
    price: parseFloat(price),
    quantity: parseInt(quantity),
  };


  request.open("POST", "https://endurable-bead-polo.glitch.me/stocks");
  request.setRequestHeader("Content-Type", "application/json");
  request.send(JSON.stringify(requestParams));
}

function showStocks() {
  let request = new XMLHttpRequest();

  request.onload = function () {
    let response = JSON.parse(this.responseText);
    let stocks = response.map((item) => {
      return `
        <ul style='border: 1px solid black; width: 10rem'>
        <li>${item.symbol}</li>
        <li>${item.title}</li>
        <li>$${item.price}</li>
        <li>${item.quantity}</li>
        </ul>
            `;
        
    });
    stockDisplay.innerHTML = stocks.join('')
    
  };
  request.open("GET", "https://endurable-bead-polo.glitch.me/stocks");
  request.send();
}

buyStockBtn.addEventListener("click", function () {
  buyStock();
  
});

window.addEventListener('load', function() {
    showStocks()
})