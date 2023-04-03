const numberOfFilms = +window.prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

personalMovieDB.movies[window.prompt('Один из последних просмотренных фильмов?', '')] = +window.prompt('На сколько его оцените?', '')
personalMovieDB.movies[window.prompt('Один из последних просмотренных фильмов?', '')] = +window.prompt('На сколько его оцените?', '')

console.log(personalMovieDB)