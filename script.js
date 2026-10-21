/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto questi commenti.
- Pattern fondamentale: stato -> render() -> eventi.
  Tutto cio' che vedi a schermo dipende dallo stato.
  Gli eventi modificano lo stato e poi chiamano render().
- Apri index.html nel browser. Apri la console (DevTools) per gli errori.
- Cerca su MDN solo i concetti dichiarati come "cerca tu":
  localStorage, Blob/URL.createObjectURL, FileReader.
  Tutto il resto e' stato visto in settimana.
- Niente AI per generare codice. Niente template scaricati.
*/


/* STATO
   In cima al file definisci poche variabili globali:
   - un array di oggetti come dato principale (es. libri, ricette, film, ...)
   - una variabile per il filtro corrente
   - una variabile per l'ordinamento corrente
   - una variabile per la stringa di ricerca corrente

*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const listaSection = document.querySelector(".lista");
const formSection = document.querySelector(".form");
const controlliSection = document.querySelector(".controlli");
const statisticheSection = document.querySelector(".statistiche");
const notifica = document.querySelector("#notifica"); 
/*


/* RENDER()
   Una sola funzione che ridipinge la lista. A ogni chiamata:
   1) parte dall'array completo,
   2) filtra,
   3) ordina,
   4) svuota il container DOM,
   5) ricrea gli elementi DOM per gli oggetti risultanti.
   Aggiorna anche conteggi e statistiche.
   Salva lo stato in localStorage in fondo a render() (cerca tu come funziona).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const listaSection = document.querySelector(".lista");
const cosedafare = [
  {
    id: 1,
    testo: "Studiare JavaScript",
    completata: true
  },
  {
    id: 2,
    testo: "Scrivere la ToDoList",
    completata: false
  },
  {
    id: 3,
    testo: "Bere il caffè",
    completata: true
  },
  {
    id: 4,
    testo: "Ripassare gli eventi DOM",
    completata: false
  }
  
];
function render() {
  listaSection.textContent ="",
  cosedafare.forEach
}







/* FORM CON VALIDAZIONE
   addEventListener("submit") sul form.
   event.preventDefault().
   Leggi i valori con .value.trim().
   Se uno dei campi obbligatori e' vuoto, mostra errore e return.
   Altrimenti push allo stato, form.reset(), render().
   Id univoco con Date.now().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* INTERAZIONI BASE — eliminare, modificare, contare
   - Elimina: filter per id, render(). Event delegation sul container.
   - Modifica in-place: button "Modifica". Al click il testo diventa <input>,
     si conferma con Invio o blur.
   - Conteggi dinamici dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* RICERCA, FILTRO, ORDINAMENTO
   - Ricerca live: <input> con event "input". Salva in stato e render().
   - Filtro: <select> con event "change". Salva in stato e render().
   - Ordinamento: due button (o select). Salva in stato e render().
   I tre si compongono dentro render() in fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* NOTIFICHE TEMPORANEE
   Funzione notifica(testo) che imposta il testo del <div id="notifica">,
   lo mostra (display: block), poi dopo 3000ms (setTimeout) lo nasconde.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* TEMA CHIARO/SCURO
   Un button che chiama document.body.classList.toggle("dark").
   In CSS scrivi le regole opposte (es. body.dark { background: #111; ... }).
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* PERSISTENZA — localStorage (cerca tu su MDN)
   - In fondo a render(), salva lo stato:
       localStorage.setItem("dati", JSON.stringify(stato));
   - All'avvio, prima della prima render(), carica:
       const salvato = localStorage.getItem("dati");
       if (salvato) stato = JSON.parse(salvato);
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* RIORDINO ↑ ↓
   Due button su ogni elemento. Click su ↑ scambia con il precedente nell'array,
   ↓ con il successivo. Event delegation. Poi render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESPORTAZIONE / IMPORTAZIONE JSON (cerca tu su MDN)
   - Esporta: crea un Blob con JSON.stringify(stato), genera un URL con
     URL.createObjectURL e simula il click su un <a download>.
   - Importa: <input type="file"> + FileReader per leggere il contenuto come
     testo, JSON.parse, sostituisci lo stato, render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* STATISTICHE GRAFICHE
   Almeno due indicatori: contatori grandi e/o barre orizzontali
   (<div> con width: X% in base al dato). Aggiorna dentro render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* MULTI-VISTA — lista / card / tabella
   Una variabile globale "vista" che render() legge per decidere quale HTML
   produrre. Tre button cambiano "vista" e chiamano render().
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* CATEGORIE
   Aggiungi un campo categoria nello schema. Nel form un <select> per sceglierla.
   In render(), raggruppa con reduce in { categoria: [elementi] } e disegna un
   header per categoria con sotto la lista di quella categoria.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


// 1. Stato dell'applicazione con dati iniziali simili al mockup
let todos = [
  { id: 1, text: "Studiare JavaScript", completed: true },
  { id: 2, text: "Scrivere la ToDoList", completed: false },
  { id: 3, text: "Bere il caffè", completed: true },
  { id: 4, text: "Ripassare gli eventi DOM", completed: false }
];

let currentFilter = 'all';

// 2. Elementi del DOM
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const listaContainer = document.querySelector('.lista');
const statsElement = document.getElementById('stats');
const filterButtons = document.querySelectorAll('.filter-btn');

// 3. Funzione di Rendering principale
function render() {
  listaContainer.innerHTML = '';

  // Filtra i todo in base allo stato corrente
  const filteredTodos = todos.filter(todo => {
    if (currentFilter === 'active') return !todo.completed;
    if (currentFilter === 'completed') return todo.completed;
    return true; // 'all'
  });

  // Genera il markup per ciascun elemento filtrato
  filteredTodos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;

    todoItem.innerHTML = `
      <div class="todo-left">
        <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
        <span class="todo-text">${todo.text}</span>
      </div>
      <button class="delete-btn" data-id="${todo.id}">Elimina</button>
    `;

    listaContainer.appendChild(todoItem);
  });

  // Aggiorna il contatore dei task attivi (non completati)
  const activeCount = todos.filter(todo => !todo.completed).length;
  statsElement.textContent = `Attivi: ${activeCount}`;
}

// 4. Aggiungere un nuovo ToDo
function addTodo() {
  const text = todoInput.value.trim();
  if (text === '') return;

  const newTodo = {
    id: Date.now(), // ID univoco temporaneo
    text: text,
    completed: false
  };

  todos.push(newTodo);
  todoInput.value = '';
  render();
}

// 5. Event Listeners
addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTodo();
});

// Gestione click all'interno della lista (Checkbox ed Elimina) usando la Event Delegation
listaContainer.addEventListener('click', (e) => {
  const id = parseInt(e.target.dataset.id);
  if (!id) return;

  if (e.target.type === 'checkbox') {
    // Cambia lo stato di completamento
    todos = todos.map(todo => todo.id === id ? { ...todo, completed: e.target.checked } : todo);
    render();
  } else if (e.target.classList.contains('delete-btn')) {
    // Rimuove l'elemento dall'array
    todos = todos.filter(todo => todo.id !== id);
    render();
  }
});

// Gestione dei filtri (Tutti, Attivi, Completati)
filterButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    filterButtons.forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    
    currentFilter = e.target.dataset.filter;
    render();
  });
});

// Inizializzazione della pagina al primo avvio
render();

