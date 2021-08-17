
const numberButtons = document.getElementsByClassName('data-number');
const operationButtons = document.getElementsByClassName('data-operation');

const equalButton = document.getElementById('data-equals');
const deleteButton = document.getElementById('data-delete');
const resetButton = document.getElementById('data-reset');
const previousOparendTextElement = document.getElementById('data-previous-oparend');
const currentOparendTextElement = document.getElementById('data-current-oparend');



let num = '';
let currentOparend;
let previousOparend;
let operationTem;

function appendNumber(number){
    if(number == '.' && currentOparendTextElement.innerText.includes('.')){
        return;
    }
    num = num + number.toString();
    currentOparendTextElement.innerText = num;
    currentOparend = parseFloat(num);
}

function chooseOperation(operation){
    if(currentOparendTextElement.innerText == '') return
    if(previousOparendTextElement.innerText != ''){
        compute();
    }
    
    const temp = currentOparendTextElement.innerText;
    previousOparend = parseFloat(temp); 

    previousOparendTextElement.innerText = temp.toString() + operation.toString();
    currentOparendTextElement.innerText = '';
    num = '';
}

function compute(){

    let computation;
    const current = currentOparend;
    const prev = previousOparend;
    if(isNaN(prev) || isNaN(current)) return
    
    switch (operationTem){
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '/':
            computation = prev / current;
            break;
        case 'x':
            computation = prev * current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '-':
            computation = prev - current;
            break;
        default:
            return
    }

    currentOparendTextElement.innerText = computation;
    operationTem = undefined;
    previousOparendTextElement.innerText = '';
    num = '';
}


resetButton.addEventListener('click', ()=>{
    currentOparendTextElement.innerText = '';
    previousOparendTextElement.innerText = '';
    num = '';
});

for(const button of numberButtons){
    button.addEventListener('click', () => {
       appendNumber(button.innerText);
    });
}

for(const button of operationButtons){
    button.addEventListener('click', () => {
       chooseOperation(button.innerText);
       operationTem = button.innerText;
    });
}

equalButton.addEventListener('click', () =>{
    compute();
});
deleteButton.addEventListener('click', () =>{
    num = num.slice(0,- 1);
    currentOparendTextElement.innerText = num;
});

