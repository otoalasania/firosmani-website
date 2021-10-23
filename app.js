
mediumZoom('.zoom', {
    margin: 50
});

///scroll
/*const upButton = document.querySelector(".scrollTop");

window.addEventListener("scroll", function () {
    upButton.classList.toggle("activeUp", window.scrollY > 400);
});

upButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});*/



// NAVBAR //
const navBar = document.getElementById("navBar");
const closeBtn = document.getElementById("closeBtn");

navBar.addEventListener('click', function () {
    document.querySelector(".nav-links").classList.toggle("activeNav");
});



// LOGIN POPUP //
function openLogin() {
    const loginPop = document.getElementById("loginBox");
    loginPop.style.display = "flex";
}

function closeLogin() {
    const loginPop = document.getElementById("loginBox");
    loginPop.style.display = "none";
}

// TABS //
var tabs = document.querySelectorAll(".tabs ul li");
var tab_wraps = document.querySelectorAll(".tab_wrap");

tabs.forEach(function (tab, tab_index) {
    tab.addEventListener('click', function () {
        tabs.forEach(function (tab) {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
        tab_wraps.forEach(function (content, content_index) {
            if (content_index == tab_index) {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });;
    });
});


// ANIMATE EFFECT //
window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 150;
        if (revealTop < windowHeight - revealpoint) {
            reveals[i].classList.add("activeRev");
        } else {
            reveals[i].classList.remove("activeRev");
        }
    }
}


//STORY IMAGES SLIDESHOW//
var indexValue = 0;

function slideShow() {
    setTimeout(slideShow, 1400);
    var x;
    const img = document.querySelectorAll(".firosSide");
    for (x = 0; x < img.length; x++) {
        img[x].style.display = "none";
    }
    indexValue++;
    if (indexValue > img.length) {
        indexValue = 1;
    }
    img[indexValue - 1].style.display = "block";
}
slideShow();




