document.addEventListener(`DOMContentLoaded`,()=>{
    // burger menu
    const menuburgers = document.querySelectorAll(".burger");
    const overlayContainer = document.querySelector(".overlay-container");
    const closeoverlays = document.querySelectorAll("#closeBtn , .overlay-bg");
    const overlayBg = document.querySelector(`.overlay-bg`);
    menuburgers.forEach(burger =>{
        burger.addEventListener(`click`,()=>{
            overlayContainer.classList.toggle(`-translate-x-full`);
        })
    })

    console.log(document.querySelectorAll(`#closeBtn`));
    
    
    closeoverlays.forEach(closeoverlay =>{
        closeoverlay.addEventListener(`click`,()=>{
            // if (!(overlayContainer.classList.contains(`-translate-x-full`))) {
            // overlayContainer.classList.add(`-translate-x-full`);
            // }
            overlayContainer.classList.add(`-translate-x-full`);

        })
    })
    


  
   

    








    // animation texte 
    AOS.init({
    duration: 1700,
    easing:`ease-in`,
    offset:100,
    delay:200,
    once: false,

    
    
    




    
});














})