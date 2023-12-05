//Write program to calculate area of rectangle
import * as readlineSync from "readline-sync";
//input length of rectangle
let a: any = readlineSync.question("Enter length of rectangle:");
//input width of rectangle
let b: any = readlineSync.question("Enter width of rectangle:");
//let a = 15;
//let b = 10;
let c: any = a * b;
console.log(
  "Area of the rectangle with length ",
  a,
  " and width ",
  b,
  " is ",
  c
);
