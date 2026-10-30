let firstCard=21
let secondCard=1
let sum= firstCard+secondCard
let haveWon= false
let isAlive= true
let message= ""
let messageEl=document.getElementById("message")

let sumEl=document.querySelector("#sum-el")
//we have used qureyselector it is a broader way to
//select elements. we use # with sum-el because it is an id

console.log(`${firstCard}\n${secondCard}`)

function startGame(){
    if (sum===21){
        message= "you've won!"
        haveWon= true
    } else if (sum<21) {
        message= "do you want to draw a card!"
    } else {
        message= "you're out!"
        isAlive= false
    }
    messageEl.textContent=message
    sumEl.innerText="sum : "+sum
}