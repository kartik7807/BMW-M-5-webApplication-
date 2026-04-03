let menuIconElement= document.querySelector("#menuIcon");

let navElement=document.querySelector("nav");


menuIconElement.addEventListener("click", ()=>{
    navElement.classList.toggle("left-[0px]")
})