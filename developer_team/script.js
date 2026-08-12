const buttons=document.querySelectorAll("button");
buttons.forEach(function(button){
    button.addEventListener("click",()=>{
        button.textContent="Profile Selected";
        

    });
})