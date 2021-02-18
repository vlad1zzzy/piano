const kbd = document.querySelectorAll("kbd");
const letters = ["A", "W", "S", "E", "D", "F", "T", "G", "Y", "H", "U", "J"]

Array.from(kbd).forEach(function (el) {
    el.addEventListener("click", function (event) {
        const pianoKey = event.target;
        const letter = pianoKey.innerText;
        makeSound(pianoKey, letter);
    })
})

document.addEventListener("keydown", function (event) {
    const letter = event.key.toUpperCase();
    const pianoKey = document.getElementById(letter);
    if (letters.includes(letter)) {
        makeSound(pianoKey, letter)
    } else {
        console.log(`WARNING : letter ${letter.toLowerCase()} is not supported!`)
    }
})

function makeSound(pianoKey, letter) {
    pianoKey.classList.add("key-active");
    new Audio(`assets/audio/${letter}.mp3`).play();
    setTimeout(() => {
        pianoKey.classList.remove("key-active");
    }, 1000);
}