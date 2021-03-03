const orderContent = document.getElementById("orderContent");
const btnSubmit = document.getElementById("btnSubmit");

fetch("https://troubled-peaceful-hell.glitch.me/orders")
  .then((response) => {
    return response.json();
  })
  .then((result) => {
    console.log(result);
    let results = result.map((item) => {
      return `
            <ul id="contentUL">
                <li>${item.email}</li>
                <li>${item.type}</li>
                <li>${item.size}</li>
                <li>${item.price}</li>
            </ul>
            `;
    });
    orderContent.innerHTML = results.join("");
  });

const reqParams = {
  email: "luke@john.com",
  type: "Mocha Mocha",
  size: "large",
  price: 5.25,
};

function submitOrder(reqParams) {
    fetch("https://troubled-peaceful-hell.glitch.me/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqParams),
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result, "SUCCESS");
      window.location.reload()
    });
}

btnSubmit.addEventListener("click", function () {
  submitOrder(reqParams)
});


// const reqParams = {
//     email: 'john@john.com',
//     type: 'Mocha',
//     size: 'Large',
//     price: 5.55
// }

// fetch('https://troubled-peaceful-hell.glitch.me/orders', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(reqParams)
// }).then((response) => {
//     return response.json()
// }).then((result) => {
//     console.log(result)
// })