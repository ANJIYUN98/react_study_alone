import { Component } from "react";
import Apage from './ex';
import Board from './Components/Board';

// 변경 함
// const array = [1,2,3,4];
// const sameArray = array;
// sameArray.push(5); 
// console.log(array === sameArray); //true

// 변경 안함
const array = [1,2,3,4];
const differentArray = [...array, 5];
console.log(array === differentArray); //false

