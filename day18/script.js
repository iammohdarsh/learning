let firstCard=21
let secondCard=1
let sum= firstCard+secondCard

console.log(`${firstCard}\n${secondCard}`)


if (sum===21){
    console.log("you've won!")
} else if (sum<21) {
    console.log("do you want to draw a card!")
} else {
    console.log("you're out!")
}