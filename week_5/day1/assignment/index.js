const movieList = document.getElementById('movie-list')
const selectedMovie = document.getElementById('selected-movie')
const movieDiv = document.getElementById('movie');

function displayMovies() {
    let url = 'http://www.omdbapi.com/?s=batman&?i=tt3896198&apikey=ec39d38f'
    let request = new XMLHttpRequest;
    request.open('GET', url)
    request.send()

    request.addEventListener('load', function() {
        let movies = JSON.parse(request.responseText)
        console.log(movies)
        let movieItems = movies.Search.map((movie) => {
             return `<div class='movie-item'>
            <img src="${movie.Poster}" alt="">
            <p>${movie.Title}</p>
            <p>${movie.Year}</p>
            <button onClick=showMovieItem('${movie.imdbID}')>Show Movie</button>
        </div>`
        
        })
        movieList.innerHTML += movieItems.join('')
    })


}

function showMovieItem(imdbID) {
    let url = `http://www.omdbapi.com/?i=${imdbID}&apikey=ec39d38f`
    let request = new XMLHttpRequest
    request.open('GET', url)
    request.send()

    request.addEventListener('load', function() {
        let response = JSON.parse(request.responseText)
        let movieContent = `<img src='${response.Poster}' alt="">
        <h3>${response.Title}</h3>
        <h3>${response.Year}</h3>
        <p>${response.Rated}</p>
        <p>${response.Runtime}</p>
        <p>${response.Awards}</p>`
        movieDiv.innerHTML = movieContent
    })
   
}

displayMovies()