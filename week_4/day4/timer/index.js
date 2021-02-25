const timer = document.getElementById('timer')
const btnCountdown = document.getElementById('startCountdown')
let counter = 10

btnCountdown.addEventListener('click', function() {
    let intervalId = window.setInterval(() => {
        if (counter >= 0) {
            timer.innerHTML = counter
            counter --
        } else {
            timer.innerHTML = ''
            window.clearInterval(intervalId)
        }
    }, 1000)
})