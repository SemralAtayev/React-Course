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


/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

// **** задание 2 - урок 15 - Циклы и условия - Мой вариант 1 (while) ****

// let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// while (numberOfFilms <= 0 || numberOfFilms > 50) {
//     numberOfFilms = prompt('Ваш ответ либо мал либо велик. Напишите правильное число?', '');
//     while (numberOfFilms <= 0 || numberOfFilms > 50) {
//         alert('Мы решили за вас, что это будет 30 фильмов')
//         numberOfFilms = "30";
//     }
// }

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = +prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = +prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d; // не понял я почему по 2 раза спрашивает

// let lengthOfMovies = personalMovieDB.movies[a];

// while (lengthOfMovies.length <= 0 || lengthOfMovies.length > 50) {
//     lengthOfMovies = prompt('Ваш ответ либо мал либо велик. Напишите правильно', '');
//     alert('Мы решили за вас, что это будет фильм "Сияние" ');
//     numberOfFilms = "Сияние";
// }

// let rateOfMovies = personalMovieDB.movies[c];

// while (rateOfMovies <= 0 || rateOfMovies > 50) {
//     rateOfMovies = prompt('Ваш ответ либо мал либо велик. Напишите правильное число', '');
//     alert('Мы решили за вас, что рейтинг будет 5')
//     rateOfMovies = "5";
// }

// // мой цикл 

// let count = personalMovieDB.count;

// while (count <= 10) {
//     alert('Ошибка');
//     break;
// }

// while (count < 10) {
//     alert("Просмотрено довольно мало фильмов");
//     break;
// }
// while (count > 10 || count < 30) {
//     alert("Вы классический зритель");
//     break;
// }
// while (count > 30) {
//     alert("Вы киноман");
//     break;
// }
// console.log(personalMovieDB);

// **** задание 2 - урок 15 - Циклы и условия - вариант учителя 1 // цикл for) ****

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


// // 1
// for (let i = 0; i < 2; i++){
//   const a = prompt ('Один из последних просмотренных фильмов?', ''),
//         b =  prompt ('На сколько оцените его?', '');

//         if (a !== null && b !== null && a !== '' && b !== '' && a < 50 && b < 50 ){
//           personalMovieDB.movies[a] = b;
//         }
//         else {
//             i--;
//         }              
// }

// console.log(personalMovieDB.movies);

//   // 2      
//   let movie = personalMovieDB.movies.length;

//   for (let i = 0; i > 50, i < 0, i == false; i++){
//     movie = prompt ('Один из последних просмотренных фильмов?', '');

//   }


// // 3 
// if (personalMovieDB.count < 10){
//     alert("Просмотрено довольно мало фильмов");
// }
// else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
//   alert("Вы классический зритель");
// }
// else if(personalMovieDB.count >= 30){
//   alert("Вы киноман");
// }      
// else {
//   alert('Произошла ошибка');
// }


// **** задание 2 - урок 15 - Циклы и условия - вариант мой 1 // цикл do while) ****


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', '');
// let i = 0;

// do {  
//   personalMovieDB.movies[a] = b;
//   i += 1;
// }
// while (a !== null && b !== null && a !== '' && b !== '' && a < 50 && b < 50 && i <= 2);

//     a = prompt ('Один из последних просмотренных фильмов?', '');
//     b =  prompt ('На сколько оцените его?', '');
// let i = 0;

// do {
//   i += 1;
// }
// while (i <= 2);

// console.log(i);
// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');




// if(a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b < 50 ){
//     do{
//       personalMovieDB.movies[a] = b;      
//       i += 1;
//       console.log(personalMovieDB.movies);
//     } while(
//       i < 2
//     );

// } else{
//   alert ('lox33');
//   // do{   
//   //   a = prompt('Один из последних просмотренных фильмов?', '');
//   //   b = prompt('На сколько оцените его?', '');    
//   // } while(
//   //    a !== null && b !== null && a !== '' && b !== '' && a < 50 && b < 50 
//   // );
// }

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   i = 0;


// const personalMovieDB = {
//   // count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// personalMovieDB.movies[a] = b;


// if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b < 50) {
//   do {   
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');
//     personalMovieDB.movies[a] = b;
//     i++;
//   } while (
//     i < 1
//   );
//   console.log(personalMovieDB.movies);

// } else { 

