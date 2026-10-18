const intro = document.getElementById("intro")
const video = document.getElementById("introvid")

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