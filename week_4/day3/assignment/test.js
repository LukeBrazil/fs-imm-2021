// const startersButton = document.getElementById('btnStarters')
// const entreesButton = document.getElementById('btnEntrees')
// const dessertsButton = document.getElementById('btnDesserts')
// const contentDiv = document.getElementById('content')

// let starters = dishes.filter(function(dish) {
//     if (dish.course == 'Starters') {
//         return dish
//     }
// })

// let entrees = dishes.filter(function(dish) {
//     if (dish.course === 'Entrees') {
//         return dish
//     }
// })

// let desserts = dishes.filter(function(dish) {
//     if (dish.course === 'Desserts') {
//         return dish
//     }
// })



// startersButton.addEventListener('click', function() {
//     contentDiv.innerHTML = ''
//     starters.map(function(dish) {
//         let starterDish = `
//         <div>
//         <img src="${dish.imageURL}" alt="">
//         <h3>${dish.title}</h3>
//         <h3>${dish.description}</h3>
//         <h3>${dish.price}</h3>

//       </div>
//         `
//         contentDiv.innerHTML += starterDish
//     })
// })

// entreesButton.addEventListener('click', function() {
//     contentDiv.innerHTML = ''
//     entrees.map(function(dish) {
//         let entreeDish = `
//         <div>
//         <img src="${dish.imageURL}" alt="">
//         <h3>${dish.title}</h3>
//         <h3>${dish.description}</h3>
//         <h3>${dish.price}</h3>

//       </div>
//         `
//         contentDiv.innerHTML += entreeDish
//     })
// })

// dessertsButton.addEventListener('click', function() {
//     contentDiv.innerHTML = ''
//     desserts.map(function(dish) {
//         let dessertDish = `
//         <div>
//         <img src="${dish.imageURL}" alt="">
//         <h3>${dish.title}</h3>
//         <h3>${dish.description}</h3>
//         <h3>${dish.price}</h3>

//       </div>
//         `
//         contentDiv.innerHTML += dessertDish
//     })
// })