// Nav bar & Home
const header = document.querySelector(".header-container");
const homeContainer = document.querySelector(".home-container");
const homeContainer_Part1 = document.querySelector(".home-container__part-1");
const navLinks = document.querySelectorAll(".nav-links");

// About Section
const viewVideoBtn = document.querySelector(".about-container__view-video-btn");
const videoContainer = document.querySelector(".about-container__video-container");
const closeVideoContainer = document.querySelector(".close-1");

// Pricing Section
const cardContainer = document.querySelectorAll(".pricing-container__card-container");
const cardList = document.querySelectorAll(".card-list");

////////////////////////////////////////////////////////////////////////////
/// NAVBAR SECTION

window.addEventListener("scroll", function(){
    header.classList.toggle("fix-header", window.scrollY > header.clientHeight)

    if(header.classList.contains("fix-header")){
        homeContainer.style.height = "100vh";
        homeContainer_Part1.style.bottom = "36%"
    }else{
        homeContainer.style.height = "88.6vh";
        homeContainer_Part1.style.bottom = "40%"
    }
})

////////////////////////////////////////////////////////////////////////////
/// ABOUT SECTION
viewVideoBtn.addEventListener(`click`, function(){
    videoContainer.classList.add("slide-down");
})

closeVideoContainer.addEventListener(`click`, function(){
    videoContainer.classList.remove("slide-down");
})

////////////////////////////////////////////////////////////////////////////
/// PRICING SECTION
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