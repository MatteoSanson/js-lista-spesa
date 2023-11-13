'use strict';

'use strict';

const lista = document.querySelector('.lista');

const spesa = ['pane','latte','mele','pere','farina','uova','pasta'];
console.log (spesa);


// ciclo con for 
// for (let i=0; i <= spesa.length - 1; i++) {
//     console.log(spesa[i]);

//     const articolo = document.createElement('li');
//     lista.append(articolo);
//     articolo.textContent = spesa[i];
// }

// ciclo con while inizializzando una variabile indice i
let i = 0;

while (i <= spesa.length - 1) {
    console.log(spesa[i]);

    const articolo = document.createElement('li');
    lista.append(articolo);
    articolo.textContent = spesa[i];
    i++;
}