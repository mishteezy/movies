const numberOfFilms = +window.prompt('Сколько фильмов вы уже посмотрели?', '')

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

for (let i = 0; i < 2; i++) {
  personalMovieDB.movies[window.prompt('Один из последних просмотренных фильмов?', '')] = +window.prompt('На сколько его оцените?', '')
}

console.log(personalMovieDB)