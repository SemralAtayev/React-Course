/*jslint node: true */
'use strict';


let numberOfFilms = prompt ('Сколько фильмов вы уже посмотрели?',  "");

let lastFilm = prompt ('Один из последних просмотренных фильмов?',  "");
let yourRate = prompt ('На сколько оцените его?',  "");

let personalMovieDB = {
    count : numberOfFilms,
    movies : {
        lastFilm: yourRate,
    },
    actors : {},
    genres : [],
    privat : false,
};


console.log (personalMovieDB);