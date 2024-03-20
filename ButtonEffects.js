const startbutton = document.getElementById("start");
function startButtonHovered(){
    startbutton.style.backgroundColor = "green";
};
function startButtonLeft(){
    startbutton.style.backgroundColor = "lightblue";
};
startbutton.addEventListener('mouseenter', startButtonHovered);
startbutton.addEventListener('mouseleave', startButtonLeft);