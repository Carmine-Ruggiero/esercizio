


/* CONSTAMTI GLOBALIS */
const listaSection = document.querySelector(".lista");

const statisticheSection = document.querySelector(".statistiche");

const inputTask = document.querySelector("#input-task");

const btnAggiungi = document.querySelector("#btn-aggiungi");

const btnTutti = document.querySelector("#btn-tutti");

const btnAttivi = document.querySelector("#btn-attivi");

const btnCompletati = document.querySelector("#btn-completati");

/*APERTURE ARRAY COSE DA FARE */

let coseDaFare = [
  {
    testo: "Studiare JavaScript",
    completata: true
  },
  {
    testo: "Scrivere la ToDoList",
    completata: false
  },
  {
    testo: "Bere il caffè",
    completata: true
  },
  {
    testo: "Ripassare gli eventi DOM",
    completata: false
  }
];
/* RENDER */

function render() {

  listaSection.innerHTML = "";

  coseDaFare.forEach(function(todo) {

    const riga = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completata;

    const testo = document.createElement("span");
    testo.textContent = todo.testo;

    if (todo.completata) {
      testo.style.textDecoration = "line-through";
    }

    const bottone = document.createElement("button");
    bottone.textContent = "Elimina";

    riga.appendChild(checkbox);
    riga.appendChild(testo);
    riga.appendChild(bottone);

    listaSection.appendChild(riga);

  });

  const attivi = coseDaFare.filter(function(todo) {
    return todo.completata === false;
  });

  statisticheSection.textContent =
    "Attivi: " + attivi.length;

}

render();