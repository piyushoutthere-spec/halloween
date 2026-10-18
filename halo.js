const intro = document.getElementById("intro")
const video = document.getElementById("introvid")

// ghost elements
const ghostscene = document.getElementById("ghostscene");
const ghosttext = document.getElementById("ghosttext");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2")

function finishintro() {
    intro.style.display= "none";

    // show ghost video
    ghostscene.classList.add("active");

    const ghostvideo = document.getElementById("ghost")
    ghostvideo.currentTime = 0

    ghostvideo.play().catch(error => {
        console.log("ghost vid error:",error);
    })
}

// reveal web when vid ends
video.addEventListener("ended",finishintro);

//handle vid loading error
video.addEventListener("error",finishintro);

