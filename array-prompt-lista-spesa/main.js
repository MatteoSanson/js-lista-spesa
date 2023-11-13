'use strict';

const lista = document.querySelector('.lista');
const notaSpesa = [];

while (true) {
    const elementoLista = prompt('Inserisci un prodotto della spesa per la tua lista. \n Clicca "Annulla" o "OK" con il campo vuoto se vuoi terminare la tua lista.');

    // condizione se clicco o annulla o ok al prompt per far terminare il prompt
    if (elementoLista === null || elementoLista === '') {
        break;
    }

    notaSpesa.push(elementoLista);

    // condizione per stampare in console solo l'articolo inserito dall'utente e non il risultato di annulla o ok
    if (elementoLista !== null && elementoLista !== '') {
        console.log('Ultimo dato inserito:', elementoLista);
    }

    console.log('Lista della spesa aggiornata:', notaSpesa);

    const articolo = document.createElement('li');
    articolo.textContent = elementoLista;
    lista.append(articolo);
}

const titoloLista = document.createElement('h2');
titoloLista.textContent = 'La mia lista della spesa';

document.body.prepend(titoloLista);