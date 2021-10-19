let numberOfFilms;

function start(){

    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');

     while( numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){
         numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
     }
}

start();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privet: false,
    
};


//ПЕРВЫЙ ВАРИАНТ//
/*const a = prompt('Какой последний  фильм вы просмотрели?', '' ),
      b = prompt('На сколько вы его оцените', ''),
      d = prompt('Какой последний фильм вы просмотрели?', ''),
      c = prompt('На сколько вы его оцените', '');

personalMoviesDB.movies[a] = b; 
personalMoviesDB.movies[d] = c;  

console.log(personalMoviesDB);*/
function rememberMyFilms(){
    for (let i = 0; i < 2; i++) {
        a = prompt('Какой последний  фильм вы просмотрели?', '' ),
        b = prompt('На сколько вы его оцените', '');
    if(  a.length < 50 && a != "" && b != "" && a != null && b != null ){
        console.log("OK");
        personalMoviesDB.movies[a] = b; 
    }else{
        console.log("ERROR");
        i--;
    }
  } 
}

rememberMyFilms();

/*let i = 0;
while (i < 2) { 
    a = prompt('Какой последний  фильм вы просмотрели?', '' ),
    b = prompt('На сколько вы его оцените', ''); 
    if(  a.length < 50 && a != "" && b != "" && a != null && b != null ){
        console.log("OK");
        personalMoviesDB.movies[a] = b;
        
        i++; 
    }else{
         console.log("ERROR");
         i--;
    }

  
}*///ВТОРОЙ ВАРИАНТ Ф-ЦИИ//
function detectPeronalLevel(){
    if (personalMoviesDB.count < 10){
        console.log("Просмотренно мало фильмов");
    }else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
        console.log("Вы классический зритель");
    }else if (personalMoviesDB.count >= 30 ){
        console.log("Вы киноман");
    } else{
        console.log("Вы многое потеряли");
    }    
    console.log(personalMoviesDB);   
}
detectPeronalLevel();

/*function showMyDB (privet){
    if(!true){
        return (false);
    }
}*/ //ВТОРОЙ ВАРИАНТ Ф-ЦИИ

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMoviesDB);
    }

}
showMyDB(personalMoviesDB.privet);

function writeYorGeners(){
    for(let i=1; i<=3; i++  ){
        personalMoviesDB.genres[i-1]  = prompt(`Ваш любимый жанр под номером${i}? ''`);
    
    }
}
writeYorGeners();




