let parolaUtente = prompt('Inserisci una parola');
console.log (parolaUtente);

let parolaAlContrario = parolaPalindroma(parolaUtente);

if(parolaUtente == parolaAlContrario){
    alert('questa parola è palindroma');
}else{
    alert('questa parola non è palindroma');

}

function parolaPalindroma(parola){
     let parolaInversa = parola.split('').reverse().join('');
     return parolaInversa;
}
