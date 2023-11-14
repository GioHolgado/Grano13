let velo, screen, box;
let boxProdotti;
let arrProdotto = [];
let totale = 0;
let dataProd = 0;
function start() {
  box = document.querySelectorAll(".box2");
  velo = document.getElementById("velo");
  screen = document.getElementById("screen");
  velo.addEventListener("click", chiudoVelo);
  boxProdotti = document.querySelectorAll('[data-attr="prodotto"]');
  console.log(boxProdotti);
  boxProdotti.forEach((e) => e.addEventListener("click", AddToCart));
}
// * Funzione per cambiare visualizzazione (fritti,pala,bevande)
function ChangeView(View) {
  box.forEach((e) => e.classList.add("dnone"));
  document.getElementById(View).classList.remove("dnone");
}

function apriVelo(pizza) {
  velo.classList.remove("dnone");
  screen.classList.remove("dnone");
}
function chiudoVelo() {
  velo.classList.add("dnone");
  screen.classList.add("dnone");
}
function AddToCart() {
  arrProdotto = [];
  let text = this.textContent;
  text.trim();
  text.split("  ").forEach((el) => {
    if (el != "" && el != "\n") arrProdotto.push(el);
  });
  console.log(arrProdotto[1]);
  createProduct(dataProd);
  dataProd++;
}
function createProduct(dataProd) {
  const div = document.createElement("div");
  div.classList.add("prodottoCarrello");
  const h3 = document.createElement("h3");
  h3.innerHTML = arrProdotto[0];
  const span = document.createElement("span");
  span.innerHTML = parseFloat(arrProdotto[1]) + "€";
  span.setAttribute("start-prize", parseFloat(arrProdotto[1]));
  const createSelect = document.createElement("select");
  createSelect.setAttribute("data-prod", dataProd);
  createSelect.setAttribute("onchange", `changePrize(${dataProd})`);
  document.getElementById("carrello").appendChild(div);
  span.setAttribute("data-prod", dataProd);
  div.appendChild(h3);
  div.appendChild(createSelect);
  div.appendChild(span);
  calcoloTotale();
  let queryAttr = `select[data-prod="${dataProd}"]`;
  let select = document.querySelector(queryAttr);
  for (var i = 1; i < 20; i++) {
    let option = document.createElement("option");
    option.innerHTML = i;
    select.appendChild(option);
  }
}
function changePrize(dataProd) {
  let option = document.querySelector(`select[data-prod="${dataProd}"]`);
  let span = document.querySelector(`span[data-prod="${dataProd}"]`);
  let prezzo = span.getAttribute("start-prize");
  let totProdotto = option.value * prezzo;
  span.innerHTML = totProdotto + "€";
  calcoloTotale();
}
function calcoloTotale() {
  prezzi = [];
  const spanPrezzi = document.querySelectorAll(".carrello span");
  spanPrezzi.forEach((e) => {
    prezzi.push(parseFloat(e.innerHTML));
  });

  let totale = prezzi.reduce((acc, e) => {
    acc+=e;
    return acc;
  }, 0);
  document.getElementById("totCarrello").innerHTML = totale + " €";
}
