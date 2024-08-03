
const center = document.querySelector(".center")

const line1 = document.querySelector(".line1")
const line2 = document.querySelector(".line2")
const line3 = document.querySelector(".line3")

let activate = false;

center.addEventListener("click", ()=>{
    if(!activate){
        line1.classList.add("line1Move")
        line2.classList.add("line2Move")
        line3.classList.add("line3Move")

        line1.classList.remove("line1MoveBack")
        line2.classList.remove("line2MoveBack")
        line3.classList.remove("line3MoveBack")

        activate = true;
    }
    else{
        line1.classList.remove("line1Move")
        line2.classList.remove("line2Move")
        line3.classList.remove("line3Move")
        
        line1.classList.add("line1MoveBack")
        line2.classList.add("line2MoveBack")
        line3.classList.add("line3MoveBack")
        
        activate = false;
    }
})