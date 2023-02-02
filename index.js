const operands = document.getElementsByClassName("operands");
const operators = document.getElementsByClassName("operator");
const result = document.getElementById("result");
let val1 = document.getElementById("val1");
let val2 = document.getElementById("val2");


let value;
let operator;

for(elem of operands) {
    elem.addEventListener('click', e => {
        value = parseInt(e.target.innerText);
        result.value = "";
        if(!operator){
            val1.value += value;
        }else{
            val2.value += value;
        }
        // console.log(value)
    })
}
for(let elem of operators) {
    elem.addEventListener('click', e => {
        if(val1.value !== "")
             operator = e.target.innerText;
    })
}

const solve = () => {
    valOne = parseInt(val1.value);
    valTwo = parseInt(val2.value)
    let res = "";
        switch(operator){
            case '/':
                res = valOne/valTwo;
                break;
            case 'x':
                res = valOne*valTwo;
                break;
            case '+':
                res = valOne+valTwo;
                break;
            case '-':
                res = valOne-valTwo;
                break;
            default:
                res = "";

        }
        result.value = res;
        if(res) {
            val1.value = "";
            val2.value = "";
            operator = "";
        }
}
