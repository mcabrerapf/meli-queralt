
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
function accordionDisplay2(){
    var accordion = document.getElementById("accordion2");
    if (accordion.className === ""){
        accordion.className += " active"
    }else{
        accordion.className = ""
    }
    var panel = document.getElementById("panel2")
    if(panel.className === ""){
        panel.className += " active"
    }else{
        panel.className = ""
    }

}
function accordionDisplay3(){
    var accordion = document.getElementById("accordion3");
    if (accordion.className === ""){
        accordion.className += " active"
    }else{
        accordion.className = ""
    }
    var panel = document.getElementById("panel3")
    if(panel.className === ""){
        panel.className += " active"
    }else{
        panel.className = ""
    }

}
function accordionDisplay4(){
    var accordion = document.getElementById("accordion4");
    if (accordion.className === ""){
        accordion.className += " active"
    }else{
        accordion.className = ""
    }
    var panel = document.getElementById("panel4")
    if(panel.className === ""){
        panel.className += " active"
    }else{
        panel.className = ""
    }

}
