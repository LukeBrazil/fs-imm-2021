const submitButton = document.getElementById('submitButton')
const firstName = document.getElementById('fName')
const lastName = document.getElementById('lName')
const fullName = document.getElementById('fullName')

const redButton = document.getElementById('red')
const blueButton = document.getElementById('blue')

submitButton.addEventListener('click', function() {
    let fName = firstName.value
    let lName = lastName.value
    fullName.innerHTML = fName + ' ' + lName
})

redButton.addEventListener('click', function() {
    document.body.style.background = 'red'
})

blueButton.addEventListener('click', function() {
    document.body.style.background = 'blue'
})