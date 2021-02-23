const submitButton = document.getElementById('submitButton')
const firstName = document.getElementById('fName')
const task = document.getElementById('task')

const pendingTasks = document.getElementById('pendingTasks')
const completedTasks = document.getElementById('completedTasks')
const redButton = document.getElementById('red')
const blueButton = document.getElementById('blue')
const removeButton = document.getElementById('removeButton')



submitButton.addEventListener('click', function() {
    let taskItem = task.value
    task.value = ''
    let liItem = document.createElement('li')
    let checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.setAttribute('id', 'checkBox')
    checkBox.addEventListener('change', function() {
        if (this.checked) {
            completedTasks.appendChild(this.parentElement)
        } else {
            pendingTasks.appendChild(this.parentElement)
        }
    })
    let removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'
    removeButton.setAttribute('id', 'removeButton')
    removeButton.addEventListener('click', function() {
        this.parentElement.remove()
    })
    liItem.innerHTML = taskItem
    liItem.appendChild(checkBox)
    liItem.appendChild(removeButton)
    pendingTasks.appendChild(liItem)
})



