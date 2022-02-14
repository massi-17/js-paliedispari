// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

// dichiaro le variabili
let pariDispari;
let numeroUtente;
let numeroPc;
let totale;
let check1 = false;
let check2 = false;

// creo un ciclo do
do {
    // chiedo se pari o dispari
    pariDispari = prompt('pari o dispari?');
    // se scegli pari o se scegli dispari
    if (pariDispari.toLowerCase() == 'pari' || pariDispari.toLowerCase() == 'dispari') {
        // il ciclo si ferma
        check1 = true;
    } else {
        // se no va avanti a chiederlo
        alert('Devi scrivere pari o dispari!');
    }
} while (check1 == false);
console.log('L\'utente ha scelto ' + pariDispari)

// creo un altro ciclo
do {
    // chiedo un numero da 1 a 5
    numeroUtente = parseInt(prompt('Inserisci un numero tra 1 e 5'));
    
    // se non è un numero
    if (isNaN(numeroUtente)) {
        // mando un alert e il ciclo riparte
        alert('Non è un valore valido!');
        // se è minore di 1 o maggiore di 5
    } else if (numeroUtente < 1 || numeroUtente > 5) {
        // mando un alert e il ciclo riparte
        alert('Il valore è fuori range!');
        // se no il ciclo si ferma
    } else {
        check2 = true; 
    }

} while (check2 == false); 

console.log ('Il numero dell\'utente è ' + numeroUtente);

// creo una funzione per calcolare un numero random intero compreso tra 1 e 5
function numeroRandom(numeroInserito) {

    return parseInt(Math.floor(Math.random() * (5 + 1 - 1) + 1));

}

// il numero random generato viene attribuito all'input del PC
numeroPc = numeroRandom(numeroPc)
console.log ('Il numero del Pc è ' + numeroPc);

// creo una funziona per calcolare la somma
function somma(primoNumero, secondoNumero){

    return primoNumero + secondoNumero;

}

// uso la funzione per calcolare la somma tra il numero dell'utente e il numero random del pc
totale = somma(numeroUtente,numeroPc); 
console.log('Il totale è ' + totale);

// creo una funzione per capire se il numero sommato è dispari
function IsNotUneven(numero)
{
    if (isNaN(numero) == false)
    {
        return (numero %2 == 1 ?  true : false);
    }
    else
    {
        return null;
    }
}

// assegno alla variabile risultato il valore del numero decretato dalla funzione (se ritorna falso è pari, se ritorna true è dispari)
let risultato = IsNotUneven(totale);


// se il risultato è falso e l'utente ha scelto pari
if (risultato == false && pariDispari == 'pari') {
    // ha vinto l'utente
    console.log('il numero è pari, hai vinto!')
    // se il risultato è true e l'utente ha scelto dispari
} else if (risultato == true && pariDispari == 'dispari!') {
    // ha vinto l'utente
    console.log('il numero è dispari, hai vinto!')
} else {
    // se no ha vinto il pc
    console.log('Hai perso!')
}


