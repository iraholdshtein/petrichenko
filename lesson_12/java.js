const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false
};

const a = prompt('Какой последний  фильм вы просмотрели?', '' ),
      b = prompt('На сколько вы его оцените', ''),
      d = prompt('Какой последний фильм вы просмотрели?', ''),
      c = prompt('На сколько вы его оцените', '');

personalMoviesDB.movies[a] = b; 
personalMoviesDB.movies[d] = c;  

console.log(personalMoviesDB);

//lesson 13//

const num = 30;

if (num < 30) {
    console.log('мало');
}else if (num > 30) {
    console.log('много');
}else{
    console.log('отлично!');
};




