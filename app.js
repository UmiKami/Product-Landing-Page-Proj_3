const viewVideoBtn = document.querySelector(".about-container__view-video-btn");
const videoContainer = document.querySelector(".about-container__video-container");
const closeVideoContainer = document.querySelector(".close-1");

viewVideoBtn.addEventListener(`click`, function(){
    videoContainer.classList.add("slide-down")
})

closeVideoContainer.addEventListener(`click`, function(){
    videoContainer.classList.remove("slide-down")
})