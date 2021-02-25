const quoteSelect = document.getElementById("quoteSelect");
const contentDiv = document.getElementById("content");
const stockText = document.getElementById('stockText');
const btnStock = document.getElementById('btnStock');

btnStock.addEventListener('click', function() {
    let stockSymbol = stockText.value
    let checkedSymbol = checkSymbol(stockSymbol)
    if (checkedSymbol === true) {
        getStock(stockSymbol)
        let intervalId = window.setInterval(() => {
            getStock(stockSymbol)
        }, 5000)
    } else {
        alert('INVALID SYMBOL')
    }
    
})

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getStock(value) {
  contentDiv.innerHTML = "";
  let stock = quotes[value];
  let price = getRandomInt(0, 500);
  let message = `${stock.name}: ${price}`;
  console.log(message);
  contentDiv.innerHTML += message;
}

function checkSymbol(symbol) {
    if (quotes[symbol] === undefined) {
        contentDiv.innerHTML = `${symbol} not available`
        return false
    } else {
        return true
    }
}