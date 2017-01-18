console.log("runnnnningggS")
function navBarResponsive() {
    var navBar = document.getElementById("myTopnav");
    if (navBar.className === "topnav") {
        navBar.className += " responsive";
    } else {
        navBar.className = "topnav";
    }
}



function accordionDisplay(){
    var accordion = document.getElementById("accordion");
    if (accordion.className === ""){
        accordion.className += " active"
    }else{
        accordion.className = ""
    }
    var panel = document.getElementById("panel")
    if(panel.className === ""){
        panel.className += " active"
    }else{
        panel.className = ""
    }

}
function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var mainSlide = document.getElementById("main-slide")
    mainSlide.style.display = "none"

    var selectedSlide = document.getElementsByClassName("mySlides");
    if (n > selectedSlide.length) {
        slideIndex = 1
    }else if (n < 1) {
        slideIndex = selectedSlide.length
    };
    for (i = 0; i < selectedSlide.length; i++) {
        selectedSlide[i].style.display = "none"; 
    }
    selectedSlide[slideIndex-1].style.display = "block"; 
}
var slideIndex = 1;
showDivs(slideIndex);