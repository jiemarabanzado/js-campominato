//default behavior
let inside=document.querySelector('.square');
for (let index = 1; index <=100; index++) {
    let element=document.createElement('div');
    element.innerHTML=index;
    element.addEventListener('click',function(){
        let number=element.innerHTML;
        console.log(number);
        element.classList.add('checked');
    });
    inside.append(element);
    element.classList.add('square10');
    
}

//functions
function Difficulty(level){
    inside.innerHTML='';
    for (let index = 1; index <=level; index++) {
        let element=document.createElement('div');
        element.innerHTML=index;
        element.addEventListener('click', function(){
            let number=element.innerHTML;
            console.log(number);
            element.classList.add('checked');
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