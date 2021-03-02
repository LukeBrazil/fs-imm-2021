const movieList = document.getElementById("movie-list");
const movieDiv = document.getElementById('movie')

function displayMovies() {
  let url = "http://www.omdbapi.com/?s=batman&?i=tt3896198&apikey=ec39d38f";
  let request = new XMLHttpRequest;
  request.open("GET", url);
  request.send();
  request.addEventListener("load", function () {
    let movies = JSON.parse(request.responseText);
    let movieItems = movies.Search.map((movie) => {
      return `
        <img src="${movie.Poster}" alt="">
        <p>${movie.Title}</p>
        <p>${movie.Year}</p>
        <button onClick=showMovie('${movie.imdbID}')>Show Movies</button>
            `
    });
    movieList.innerHTML = movieItems.join('')
  });
}

function showMovie(imdbID) {
    let url = `http://www.omdbapi.com/?i=${imdbID}&apikey=ec39d38f`
    let request = new XMLHttpRequest
    request.open('GET', url)
    request.send()
    request.addEventListener('load', function() {
        let movie = JSON.parse(request.responseText)
        let movieContent = `
        <img src="${movie.Poster}" alt="">
        <p>${movie.Title}</p>
        <p>${movie.year}</p>
        `
        movieDiv.innerHTML = movieContent
    })
}

displayMovies()

