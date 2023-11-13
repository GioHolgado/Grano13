let velo,screen,box;
let boxProdotti;
let arrProdotto= [];
let totale = 0;
function start(){
    box= document.querySelectorAll('.box2');
    velo=document.getElementById('velo');
    screen=document.getElementById('screen');
    velo.addEventListener('click',chiudoVelo);
    boxProdotti=document.querySelectorAll('[data-attr="prodotto"]');
    console.log(boxProdotti);
    boxProdotti.forEach((e)=>e.addEventListener('click',AddToCart));
}
// * Funzione per cambiare visualizzazione (fritti,pala,bevande)
function ChangeView(View){
    box.forEach((e)=>e.classList.add('dnone'))
    document.getElementById(View).classList.remove('dnone');
}

function apriVelo(pizza){
    velo.classList.remove('dnone');
    screen.classList.remove('dnone');
}
function chiudoVelo(){  
    velo.classList.add('dnone');
    screen.classList.add('dnone');
}
function AddToCart(){
    arrProdotto=[]
    let text=this.textContent;
    text.trim()
    text.split('  ').forEach(el => {if(el!='' && el!='\n') arrProdotto.push(el);});
    console.log(arrProdotto[1])
    const div=document.createElement('div');
    div.classList.add('prodottoCarrello');
    const h3=document.createElement('h3');
    h3.innerHTML = arrProdotto[0]
    const span=document.createElement('span');
    span.innerHTML = arrProdotto[1]
    document.getElementById('carrello').appendChild(div);
    div.appendChild(h3);
    div.appendChild(span);
    totale+=parseFloat(arrProdotto[1]);
    document.getElementById('totCarrello').innerHTML=totale + '€';
    
}
