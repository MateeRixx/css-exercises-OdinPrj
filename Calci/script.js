

let result={
    value:0
}

let othernumber=0;


function add(result,a){
    result.value=result.value+a;
    return result;

    
}

function subtraction(result,b){
    result.value=result.value-b;
    return result;
}


function product(result,c){
    result.value=result.value*c;
    return result;
}

function division(result,d){
    if(d===0){
        return null;

    }
    result.value=result.value/d;
    return result;
}


let answerToShow=document.querySelector('#answer');










let buttons = document.querySelectorAll('.Number-button');

let seven=buttons[0];
seven.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='7';
    });

    let eight=buttons[1]
eight.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='8';
    });


let nine=buttons[2]
nine.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='9';
    });


let four=buttons[3]
four.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='4';
    });

let five=buttons[4]
five.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='5';
    });

let six=buttons[5]
six.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='6';
    });

    let one=buttons[6]
one.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='1';
    });


let two=buttons[7]
two.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='2';
    });

let three=buttons[8]
three.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='3';
    });

let zero=buttons[9]
zero.addEventListener('click', ()=> {
        document.querySelector('#answer').textContent+='0';
    });
    



let clearBtn=document.querySelector('#clearallButton');
clearBtn.addEventListener('click',()=>{
    
    document.querySelector('#answer').textContent='';
})


// now applying action on operation buttons 

let operationButton=document.querySelectorAll('.ArthiematicButtonGrid button')

let plus=operationButton[0];
plus.addEventListener('click',()=>{
        
   document.querySelector('#answer').textContent+='+';
})

let minus=operationButton[1];
minus.addEventListener('click',()=>{
        
   document.querySelector('#answer').textContent+='-';
})


let multiply=operationButton[2];
multiply.addEventListener('click',()=>{
        
   document.querySelector('#answer').textContent+='*';
})

let divide=operationButton[3];
divide.addEventListener('click',()=>{
   document.querySelector('#answer').textContent+='/';
})


let equalToo = document.querySelector('#Equlato');

equalToo.addEventListener('click', () => {
    // 1. Calculate the string math expression
    let solution = eval(answerToShow.textContent);
    
    // 2. Display the saved solution on the screen (Fixed variable name)
    answerToShow.textContent = solution; 
});