//   do {
//     a = prompt('Один из последних просмотренных фильмов?', '');
//     b = prompt('На сколько оцените его?', '');
//     personalMovieDB.movies[a] = b;
//     i++;

//   } while (
//      a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b < 50 && i > 1
//   );


// }

// **** урок 17 - Методы ****

// let str = "stringify";
// // ring, получаем 4 символа, начиная с позиции 2
// console.log(str.substr(2, 4));

///////////////////////////////////////////////////////////////////////////////////////

// **** задание 3 - урок 18 - Используем функции- вариант мой + учителя  ****

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// // start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// function rememberMyFilms() {
//   // 1
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');

//     if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b < 50) {
//       personalMovieDB.movies[a] = b;
//     } else {
//       i--;
//     }
//   }
// }

// // rememberMyFilms();


// function detectPersonalLevel() {
//   // 3 
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// // detectPersonalLevel();

// function showMyDB() {
//    if (!personalMovieDB.privat){
//       console.log(personalMovieDB);
//    } else{

//    }
// }

// showMyDB();

// // вариант учителя с hidden

// // function showMyDB(hidden) {
// //   if (!hidden){
// //      console.log(personalMovieDB);
// //   } else{

// //   }
// // }

// // showMyDB(personalMovieDB.private);



// function writeYourGenres (){
//     for (let i =1; i <= 3; i++) {
//       let w = prompt(`Ваш любимый жанр под номером ${i}`);
//       personalMovieDB.genres[i - 1] = w;
//     }
// }

// writeYourGenres();


// const options = {
//   name: 'test',
//   width: 1024,
//   height: 1024,
//   colors : {
//     border: 'black',
//     bg: 'red',
//   }
// };

// // console.log(options.name);

// // delete options.name;

// for (let key in options){
//   console.log (`Свойство ${key} имеет значение ${options[key]}`);
// } 

// let myObj = {
//   color: {
//     back : 'red',
//     front: 'white',
//     side: 'gray',
//   },
//   size : {
//     big: "24px",
//     small: "18px",
//   },
//   attitude: "hard",
//   simplicity: "simple",
//   sideOnes: "yesIndeed",
// };

// console.log(Object.keys(myObj).length);


// let dlina = Object.keys(myObj).length;
// let dlinaMinusOne = Object.keys(myObj).length - 1;
// let lastOne = dlina - 1;

// console.log(dlinaMinusOne);


///////////////////////////////////////////////////////////////////////////////////////

// **** задание 4 - урок 24 - Практика , ч4. Используем объекты.mp4  мой вариант ****

// let numberOfFilms;

// function start() {
//   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//   }
// }

// // start();

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
// };

// function rememberMyFilms() {
//   // 1
//   for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', '');

//     if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b < 50) {
//       personalMovieDB.movies[a] = b;
//     } else {
//       i--;
//     }
//   }
// }

// // rememberMyFilms();


// function detectPersonalLevel() {
//   // 3 
//   if (personalMovieDB.count < 10) {
//     console.log("Просмотрено довольно мало фильмов");
//   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log("Вы классический зритель");
//   } else if (personalMovieDB.count >= 30) {
//     console.log("Вы киноман");
//   } else {
//     console.log('Произошла ошибка');
//   }
// }

// // detectPersonalLevel();


// function showMyDB() {
//   if (!personalMovieDB.privat) {
//     console.log(personalMovieDB);
//   } else {

//   }
// }

// showMyDB();



// function writeYourGenres() {
//   for (let i = 1; i <= 3; i++) {
//     let w = prompt(`Ваш любимый жанр под номером ${i}`);
//     while (w === null || w == '') {
//       let w = prompt(`Ваш любимый жанр под номером ${i}`);
//     }

//     personalMovieDB.genres[i - 1] = w;
//   }
//   return;
// }

// writeYourGenres();


// function namka (){
//   alert("semral");
// }

// namka();



// Подпункт 1

// вар 1

// const personalMovieDBFunctions = {
//      start: start(),
//      detectPersonalLevel: detectPersonalLevel(),
//      rememberMyFilms: rememberMyFilms(),
//      showMyDB: showMyDB(),
//      writeYourGenres: writeYourGenres(),
// };

// let mergedPersonalMovieDB = {
//   ...personalMovieDB,
//   ...personalMovieDBFunctions,
// };

// console.log(mergedPersonalMovieDB);

// вар 2

