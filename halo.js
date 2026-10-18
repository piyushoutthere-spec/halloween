const intro = document.getElementById("intro")
const video = document.getElementById("introvid")

// ghost elements
const ghostscene = document.getElementById("ghostscene");
const ghosttext = document.getElementById("ghosttext");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2")

//timmer
let timer;

function finishintro() {
    intro.classList.add("fade-out");

    setTimeout(() => {
        intro.style.display= "none";
    }, 1000);
}

// reveal web when vid ends
video.addEventListener("ended",finishintro);

//handle vid loading error
video.addEventListener("error",finishintro);

// start invisible timer
function starttimer() {
    clearTimeout(timer);

    timer= setTimeout(() =>{
        document.getElementById("timeUpScreen").classList.add("active");
    },45000);
}

// ghost appear n talk
function startghostconversation() {
    ghoststep = 0;
    ghostscene.classList.add("active");
    showghostline();
}