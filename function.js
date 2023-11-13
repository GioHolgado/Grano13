let velo,screen,box;

function start(){
    box= document.querySelectorAll('.box2');
    velo=document.getElementById('velo');
    screen=document.getElementById('screen');
    velo.addEventListener('click',chiudoVelo)
}
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
