let myObj = {
  color: {
    back : 'red',
    front: 'white',
    side: 'gray',
  },
  size : {
    big: "24px",
    small: "18px",
  },
  attitude: "hard",
  simplicity: "simple",
  sideOnes: "yesIndeed",
};

// console.log(Object.keys(myObj).length);


let dlina = Object.keys(myObj).length;
let dlinaMinusOne = Object.keys(myObj).length - 1;
let lastOne = dlina - 1;

function assgn(){
  while (dlina < 10 ){
    Object.assign(myObj, Object.dlinaMinusOne);
 }
}


console.log(assgn());