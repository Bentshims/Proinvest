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

    // const containerLogo = document.querySelector(`#container-logo`);
    // const logos = document.querySelector(`#partner-logos`);
    // console.log(containerLogo,logos);
    // let logoClone = logos.cloneNode(true);
    // containerLogo.appendChild(logoClone);
    // console.log(logoClone);



    const contactPage = document.querySelector(`#contact`);
    console.log(contactPage);
    

    if (contactPage) {
        function sendEmail(e){
            e.preventDefault();
            let emailValues = {
                name : document.querySelector(`#name`).value,
                email : document.querySelector(`#email`).value,
                subject : document.querySelector(`#subject`).value,
                message : document.querySelector(`#message`).value
            };
            emailjs.send(`service_m3q0p4q`,`template_tumtlw7`,emailValues)
            .then(()=>{
                alert(`Mesage envoyé avec succès`)
            })
            .catch((error)=>{
                alert(`Une erreur est survenue. Réessayez.`);
                console.error(`Echec de l'envoie`, error);
                
            });
            console.log(`message envoyer`);
            form.reset()
            
        }
        const submitForm = document.querySelector(`#form`);
        submitForm.addEventListener(`submit`,sendEmail);
    }


    






















    // animation texte 
    
    AOS.init({
    duration: 1700,
    easing:`ease-in`,
    offset:100,
    delay:200,
    once: false,

    
    
    




    
});














})