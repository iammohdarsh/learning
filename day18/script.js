let firstCard=8
let secondCard=1
let nextCard=12
let card=[firstCard,secondCard]
let sum= firstCard+secondCard
let haveWon= false
let isAlive= true
let message= ""
let messageEl=document.getElementById("message")
let cardEl= document.querySelector("#card-el")

let sumEl=document.querySelector("#sum-el")
//we have used qureyselector it is a broader way to
//select elements. we use # with sum-el because it is an id

console.log(`${firstCard}\n${secondCard}`)

function startGame(){
    renderGame()
}

function renderGame(){
    cardEl.textContent="card: "+card[0]+" "+card[1]
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

function newCard(){
    sum= firstCard+secondCard+nextCard
    renderGame()
}