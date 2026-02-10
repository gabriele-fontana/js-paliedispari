
/* crea funzione 'isPalindroma */
function isPalindroma(word) {
    /* Rendiamo la parola minuscola */
   const lwrcaseWord = word.toLowerCase(); 
   const rvrsWord = lwrcaseWord.split('').reverse().join('');

    /* Invertiamo la parola: split trasforma in array, reverse lo inverte, join ricrea la stringa */
return lwrcaseWord === rvrsWord;
}

/* Chiediamo l'inserimento all'utente tramite prompt */
const parolaUtente = prompt("Inserisci una parola:");