const startersButton = document.getElementById('btnStarters')
const entreesButton = document.getElementById('btnEntrees')
const dessertButton = document.getElementById('btnDesserts')
const contentDiv = document.getElementById('content')

let startersArray = dishes.filter((dish) => dish.course === 'Starters')
let entreesArray = dishes.filter((dish) => dish.course === 'Entrees')
let dessertArray = dishes.filter((dish) => dish.course === 'Desserts')


startersButton.addEventListener('click', function() {
    contentDiv.innerHTML = ''
    startersArray.map((starter) => {
        let starters = `
        <div class='dish'>
        <img class='img' src="${starter.imageURL}"></img>
        <h5><b>${starter.title}</b></h5>
        <h5>${starter.description}</h5>
        <h5>Price: ${starter.price}</h5>
       </div>
        `
        contentDiv.innerHTML += starters
    })
})

entreesButton.addEventListener('click', function() {
    contentDiv.innerHTML = ''
    entreesArray.map((entree) => {
        let entrees = `
        <div class='dish'>
        <img class='img' src="${entree.imageURL}"></img>
        <h5><b>${entree.title}</b></h5>
        <h5>${entree.description}</h5>
        <h5>Price: ${entree.price}</h5>
       </div>
        `
        contentDiv.innerHTML += entrees
    })
})

dessertButton.addEventListener('click', function() {
    contentDiv.innerHTML = ''
    dessertArray.map((dessert) => {
        let desserts = `
        <div class='dish'>
        <img class='img' src="${dessert.imageURL}"></img>
        <h5><b>${dessert.title}</b></h5>
        <h5>${dessert.description}</h5>
        <h5>Price: ${dessert.price}</h5>
       </div>
        `
        contentDiv.innerHTML += desserts
    })
})
