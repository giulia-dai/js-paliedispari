let pariDispari = prompt(' Pari o Dispari?');
console.log(pariDispari);


let numeroUtente = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log('numero utente' ,numeroUtente);

let i = 0;

while (i < 1){
    i++;
    console.log(numeroRandom (1,5) , "(numero random del pc)");
}

function numeroRandom (min, max){
    let numeroPc = Math.floor(Math.random()*(max - min + 1) + min);
    return numeroPc;
}

let somma = numeroRandom (1,5) + numeroUtente;
console.log ('questa è la somma:' , somma );









