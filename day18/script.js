let firstCard=21
let secondCard=1
let sum= firstCard+secondCard
let haveWon= false
let isAlive= true
let message= ""

console.log(`${firstCard}\n${secondCard}`)


if (sum===21){
    message= "you've won!"
    haveWon= true
} else if (sum<21) {
    message= "do you want to draw a card!"
} else {
    message= "you're out!"
    isAlive= false
}
console.log(message)