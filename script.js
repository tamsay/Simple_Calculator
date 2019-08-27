// bind an event listener to the keydown event on the window
let numInput = [...document.querySelectorAll('input')];

numInput.forEach(element => {
    element.addEventListener('keydown', function (event) {
        if (event.keyCode == 101 || event.keyCode == 69) {    
            // prevent default behaviour
            console.log(event);
            event.preventDefault();
            return false;
        }
        return true;
    });  
});

const inputValues =()=>{
    const firstNum = Number(document.querySelector("#numberInput > input").value);
    const secondNum = Number(document.querySelector("#numberInput input:nth-child(2)").value);
    return [firstNum, secondNum];
}
const addition = ()=>{
    [num1, num2] = inputValues();
    resultDisplay(num1 + num2);
}
const subtraction = ()=>{
    [num1, num2] = inputValues();
    resultDisplay(num1 - num2);
}
const division = ()=>{
    [num1, num2] = inputValues();
    resultDisplay(num1 / num2);
}
const multiplication = ()=>{
    [num1, num2] = inputValues();
    resultDisplay(num1 * num2);
}
const modulus = ()=>{
    [num1, num2] = inputValues();
    resultDisplay(num1 % num2);
}
const reset = ()=>{
    (document.querySelector("#numberInput > input").value) = '';
    (document.querySelector("#numberInput input:nth-child(2)").value) = '';
    resultDisplay('');
}
const resultDisplay = (result)=>{
    document.querySelector("#result").innerHTML = result;
}

const addBtn = document.querySelector("#addBtn");
const subtractBtn = document.querySelector("#subtractBtn");
const multiplyBtn = document.querySelector("#multiplyBtn");
const divideBtn = document.querySelector("#divideBtn");
const modulusBtn = document.querySelector("#modulusBtn");
const resetBtn = document.querySelector('#resetBtn');

const addFxn = addBtn.addEventListener("click", addition);
const subtractFxn = subtractBtn.addEventListener("click", subtraction);
const multiplyFxn = multiplyBtn.addEventListener("click", multiplication);
const divideFxn = divideBtn.addEventListener("click", division);
const modulusFxn = modulusBtn.addEventListener("click", modulus);

const resetFxn = resetBtn.addEventListener('click', reset);



