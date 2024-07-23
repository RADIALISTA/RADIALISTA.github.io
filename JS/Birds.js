// var eyeball = document.getElementById('bird');    IDK why the global isn't working!
var popis = 0;
popis = localStorage.getItem("EyesClicked");

setInterval(birds, 10000);

function birds() {
    const eyeball = document.getElementById("bird");
    let going = Math.floor(Math.random() * 12);
    let top = Math.floor(Math.random() * 75) + 1;
    
    if (going == 1) {
        setTimeout(() => {eyeball.style.animation = 'none'; eyeball.style.display = 'none';}, 8010);
        eyeball.style.display = 'block';
        eyeball.style.animation = 'FlyLeft 8s';
        eyeball.style.top = `${top}%`
        
    } else if (going == 2) {
        setTimeout(() => {eyeball.style.animation = 'none'; eyeball.style.display = 'none';}, 8010);
        eyeball.style.display = 'block';
        eyeball.style.animation = 'FlyRight 8s';
        eyeball.style.top = `${top}%`
    }

    console.log(going);
    console.log(top);
    console.log(popis);
}

function popeye() {
    popis++;
    localStorage.setItem("EyesClicked", popis);
    document.getElementById("birdiv").style.display = 'block';
    document.getElementById("BirdCounter").innerHTML = `You have clicked in ${localStorage.getItem("EyesClicked")} Flying eyes!`;
    document.getElementById("bird").style.display = 'none';
}