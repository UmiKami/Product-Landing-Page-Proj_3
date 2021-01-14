const viewVideoBtn = document.querySelector(".about-container__view-video-btn");
const videoContainer = document.querySelector(".about-container__video-container");
const closeVideoContainer = document.querySelector(".close-1");

const cardContainer = document.querySelectorAll(".pricing-container__card-container");
const cardList = document.querySelectorAll(".card-list");

////////////////////////////////////////////////////////////////////////////
/// NAVBAR
////////////////////////////////////////////////////////////////////////////
/// ABOUT SECTION
viewVideoBtn.addEventListener(`click`, function(){
    videoContainer.classList.add("slide-down");
})

closeVideoContainer.addEventListener(`click`, function(){
    videoContainer.classList.remove("slide-down");
})

// Iterate through the all the containers with the same class, aka, all the cards

cardContainer.forEach(function(card){
    card.addEventListener(`mouseenter`, function(eC){
        cardList.forEach(function(eL){
            if(eL.parentElement.parentElement.parentElement.parentElement.innerHTML == eC.currentTarget.innerHTML){
                eL.classList.add("hide-card-text");
            }
        })
    })
    card.addEventListener(`mouseleave`, function(eC){
        cardList.forEach(function(eL){
            if(eL.parentElement.parentElement.parentElement.parentElement.innerHTML == eC.currentTarget.innerHTML){
                eL.classList.remove("hide-card-text");
            }
        })
    })
})