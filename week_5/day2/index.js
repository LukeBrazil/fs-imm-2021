let titleTextbox = document.getElementById('titleTextbox')
let userIdTextbox = document.getElementById('userIdTextbox')
let bodyTextbox = document.getElementById('bodyTextbox')
let addPostBtn = document.getElementById('addPostBtn')

addPostBtn.addEventListener('click', function() {
    const title = titleTextbox.value
    const userId = userIdTextbox.value
    const body = bodyTextbox.value

    const requestParams = {
        title: title,
        userId: parseInt(userId),
        body: body
    }

    let request = new XMLHttpRequest
    request.onload = function() {
        console.log(this.responseText)
    }

    request.open('POST', 'https://jsonplaceholder.typicode.com/posts')
    request.setRequestHeader('Content-Type', 'application/json')
    request.send(JSON.stringify(requestParams))
})