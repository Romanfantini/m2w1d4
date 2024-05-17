/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
    Di principali datatype di javascript:
    - number: sono i dati numerici che vanno da - infinito a + infinito   
    - string: è un testo, che può essere sia numerico sia a lettere o simboli. Deve essere tra virgolette ""
    - array: è una riga di dati, che possono essere sia numerici o letterali o booleani, questi dati vengono riconosciuti tramite 0 1 2 e così via,si apre con []
    - boolean: rappresenta o vero o falso 
    - oggetto: è un insieme che può contenere tutti i datatype, però a differenza di un array qui si possono dare i nomi ai dati. Si apre con {}
    - null: nessun valore
    - undefined: non ancora definito ma che verrà definito più avanti.
*/
let number= 12;
let string= "ciao";
let oggetto= {
    nameId: "roman",
    From:"malesco",
    Worker: true,
}
let array= [2,true, "ciao", {oggetto}];
let boolean= true;
let nullEsample= null;
let undefinedEsample;
console.log (number,array, string, oggetto, boolean, nullEsample, undefinedEsample)

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
 un oggetto è come se fosse il raccoglitore di dati, dove ogni dato ha la propria cartella. quindi più facile da trovare.
*/
let es2= {
    età: 23, 
    nome: "Roman",
    }

    console.log (es2)

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    let n1= 12;
    let n2= 20;


    let addition= (n1 + n2)
    console.log (addition);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

    let x= 12;
    console.log (x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    const name= "roman";
    console.log(name)
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
    const y = 4;

    let sotraction= (y - x);
    console.log (sotraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const name1= "john"
let name2= "John"

let test1= (name1===name2);

let test2= (name1===name2.toLowerCase());

console.log (test1);
console.log (test2);