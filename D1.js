/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output collega questo file al tuo HTML e apri la console del browser. 
- Dovrai creare una direttiva di output per testare le variabili od i risultati delle espressioni che crei
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*i datatype utilizzati in JavaScript sono 5:  numerici (espressi in numeri interi), aventi valore ordianale, 
cioè valgono il valore che esprimono (es. 5 + 5 = 10);
di tipo stringa alfanumerica, con valore nominale, cioè valgono il valore che esprimono in maniera letterale che siano esse parole o numeri
(es. '5'+'5'= '55'; 'cane'+'gatto' = canegatto); 
i dati booleani, utilizzati per guidare il nostro codice nel comportamento (output) da mostrare, 
hanno l'importantissimo compito di verificare se un comando dato precedentemente sia vero oppure falso, 
per cui gli unci valori che ammette sono true oppure false. 
Assieme a queste principali categorie, essitono anche i dati privi di una assegnazione:
essi sono i valori di tipo 'null'
(indica un'assenza intenzionale di assegnazione di un valore ad una variabile da parte dell'autore del codice,
è sempre diverso da 0 e restituisce un booleano di tipo fals) e
di tipo 'undefined' 
( si riferisce alla presenza di una variabile che non è mai stat definita o è assente nella porzione di codice
 precednete alla sua invocazione). 
Infine ci sono datatype di tipo 'oggetto',
definiti all'interno di parentesi quadre e contengono al loro interno una collezione di datatype di vario tipo, 
elencati secondo le regole della logica che si vuole seguire.  */
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const Name= 'Manuel';

console.log (Name,'Name')

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
let n1= 12;
let n2= 20;
let n1n2sum = n1 + n2;

console.log('somma n1 e n2', n1 + n2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x=12;

console.log(x,'x')
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let surName= 'Fusco'

console.log ('surName',surName)
console.log('the value of a const cannot be changed', Name !== surName)
console.log(' let surName can substitute const Name', Name === surName)
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y=4;
let easySub= y - x

console.log (easySub, 'easySub')
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1='jhon';

let name2='Jhon';

console.log('jhon is differente by Jhon', name1 !== name2)
console.log('Javascript is not casesensitive', name1 === name2)

const sameName = name2.toLowerCase('')

console.log( 'you can manipulate a string without changing its orginal value',sameName === name1) 
 

//avrei voluto complessificarlo, ma non ci riesco, o meglio, non ancora! Grazie questo esercizo ha stimnolato logica!
