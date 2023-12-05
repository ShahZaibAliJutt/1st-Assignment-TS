//Calculate volume of cube
import * as readlineSync from "readline-sync";

let a: any = readlineSync.question("Enter value:");
let vol: any = a * a * a;
console.log("Volume of the given cube is ", vol);
export {};
