const moviePoster = document.getElementById('moviePoster')
const movies = ['poster1.png', 'poster2.png', 'poster3.png', 'poster4.png', 'poster5.png'];
const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', function() {
    let index = 0
    let intervalId = window.setInterval(() => {
        if (index > movies.length) {
            index = 0
        } else {
            setMovie(movies[index])
            index ++
        }
    }, 2000)
})

function setMovie(attribute) {
    moviePoster.setAttribute('src', attribute)
}

