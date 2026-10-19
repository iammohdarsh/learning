let headCount=document.getElementById("head_count")

let count= 0 
function increment(){
    count+= 1
   headCount.innerText=count
    //document.getElementById("head_count").innerText=count
}

let sav = document.getElementById("save")
function loged(){
     sav.textContent+= count +" - "
     //used textContent instead of innerText 
     headCount.innerText=0
     count=0
}

let some= "have you seen the movie \"the lion king\""
// we used this \ to escape the next element which is this " to that we avoid error
console.log(some)