
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


const navBar = document.getElementById("navBar");
const closeBtn = document.getElementById("closeBtn");

navBar.addEventListener('click', function () {
    document.querySelector(".nav-links").classList.toggle("activeNav");
});



/////
function openLogin() {
    const loginPop = document.getElementById("loginBox");
    loginPop.style.display = "flex";
}

function closeLogin() {
    const loginPop = document.getElementById("loginBox");
    loginPop.style.display = "none";
}

/////////////
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


///animate effect
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





