
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