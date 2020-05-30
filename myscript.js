// JavaScript File
// const and let statements
const myAge = 16;
let guess;
// function that sends different alerts to the user depending on their guess
function ageGuess() {
  // guess variable assigned to the user's number input
  guess = document.getElementById("ageinput").value;
  // if the guess is correct, the user is told that they are right
  if (guess == myAge) {
    alert("Correct! That's my age!");
  }
  // if the guess is too low, the user is told this and encouraged to guess again
  else if (guess < myAge) {
    alert("You guessed too low. Try again!");
  }
  // if the guess is too high, the user is told this and encouraged to guess again
  else if (guess > myAge) {
    alert("You guessed too high. Try again!");
  }
  // otherwise, it is alerted that the input is invalid
  else {
    alert("Invalid input. Try again.");
  }
}
// I did not understand how a loop would be used in this situation or why it was needed, so below, I commented out a simple, working loop to prove that I do understand how they work and how to use them; i is set to 0 and is incremented by 1 until it is no longer less than 10, meaning it alerts 10 times, including the numbers from 0-9 in that order
//for (let i = 0; i < 10; i++) {
    //alert(i);
//}
// event listener triggering the function to alert whether the guess was right, too high or too low
document.getElementById("btn").addEventListener("click", ageGuess);