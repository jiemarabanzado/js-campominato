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
            console.log(randomNum);
            isIn=false;
        }   
    }    
}
console.log(bombs);                   
//creazione prima tabella
let inside=document.querySelector('.square');
for (let index = 1; index <=100; index++) {
    let element=document.createElement('div');
    element.innerHTML=index;
    element.addEventListener('click',function(){
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
    element.classList.add('square10');
}
//functions
function Vittoria(punti){
    alert('hai vinto');
    document.getElementById('risultato').innerHTML=`hai vinto punti=${punti}`;
}
function Sconfitta(punti){
    alert('hai perso');
    document.getElementById('risultato').innerHTML=`hai perso punti=${punti}`;
}

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
                console.log(randomNum);
                isIn=false;
            }   
        }    
    }
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
