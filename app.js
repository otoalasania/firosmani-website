mediumZoom('.zoom', {
    margin: 50
})

window.addEventListener("scroll", function (event) {
    let scroll = this.scrollY;
    const heart = document.getElementById("heart");
    const hat = document.getElementById("hat");
    const rightArm = document.getElementById("right-arm");
    if (scroll > 100) {
        heart.style.top = "80%";
        heart.style.transition = "1.5s";
        hat.style.top = "-10%";
        hat.style.transition = "1.5s";
        rightArm.style.top = "50%";
        rightArm.style.transition = "1.5s";
    } else if (scroll < 150) {
        heart.style.top = "";
        hat.style.top = "";
        rightArm.style.top = "";
    }
});

const navBar = document.getElementById("navBar");
const closeBtn = document.getElementById("closeBtn");

navBar.addEventListener('click', () => {
    document.querySelector(".nav-links").classList.toggle("activeNav");
});


const tabBtn = document.querySelectorAll(".type");
const about = document.querySelector(".photoTypes");
const contentT = document.querySelectorAll(".content");

about.addEventListener('click', function (e) {
    //console.log(e.target.dataset.id);
    const id = e.target.dataset.id;
    if (id) {
        tabBtn.forEach(function (btn) {
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        contentT.forEach(function (cont) {
            cont.classList.remove("active")
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});


