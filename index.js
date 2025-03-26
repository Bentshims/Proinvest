document.addEventListener(`DOMContentLoaded`,()=>{

    const logoContainer = document.querySelector(`.logos-container`)
    const logos = document.querySelector(`.partner-logos`);
    let logoClones = logos.cloneNode(true);
    logoContainer.appendChild(logoClones);
    logoContainer.classList.add(`flex`,`border`,`border-white`);
















})