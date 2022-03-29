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

const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?',  '');

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

const a = prompt ('Один из последних просмотренных фильмов?', ''), 
      b =  prompt ('На сколько оцените его?', ''),
      c = prompt ('Один из последних просмотренных фильмов?', ''),
      d =  prompt ('На сколько оцените его?', '');

      personalMovieDB.movies[a] = b;
      personalMovieDB.movies[c] = d;  // не понял я почему по 2 раза спрашивает

      console.log(personalMovieDB);