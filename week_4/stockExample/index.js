const inputBox = document.getElementById('stockQuote');
const btnSubmit = document.getElementById('btnSubmit');
const content = document.getElementById('content');



btnSubmit.addEventListener('click', function() {
    let symbol = inputBox.value
    getStockQuote(symbol)
    let intervalId = window.setInterval(() => {
        getStockQuote(symbol)
    }, 3000)
})

function getStockQuote(symbol) {
    content.innerHTML = ''
    let stock = quotes[symbol]
    stock.price = getRandomInt(100,500)
    let message = `${stock.name}, Price: $${stock.price}`
    content.innerHTML = message
  }
  
  
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
  }