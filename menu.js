const nav= document.querySelector("#nav");
const open-burguer=document.querySelector("#open-burguer");
const close-burguer=document.querySelector("#close-burguer");

open-burguer.addEventListener("click", ()=>{
    nav.classList.add("visible");
}

close-burguer.addEventListener("click", ()=>{
    nav.classList.remove("visible"); 
}