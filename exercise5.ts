//Check whether this person is eligible for vote or not
import * as readlineSync from "readline-sync";

let a: any = readlineSync.question("Enter your age: ");
if (a > 18) {
  console.log("You are eligible for voting");
} else {
  console.log("Sorry! \nYou are not eligible for voting");
}
