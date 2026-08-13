const button=document.querySelectorAll("button");
button.forEach((buttons)=>
    buttons.addEventListener("click",()=>{
 buttons.textContent="Profile is viewed";
    })
);