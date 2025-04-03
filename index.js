document.addEventListener(`DOMContentLoaded`,()=>{
    // burger menu

    document.addEventListener("DOMContentLoaded", function () {
        const overlayContainer = document.querySelector(".overlay-container");
        const menuButton = document.querySelector("#menuButton"); // Bouton pour ouvrir
        const closeButton = document.querySelector(".overlay button"); // Bouton pour fermer
    
        menuButton.addEventListener("click", function () {
            overlayContainer.classList.remove("-translate-x-full");
        });
    
        closeButton.addEventListener("click", function () {
            overlayContainer.classList.add("-translate-x-full");
        });
    });
    


  
   

    








    // animation texte 
    AOS.init({
    duration: 1700,
    easing:`ease-in`,
    offset:100,
    delay:200,
    once: false,

    
    
    




    
});














})