/* jshint esversion: 6 */
/* jshint browser: true */
/*global $:false, jQuery:false */
/*jshint node:true*/

//Cursor Effect
let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".scale");
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

$(".no-cursor").hover(function () {
    $(".cursor").css("display", "none");
}, function () {
    $(".cursor").css("display", "inherit");
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
        document.getElementById("navbar").style.top = "-70px";
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

//For Sfari
var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 &&
    navigator.userAgent &&
    navigator.userAgent.indexOf('CriOS') == -1 &&
    navigator.userAgent.indexOf('FxiOS') == -1;
if (isSafari){
    var $win = $(window);

    $win.scroll(function () {
        if ($win.scrollTop() == 0) {
            header.classList.remove("nav-scrolled");
            $("h4").addClass("nav-text");
            $("path").removeClass("fill");
            $("a").removeClass("scrolled");
        }

    });
}
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

        //------------------------

        // Arrow jump

        $(".j").hover(function () {
            $(".j1").css("padding-bottom", "8px")
                .css("transition", "0.2s");
        }, function () {
            $(".j1").css("padding-bottom", "0")
                .css("transition", "0");
        });
        //--------
        $(".j2").hover(function () {
            $(".j3").css("padding-bottom", "8px")
                .css("transition", "0.2s");
        }, function () {
            $(".j3").css("padding-bottom", "0")
                .css("transition", "0");
        });
        //----------
        $(".j4").hover(function () {
            $(".j5").css("padding-bottom", "8px")
                .css("transition", "0.2s");
        }, function () {
            $(".j5").css("padding-bottom", "0")
                .css("transition", "0");
        });
        //-----------
        $(".make-order-text h1").hover(function () {
            $(".make-order-arrow").css("bottom", "0px")
                .css("transition", "0.2s");
        }, function () {
            $(".make-order-arrow").css("bottom", "-10px")
                .css("transition", "0");
        });

        //Make order window
        $(".zakz").click(function () {
            $("#make-order").css("display", "inherit");
        }); $(".close").click(function () {
            $("#make-order").css("display", "none");
        });

        //Arrow move
        $(".back").hover(function () {
            $(".back-to").css("position", "relative");
            $(".back-to").css("left", "-5px");
        }, function () {
            $(".back-to").css("position", "relative");
            $(".back-to").css("left", "0");
        });

        //Footer icons on hover


        $(".media-icon").on('mouseover', function (e) {
            var hoveredIcon = $(e.target).attr('alt');
            if (hoveredIcon == "behance") {
                $(this).attr("src", "icons/Be%20(Yellow).svg");
            } else if (hoveredIcon == "facebook") {
                $(this).attr("src", "icons/Fb%20(Yellow).svg");
            } else if (hoveredIcon == "instagram") {
                $(this).attr("src", "icons/In%20(Yellow).svg");
            } else if (hoveredIcon == "pinterest") {
                $(this).attr("src", "icons/P%20(Yellow).svg");
            }
        });

        $(".media-icon").on('mouseout', function (e) {
            var hoveredIcon = $(e.target).attr('alt');
            if (hoveredIcon == "behance") {
                $(this).attr("src", "icons/Be.svg");
            } else if (hoveredIcon == "facebook") {
                $(this).attr("src", "icons/Fb.svg");
            } else if (hoveredIcon == "instagram") {
                $(this).attr("src", "icons/In.svg");
            } else if (hoveredIcon == "pinterest") {
                $(this).attr("src", "icons/P.svg");
            }
        });

        //Parallax Effect
        var rellax = new Rellax('.part1');
        var rellax = new Rellax('.part2');
        var rellax = new Rellax('.p-effect');


        //Main page
