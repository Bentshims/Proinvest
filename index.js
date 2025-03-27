document.addEventListener(`DOMContentLoaded`,()=>{

    // burger menu

    const overlay = document.querySelector(`.overlay`)
    const menu_Burger = document.querySelectorAll(`.burger`);
    menu_Burger.forEach(burger => {
        burger.addEventListener(`click`,()=>{
            // overlay.classList.add(`translate`);
            overlay.classList.remove(`none`);
        })
    });
    
    

    // animation logos continue 

    const container = document.querySelector(`.logos-container`);
    const logos = document.querySelector(`.partner-logos`);
    const logo_Clones = logos.cloneNode(true);
    container.appendChild(logo_Clones);
    console.log(container,logos,logo_Clones);
    




    















})