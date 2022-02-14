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

// converto la parola inserita in un'array
let output1 = parola.split('');
console.log('output1 ' + output1);

// inverto i caratteri dell'array
let output2 = output1.reverse();
console.log('output2 ' + output2);

// faccio tornare l'array ad una stringa
let output3 = output2.toString('');
console.log('output3 ' + output3);

// rimuovo le virgole dalla stringa
let parolaInvertita = output3.replace(/,/g, '');
console.log(parolaInvertita)


// se la parola inserita dall'utente è uguale alla stessa parola al contrario
if (parola == parolaInvertita) {
    alert('è una parola palindroma!');
} else {
    alert('non è una parola palindroma!');
}

