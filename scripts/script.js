const header = document.getElementById("main-header");
const toggleMenu = document.getElementById("toggle-menu");
const navMenu = document.querySelector(".nav-menu");

function disableScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft =
        window.pageXOffset || document.documentElement.scrollLeft;
    window.onscroll = function(e) {
        window.scrollTo({
            left: scrollLeft,
            top: scrollTop,
            behavior: "smooth",
        });
        e.preventDefault();
    };
}

function enableScroll() {
    let prevScrollY = window.pageYOffset;
    header.classList.add("hide-bg");
    window.onscroll = function() {
        if (navMenu.classList.contains("shown")) return;
        const scrollY = window.pageYOffset;
        if (scrollY < 70) {
            header.classList.add("hide-bg");
            return;
        } else header.classList.remove("hide-bg");
        const scrollingDown = scrollY > prevScrollY;
        const scrollingUp = scrollY < prevScrollY;
        if (scrollingDown) {
            if (scrollY > window.innerHeight - 64)
                header.classList.add("hidden");
        } else if (scrollingUp) {
            header.classList.remove("hidden");
        }
        prevScrollY = scrollY;
    };
}
enableScroll();

const links = document.querySelectorAll(".nav-menu .nav-item a");

function toggleActive() {
    links.forEach(link => {
        link.addEventListener("click", ev => {
            links.forEach(item => item.classList.remove("active"));
            ev.target.classList.add("active");
        });
    });
}
toggleActive();
toggleMenu.onclick = function() {
    window.document.body.classList.toggle("overflow-hidden");
    window.document.body.classList.toggle("show-overlay");
    const shown = navMenu.classList.toggle("shown");
};
navMenu.childNodes.forEach(child => {
    child.addEventListener("click", function() {
        if (navMenu.classList.contains("shown")) {
            if (window.matchMedia("(max-width: 768px)")) {
                window.document.body.classList.remove("overflow-hidden");
                window.document.body.classList.remove("show-overlay");
                navMenu.classList.remove("shown");
                header.classList.add("hidden");
            }
        }
    });
});

const skillsSection = document.getElementById("skills");
const aboutSection = document.getElementById("about");
const btnExplore = document.getElementById("explore");
btnExplore.onclick = function() {
    aboutSection.scrollIntoView({
        behavior: "smooth",
    });
};

const btnScrollToTop = document.getElementById("btn-scroll-to-top");
btnScrollToTop.onclick = function() {
    window.scroll({
        behavior: "smooth",
        top: 0,
        left: 0,
    });
};

const intersectOptions = {
    threshold: 0.1,
};
var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let section = entry.target;
            links.forEach(link => {
                const linkId = link.getAttribute("href").replace("#", "");
                const sectionId = section.id;
                const isHome = linkId === "" && sectionId === "home";
                if (linkId === sectionId || isHome)
                    link.classList.add("active");
                else link.classList.remove("active");
            });
        }
    });
}, intersectOptions);
const sections = document.querySelectorAll("section.section");
sections.forEach(section => observer.observe(section));

const projects = document.querySelectorAll(".project");
const projectObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
});
projects.forEach(project => projectObserver.observe(project));