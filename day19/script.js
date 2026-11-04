let things=["hey","its",27,true]
console.log(things)
console.log(things.length)

things.push(19)
console.log(things)
things.pop()
console.log(things)

//<---loops--->
for(i=0; i < things.length; i++){
    console.log(things[i])
} 

//DOM using loops
let ElementEL=document.querySelector("#element")
function addElement() {
    for(i=0; i<things.length; i++){
        ElementEL.textContent+=" "+things[i]
    }
}