let home=document.getElementById("score_home")
let guest=document.getElementById("score_guest")


function addone(team){
    if (team==="home") {
        home.innerText=Number(home.innerText)+1
    }else{
        guest.innerText=Number(guest.innerText)+1
    }
}

function addtwo(team){
     if (team==="home") {
        home.innerText=Number(home.innerText)+2
    }else{
        guest.innerText=Number(guest.innerText)+2
    }
}

function addthree(team){
     if (team==="home") {
        home.innerText=Number(home.innerText)+3
    }else{
        guest.innerText=Number(guest.innerText)+3
    }
}

function reset(){
    home.innerText=0
    guest.innerText=0
}
function lead(){
    if (Number(home.innerText)>Number(guest.innerText)) {
        home.style.border="5px solid gold";
        guest.style.border="5px solid black";
    }
    else if (Number(home.innerText)<Number(guest.innerText)) {
        guest.style.border= "5px solid gold";
        home.style.border="5px solid black";
    } else {
        home.style.border="5px solid black";
        guest.style.border="5px solid black";
    }
}
