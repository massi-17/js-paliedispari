// Palidroma
// Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

// Chiedo all'utente di inserire una parola
let parola 
check = false;

// creo un ciclo
do {
    // chiedo una parola
    parola = prompt('Inserisci una parola');
    // de la parola non è un numero il ciclo è true e si ferma
    if (isNaN(parola)) {
        check = true;
    } else {
        // se è false quindi è un numero manda l'alert e ricomincia
        alert('Non è un valore valido!');
    }
} while (check == false);

verificaPalindroma (parola);

function verificaPalindroma(parolaInserita) {

        // converto la parola inserita in un'array
    let parolaSplit = parolaInserita.split('');
    console.log(parolaSplit);

    // inverto i caratteri dell'array
    let parolaReverse = parolaSplit.reverse();
    console.log(parolaReverse);

    // faccio tornare l'array ad una stringa
    let parolaString = parolaReverse.toString('');
    console.log(parolaString);

    // rimuovo le virgole dalla stringa
    let parolaInvertita = parolaString.replace(/,/g, '');
    console.log(parolaInvertita)


    // se la parola inserita dall'utente è uguale alla stessa parola al contrario
    if (parola == parolaInvertita) {
        alert('è una parola palindroma!');
    } else {
        alert('non è una parola palindroma!');
    }


}


