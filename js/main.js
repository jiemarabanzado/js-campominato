//default behavior
//creazione primi 16 numeri
let punteggio=0;
let bombs=[];
let liv=100;
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
let fun;                  
//creazione prima tabella
let inside=document.querySelector('.square');
for (let index = 1; index <=100; index++) {
    let element=document.createElement('div');
    element.innerHTML=index;
    element.addEventListener('click', Checking);
    inside.append(element);
    element.classList.add('square10');
}
//functions:

//comportamento in caso di vittoria
function Vittoria(punti){
    document.getElementById('points').style.display='block';
    document.getElementById('announce').innerHTML='Hai Vinto!!';
    document.getElementById('number').innerHTML=punteggio;
    if(liv==100){
        let hide=document.querySelectorAll('.square10');
        for (let index = 0; index < hide.length; index++) {
            hide[index].removeEventListener('click',Checking);
            
        }
    }else if(liv==81){
        let hide=document.querySelectorAll('.square9');
        for (let index = 0; index < hide.length; index++) {
            hide[index].removeEventListener('click',Checking);
            
        }
    }else {
        let hide=document.querySelectorAll('.square7');
        for (let index = 0; index < hide.length; index++) {
            hide[index].removeEventListener('click',Checking);
            
        }
    }
        
}
//comportamento in caso di sconfitta 
function Sconfitta(punti){
    document.getElementById('points').style.display='block';
    document.getElementById('announce').innerHTML='Hai Perso!!';
    document.getElementById('number').innerHTML=punteggio;
    if(liv==100){
        let hide=document.querySelectorAll('.square10');
        for (let index = 0; index < hide.length; index++) {
            hide[index].removeEventListener('click',Checking);
        }
    }else if(liv==81){
        let hide=document.querySelectorAll('.square9');
        for (let index = 0; index < hide.length; index++) {
            hide[index].removeEventListener('click',Checking);
        }
    }else{
        let hide=document.querySelectorAll('.square7');
        for (let index = 0; index < hide.length; index++) {
            hide[index].removeEventListener('click',Checking);
        }
    }
        
}
//impedire all'utente di premere 2 volte la stessa casella
function RemoveSingleEvent(num){
    if(liv==100){
        let hide=document.querySelectorAll('.square10');
        for (let index = 0; index < hide.length; index++) {
            if(parseInt(hide[index].innerHTML)==num){
                hide[index].removeEventListener('click',Checking);
            }    
        }
    }else if(liv==81){
        let hide=document.querySelectorAll('.square9');
        for (let index = 0; index < hide.length; index++) {
            if(parseInt(hide[index].innerHTML)==num){
                hide[index].removeEventListener('click',Checking);
            } 
        }
    }else{
        let hide=document.querySelectorAll('.square7');
        for (let index = 0; index < hide.length; index++) {
            if(parseInt(hide[index].innerHTML)==num){
                hide[index].removeEventListener('click',Checking);
            } 
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
        this.classList.add('checked');
        if(punteggio==(liv-16)){
            Vittoria(punteggio);
        }
    }
};

//funzione con la difficolta nuova
function Difficulty(level){
    punteggio=0;
    bombs=[]
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
    inside.innerHTML='';
    for (let index = 1; index <=level; index++) {
        let element=document.createElement('div');
        element.innerHTML=index;
        element.addEventListener('click', Checking)
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
        liv=100;
        Difficulty(liv);
    }else if(choice=='Normal'){
        liv=81;
        Difficulty(liv);
    }else{
        liv=49;
        Difficulty(liv);
    }
});
