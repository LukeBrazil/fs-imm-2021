const inputBox = document.getElementById('stockQuote');
const btnSubmit = document.getElementById('btnSubmit');
const content = document.getElementById('content')



btnSubmit.addEventListener('click', function() {
    let symbol = inputBox.value
    let stock = getStockQuote(symbol)
    let message = `${stock.name}, Price: $${stock.price}`
    content.innerHTML = message
})

function getStockQuote(symbol) {
    let stock = quotes[symbol]
    stock.price = getRandomInt(100,500)
    return quotes[symbol]
  }
  
  
  function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
  }