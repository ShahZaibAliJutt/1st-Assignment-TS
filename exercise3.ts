//Check whether given number is Positive, Negative, Or Zero
import * as readlineSync from "readline-sync";

let a: any = readlineSync.question("Enter any number you want to check: ");
if (a > 0) {
  console.log("Positive");
} else if (a < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}
