//default behavior
//creazione primi 16 numeri
let punteggio=0;
let bombs=[];
for (let index = 0; index < 16; index++) {
    let isIn=true
    while(isIn){
        let randomNum=parseInt(Math.random()*(100-1)+1);
        if(bombs.includes(randomNum)){
            isIn=true;
        }else{
            bombs.push(randomNum);
            isIn=false;
        }   
    }    
}
console.log(bombs); 
let fun;                  
//creazione prima tabella
let inside=document.querySelector('.square');
for (let index = 1; index <=100; index++) {
    let element=document.createElement('div');
    element.innerHTML=index;
    element.addEventListener('click', Checking) /*function(){
        let number=parseInt(element.innerHTML);
        if(bombs.includes(number)){
            element.classList.add('bomb');
            Sconfitta(punteggio);
        }else{
            punteggio+=1;
            console.log(number);
            element.classList.add('checked');
            if(punteggio==(100-16)){
                Vittoria(punteggio);
            }
        }
    });*/
    inside.append(element);
    element.classList.add('square10');
}
//functions:

//comportamento in caso di vittoria
function Vittoria(punti){
    alert('hai vinto');
    document.getElementById('risultato').innerHTML=`hai vinto punti=${punti}`;
    let hide=document.querySelectorAll('.square10');
    for (let index = 0; index < hide.length; index++) {
        hide[index].removeEventListener('click',Checking);
        
    }
}
//comportamento in caso di sconfitta 
function Sconfitta(punti){
    alert('hai perso');
    document.getElementById('risultato').innerHTML=`hai perso punti=${punti}`;
    let hide=document.querySelectorAll('.square10');
    for (let index = 0; index < hide.length; index++) {
        hide[index].removeEventListener('click',Checking);
        
    }
}
//impedire all'utente di premere 2 volte la stessa casella
function RemoveSingleEvent(num){
    let hide=document.querySelectorAll('.square10');
    for (let index = 0; index < hide.length; index++) {
        if(parseInt(hide[index].innerHTML)==num){
            hide[index].removeEventListener('click',Checking);
        }    
    }
}
//funzione per la selezione dei numeri
function Checking(){
    let number=parseInt(this.innerHTML);
    if(bombs.includes(number)){
        this.classList.add('bomb');
        Sconfitta(punteggio);
    }else{
        punteggio+=1;
        RemoveSingleEvent(number);
        console.log(punteggio);
        this.classList.add('checked');
        if(punteggio==(100-16)){
            Vittoria(punteggio);
        }
    }
};

//funzione con la difficolta nuova
function Difficulty(level){
    punteggio=0;
    bombs=[]
    console.log(bombs)
    for (let index = 0; index < 16; index++) {
        let isIn=true
        while(isIn){
            let randomNum=parseInt(Math.random()*(level-1)+1);
            if(bombs.includes(randomNum)){
                isIn=true;
            }else{
                bombs.push(randomNum);
                isIn=false;
            }   
        }    
    }
    console.log(bombs)
    inside.innerHTML='';
    for (let index = 1; index <=level; index++) {
        let element=document.createElement('div');
        element.innerHTML=index;
        element.addEventListener('click', function(){
            let number=parseInt(element.innerHTML);
        if(bombs.includes(number)){
            element.classList.add('bomb');
            Sconfitta(punteggio);
        }else{
            punteggio+=1;
            console.log(number);
            element.classList.add('checked');
            if(punteggio==(100-16)){
                Vittoria(punteggio);
            }
        }
        });
        inside.append(element);
        if(level==100){
            element.classList.add('square10');    
        }else if(level==81){
            element.classList.add('square9');
        }
        else{
            element.classList.add('square7');
        }
    }
}
//cambio difficolta
let choose=document.getElementById('GetDifficulty').addEventListener('click',function(){
    let choice=document.getElementById('difficulty').value;
    document.getElementById('choice').style.display='none';
    if(choice=='Easy'){
        choice=100;
        Difficulty(choice);
    }else if(choice=='Normal'){
        choice=81;
        Difficulty(choice);
    }else{
        choice=49;
        Difficulty(choice);
    }
});
