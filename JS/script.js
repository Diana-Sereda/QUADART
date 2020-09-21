/* jshint esversion: 6 */
/* jshint browser: true */
/*global $:false, jQuery:false */
//Cursor Effect
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".item");
window.addEventListener('mousemove', cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
});
//------------------------
//Nav on scroll
const header = document.querySelector("header");
const sectionOne = document.querySelector("main");

const sectionOneOptions = {
    rootMargin: "-50px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (entries, sectionOneObserver) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
            $("h4").removeClass("nav-text");
            $("path").addClass("fill");
            $("a").addClass("scrolled");
        } else {
            header.classList.remove("nav-scrolled");
            $("h4").addClass("nav-text");
            $("path").removeClass("fill");
            $("a").removeClass("scrolled");
        }
    });
}, sectionOneOptions);
sectionOneObserver.observe(sectionOne);
//------------------------

//Arrow gray-white

$(".gray").hover(function () {
        $(".wh-on-hover").css("display", "inline");
        $(".dissapear").css("display", "none");
    },
    function () {
        $(".wh-on-hover").css("display", "none");
     $(".dissapear").css("display", "inline");
    });


