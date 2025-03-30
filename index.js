document.addEventListener(`DOMContentLoaded`,()=>{

    // burger menu

    const overlay = document.querySelector(`.overlay`)
    const menu_Burger = document.querySelectorAll(`.burger`);
    const close_Btn = document.querySelector(`.close-Btn`);
    const overlay_Bg = document.querySelector(`.overlay-bg`);

    menu_Burger.forEach(burger =>{
        burger.addEventListener(`click`,()=>{
            overlay.classList.add(`open`);
        })
    })
   

    console.log(menu_Burger,close_Btn,overlay_Bg);
    
    

    // animation logos continue 

    const container = document.querySelector(`.logos-container`);
    const logos = document.querySelector(`.partner-logos`);
    console.log(container,logos);
    const logo_Clones = logos.cloneNode(true);
    container.appendChild(logo_Clones);
    console.log(container,logos,logo_Clones);
    




    















})