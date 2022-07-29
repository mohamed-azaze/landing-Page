// Select Elements
const sections = document.querySelectorAll("section");
const header = document.querySelector("header");

// function create Nav-Bar
function createNav(arr) {
    const navBar = document.createElement("nav");
    const navBarContainer = document.createElement("dav");
    navBarContainer.classList.add("container");
    const ulEle = document.createElement("ul");
    ulEle.classList.add("nav-bar");
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.setAttribute("href", `#${arr[i].getAttribute("id")}`);
        a.appendChild(document.createTextNode(arr[i].dataset.section));
        li.appendChild(a);
        ulEle.appendChild(li);
        navBarContainer.appendChild(ulEle);
        navBar.appendChild(navBarContainer);
    }
    header.appendChild(navBar)
    // console.log(navBar.childNodes)
};
createNav(sections)
// function add active class
const navBarLinks = document.querySelectorAll("nav ul li a");
navBarLinks.forEach(ele => {
    ele.addEventListener("click", () => {
        navBarLinks.forEach(ele => {
            ele.classList.remove("active");
        })
        ele.classList.add("active");
    })
});

// function scroll to section
function sectionScrollTo() {
    const windowScrollY = window.pageYOffset;
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");
        if (windowScrollY > sectionTop && windowScrollY <= sectionHeight + sectionTop) {
            navBarLinks.forEach(ele => {
                if (ele.getAttribute("href").slice(1) === sectionId) {
                    ele.classList.add("active");
                }
            })
        } else {
            navBarLinks.forEach(ele => {
                if (ele.getAttribute("href").slice(1) === sectionId) {
                    ele.classList.remove("active");
                }
            })
        }
    })
};
window.addEventListener("scroll", sectionScrollTo);



// function Scroll Button
const scrollBtn = document.querySelector(".scroll-btn i");
function scrollTop() {
    const windowScrollY = window.pageYOffset;
    if (windowScrollY > 600) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", scrollTop);