// let personalMovieDBFunctions = {
//   // start: start(),
//   // detectPersonalLevel: detectPersonalLevel(),
//   // rememberMyFilms: rememberMyFilms(),
//   // showMyDB: showMyDB(),
//   writeYourGenres: writeYourGenres(),
// };

// let newF = Object.setPrototypeOf(personalMovieDBFunctions, personalMovieDB);

// console.log(newF.writeYourGenres());

// вар 3 по моему получилось, но не могу включить функции выборочно

// function namka (){
//   alert("semral");
// }

// const personalMovieDBFunctions = {
//      start: start(),
//      detectPersonalLevel: detectPersonalLevel(),
//      rememberMyFilms: rememberMyFilms(),
//      showMyDB: showMyDB(),
//      writeYourGenres: writeYourGenres(),
//      namka1: namka,
// };

// Object.setPrototypeOf(personalMovieDB, personalMovieDBFunctions);

// console.log(personalMovieDB);

// вар 4 - вроде вот оно *****

// personalMovieDB.start = start();
// personalMovieDB.detectPersonalLevel = detectPersonalLevel();
// personalMovieDB.rememberMyFilms = rememberMyFilms();
// personalMovieDB.showMyDB = showMyDB();
// personalMovieDB.writeYourGenres = writeYourGenres();
// personalMovieDB.namka = namka();


// подпункт 2

// let privat;

// personalMovieDB.toggleVisibleMyDB = function(){
//   let privat = personalMovieDB.privat;

//     if(!privat){
//       privat = true;
//     } else {
//       privat = false;
//     } 
//     return;
// };

// personalMovieDB.toggleVisibleMyDB();
// console.log(personalMovieDB.toggleVisibleMyDB());

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.privat = true;

// console.log(personalMovieDB.toggleVisibleMyDB());
// console.log(personalMovieDB);

// вар 2
// let privat;

// function toggleVisibleMyDB(_pr) {
//   let privat = personalMovieDB.privat;
//   if(!privat){
//           privat = true;
//         } else {
//           privat = false;
//         } 
//         console.log(privat);
//         return;      
// }

// toggleVisibleMyDB();
// console.log(privat);
// personalMovieDB.toggleVisibleMyDB = toggleVisibleMyDB();

// // console.log(personalMovieDB.toggleVisibleMyDB);
// console.log(personalMovieDB);

// вар 3 - а вот и он по моему ******

// function toggleVisibleMyDB() {
//    if (!personalMovieDB.privat){
//     personalMovieDB.privat = true;
//    } else{
//     personalMovieDB.privat = false;
//    }
//   //  console.log(personalMovieDB.privat);
// }
// toggleVisibleMyDB();
// // console.log(personalMovieDB.privat);


// // подпункт 3

// const genreArr = [personalMovieDB.genres];
// console.log(genreArr);

// genreArr.forEach((elem, i){  
//     console.log(`Любимый жанр ${i + 1} - это ${elem[i]}`);
//     console.log(elem);
//     console.log(i);
// });
// console.log(typeof[genreArr]);

// genreArr.forEach((elem, i) => {
//   console.log('Index: ' + i + ' Value: ' + elem);
// });

// const numbers = [personalMovieDB.genres];

// numbers.forEach((number, index) => {
//   console.log('Index: ' + index + ' Value: ' + number);
// });


// // **** задание 4 - урок 24 - Практика , ч4. Используем объекты.mp4  вариант учителя ****


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,

  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },

  rememberMyFilms: function () {
    // 1
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

      if (a !== null && b !== null && a !== '' && b !== '' && a.length < 50 && b < 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
      }
    }
  },

  detectPersonalLevel: function() {
    // 3 
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log('Произошла ошибка');
    }
  },

  showMyDB: function() {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    } else {  
    }
  },

toggleVisibleMyDB: function() {
       if (!personalMovieDB.privat){
        personalMovieDB.privat = true;
       } else{
        personalMovieDB.privat = false;
       }
    },

  writeYourGenres: function() {
    for (let i = 1; i <= 3; i++) {
      let w = prompt(`Ваш любимый жанр под номером ${i}`);
      while (w === null && w == '') {
        let w = prompt(`Ваш любимый жанр под номером ${i}`);
      }
  
      personalMovieDB.genres[i - 1] = w;
    }
    personalMovieDB.genres.forEach((elem, i) => {  
      console.log(`Любимый жанр ${i + 1} - это ${elem}`);
    });
  },



};



