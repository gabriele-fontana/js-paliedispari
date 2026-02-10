



/* add prompts */
/* even or odd prompt */
const userChoice = prompt("Scegli 'pari' o 'dispari':").toLowerCase();
/* 1 to 5 number prompt */
const userNumb = parseInt(prompt("Inserisci un numero da 1 a 5:"));
/* generate a random number for pc */
const computerNumb = Math.floor(Math.random() * 5) + 1;
/* add userNumb and computerNumb */
const sum = userNumb + computerNumb
/* create function to verify if sum is even or odd */
function isEven(number){
    return number % 2 === 0;
}
const result = isEven(sum)
/* print a message to declare the winner */

