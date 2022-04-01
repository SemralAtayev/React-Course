/*jslint node: true */
'use strict';


// **** задание 1 - урок 12 - Мой вариант ****

// let numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?',  "");

// let lastFilm = prompt ('Один из последних просмотренных фильмов?',  "");
// let yourRate = prompt ('На сколько оцените его?',  "");

// let personalMovieDB = {
//     count : numberOfFilms,
//     movies : {
//         lastFilm: yourRate,
//     },
//     actors : {},
//     genres : [],
//     privat : false,
// };

/////////////////////////////////////////////////////////////////

// задание 1 - урок 12 - Вариант учителя

// const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?',  '');

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false
// };

// const a = prompt ('Один из последних просмотренных фильмов?', ''), 
//       b =  prompt ('На сколько оцените его?', ''),
//       c = prompt ('Один из последних просмотренных фильмов?', ''),
//       d =  prompt ('На сколько оцените его?', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;  // не понял я почему по 2 раза спрашивает

//       console.log(personalMovieDB);



// **** задание 2 - урок 15 - Циклы и условия - Мой вариант ****

    let numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?',  '');

    while (numberOfFilms <= 0 || numberOfFilms > 50){
        numberOfFilms =  prompt ('Ваш ответ либо мал либо велик. Напишите правильное число?', '');
        while (numberOfFilms <= 0 || numberOfFilms > 50){
            alert('Мы решили за вас, что это будет 30 фильмов')
            numberOfFilms =  "30";
        }
    }

    const personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : false
    };
    
    let a = prompt ('Один из последних просмотренных фильмов?', ''), 
          b =  +prompt ('На сколько оцените его?', ''),
          c = prompt ('Один из последних просмотренных фильмов?', ''),
          d =  +prompt ('На сколько оцените его?', '');
    
          personalMovieDB.movies[a] = b;
          personalMovieDB.movies[c] = d;  // не понял я почему по 2 раза спрашивает
    
        let lengthOfMovies = personalMovieDB.movies[a];

        while (lengthOfMovies.length <= 0 || lengthOfMovies.length > 50){           
            lengthOfMovies =  prompt ('Ваш ответ либо мал либо велик. Напишите правильно', '');
            alert('Мы решили за вас, что это будет фильм "Сияние" ');
            numberOfFilms =  "Сияние";
    }

        let rateOfMovies = personalMovieDB.movies[c];

        while (rateOfMovies <=0 || rateOfMovies > 50 ){           
            rateOfMovies =  prompt ('Ваш ответ либо мал либо велик. Напишите правильное число', '');
            alert('Мы решили за вас, что рейтинг будет 5')
                rateOfMovies =  "5";
        }
 
// мой цикл          




let count = personalMovieDB.count;

while (count <= 10){
    alert('Ошибка');
    break;
}

while (count < 10){
    alert ("Просмотрено довольно мало фильмов");
    break;
}
while (count > 10 || count < 30){
    alert ("Вы классический зритель");
    break;
}
while (count > 30){
    alert ("Вы киноман");
    break;
}

console.log(personalMovieDB);