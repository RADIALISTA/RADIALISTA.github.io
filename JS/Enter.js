function BreakIn() {
    var SoundEffect = new Audio('assets/Sounds/glassware.wav');
    const pupwin = document.getElementById("popup-window");

    pupwin.style.animation="shaking 0.4s infinite";
    SoundEffect.play();
    document.getElementById("construction").disabled = true;
    
    setTimeout(() => {
        SoundEffect = new Audio('assets/Sounds/BulbBreak.wav');
        SoundEffect.play();
        document.getElementById("overlay").style.display = "block";

        setTimeout(() => {
            window.location.href = "HomePage.html";
        }, 1900);
    }, 3350);
}