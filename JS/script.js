/* jshint esversion: 6 */
/* jshint browser: true */
/*global $:false, jQuery:false */
/*jshint node:true*/
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
var prevScrollpos = window.pageYOffset;
const header = document.querySelector("header");

const main = document.querySelector("main");
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var $win = $(window);
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        header.classList.add("nav-scrolled");
        $("h4").removeClass("nav-text");
        $("path").addClass("fill");
        $("a").addClass("scrolled");

    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
};


$(function () {
    var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() == 0) {
            header.classList.remove("nav-scrolled");
            $("h4").addClass("nav-text");
            $("path").removeClass("fill");
            $("a").removeClass("scrolled");
        } 

    });
});
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


