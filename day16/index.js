let num1= 4
let num2= 5
document.getElementById("number1").innerText=num1
document.getElementById("number2").innerText=num2
let op=document.getElementById("operator")
let end_result= document.getElementById("result")
let Result=0

function add(){
    Result=num1+num2
    end_result.innerText="Result : "+Result
    op.innerText="+"
}
function sub(){
    Result=num1-num2
    end_result.innerText="Result : "+Result
    op.innerText="-"
}
function multi(){
    Result=num1*num2
    end_result.innerText="Result : "+Result
    op.innerText="x"
}
function div(){
    Result=num1/num2
    end_result.innerText="Result : "+Result
    op.innerText="/"
}