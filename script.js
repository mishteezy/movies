const personalMovieDB = {
  count: +window.prompt('Сколько фильмов вы уже посмотрели?', ''),
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

for (let i = 0; i < personalMovieDB.count; i++) {
  personalMovieDB.movies[window.prompt('Один из последних просмотренных фильмов?', '')] = +window.prompt('На сколько его оцените?', '')
}

console.log(personalMovieDB)