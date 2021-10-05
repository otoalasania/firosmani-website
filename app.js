mediumZoom('.zoom', {
    margin: 50
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


