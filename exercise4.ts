//Check whether given number is Even, Odd
import * as readlineSync from "readline-sync";

let a: any = readlineSync.question("Enter any number you want to check: ");
if (a % 2 == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
