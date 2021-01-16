// Nav bar & Home
const header = document.querySelector(".header-container");
const homeContainer = document.querySelector(".home-container");
const homeContainer_Part1 = document.querySelector(".home-container__part-1");
const navLinks = document.querySelectorAll(".header-container__links");

// mobile nav
const responsiveNavBtn = document.querySelector(".responsive-navbar");
const mobileNav = document.querySelector(".mobile-nav");
const mobileNavLinksContainer = document.querySelector(".mobile-nav__links-container");
const mobileNavLinks = document.querySelectorAll(".mobile-nav__links")

// About Section
const viewVideoBtn = document.querySelector(".about-container__view-video-btn");
const videoContainer = document.querySelector(
  ".about-container__video-container"
);
const closeVideoContainer = document.querySelector(".close-1");

// Pricing Section
const cardContainer = document.querySelectorAll(
  ".pricing-container__card-container"
);
const cardList = document.querySelectorAll(".card-list");

////////////////////////////////////////////////////////////////////////////
/// NAVBAR SECTION

window.addEventListener("scroll", function () {

    if(!mobileNav.classList.contains("show-mobile-nav")){
        header.classList.toggle("fix-header", window.scrollY > header.clientHeight);

        if (header.classList.contains("fix-header")) {
          homeContainer.style.height = "100vh";
          homeContainer_Part1.style.bottom = "36%";
        } else {
          homeContainer.style.height = "88.6vh";
          homeContainer_Part1.style.bottom = "40%";
        }
    }
});

// mobile nav
mobileNavLinks.forEach(function (links) {
    links.addEventListener(`click`, function (e) {
      e.preventDefault();
      // navigate to location
      const id = e.currentTarget.getAttribute("href").slice(1);
      const section = document.getElementById(id);
  
      const navHeight = mobileNav.getBoundingClientRect().height;
  
      let position = section.offsetTop - navHeight;
      window.scrollTo({
        left: 0,
        top: position,
      });
    });
  });

responsiveNavBtn.addEventListener(`click`, function (btn) {
  btn.currentTarget.classList.add("hide-btn");
  // mobileNav.classList.remove("hide-btn");
  mobileNav.classList.add("show-mobile-nav");
});

// Smooth scroll fix
navLinks.forEach(function (links) {
  links.addEventListener(`click`, function (e) {
    e.preventDefault();

    // navigate to location
    const id = e.currentTarget.getAttribute("href").slice(1);
    const section = document.getElementById(id);

    const headerHeight = header.getBoundingClientRect().height;
    const isFixed = header.classList.contains("fix-header");

    let position = section.offsetTop - headerHeight;
    window.scrollTo({
      left: 0,
      top: position,
    });
  });
});

////////////////////////////////////////////////////////////////////////////
/// ABOUT SECTION
viewVideoBtn.addEventListener(`click`, function () {
  videoContainer.classList.add("slide-down");
});

closeVideoContainer.addEventListener(`click`, function () {
  videoContainer.classList.remove("slide-down");
});

////////////////////////////////////////////////////////////////////////////
/// PRICING SECTION
cardContainer.forEach(function (card) {
  card.addEventListener(`mouseenter`, function (eC) {
    cardList.forEach(function (eL) {
      if (
        eL.parentElement.parentElement.parentElement.parentElement.innerHTML ==
        eC.currentTarget.innerHTML
      ) {
        eL.classList.add("hide-card-text");
      }
    });
  });
  card.addEventListener(`mouseleave`, function (eC) {
    cardList.forEach(function (eL) {
      if (
        eL.parentElement.parentElement.parentElement.parentElement.innerHTML ==
        eC.currentTarget.innerHTML
      ) {
        eL.classList.remove("hide-card-text");
      }
    });
  });
});
