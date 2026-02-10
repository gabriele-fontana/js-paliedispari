

/* crea funzione 'isPalindroma */
function isPalindroma(word) {
    /* Rendiamo la parola minuscola */
   const lwrcaseWord = word.toLowerCase(); 
   const rvrsWord = lwrcaseWord.split('').reverse().join('');

    /* Invertiamo la parola: split trasforma in array, reverse lo inverte, join ricrea la stringa */
return lwrcaseWord === rvrsWord;
}

/* Chiediamo l'inserimento all'utente tramite prompt */
const userWord = prompt("Inserisci una parola:");

if (userWord) {
    if (isPalindroma(userWord)) {
        console.log(`"${userWord}" è palindroma!`);
        alert(`"${userWord}" è palindroma!`);
    } else {
        console.log(`"${userWord}" non è palindroma.`);
        alert(`"${userWord}" non è palindroma.`);
    }
}


/* add prompts */
/* even or odd prompt */
const userChoice = prompt("Scegli 'even' o 'odd':").toLowerCase();
/* 1 to 5 number prompt */
const userNumb = parseInt(prompt("Inserisci un numero da 1 a 5:"));
/* generate a random number for pc */
const computerNumb = Math.floor(Math.random() * 5) + 1;
console.log(computerNumb);

/* add userNumb and computerNumb */
const sum = userNumb + computerNumb
/* create function to verify if sum is even or odd */
function isEven(number){
    return number % 2 === 0;
}
const result = isEven(sum)
/* print a message to declare the winner */
if (userChoice === result){
    alert('hai vinto')
    console.log('hai vinto');
    
}else{
    console.log('ha vinto il computer');
    alert('ha vinto il computer')
}
