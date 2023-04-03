let input = document.querySelector('input')

let numberOfFilms = window.prompt('Сколько фильмов вы уже посмотрели?')

let firstMovie = window.prompt('Один из последних просмотренных фильмов?')
let firstRate = window.prompt('На сколько его оцените?')
let secondMovie = window.prompt('Один из последних просмотренных фильмов?')
let secondRate = window.prompt('На сколько его оцените?')


let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

personalMovieDB.movies[firstMovie] = firstRate
personalMovieDB.movies[secondMovie] = secondRate

console.log(personalMovieDB)