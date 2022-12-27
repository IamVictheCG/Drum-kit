
function PlaySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.play();
    audio.currentTime = 0
    // audio.currentTime = 0
    key.classList.add("playing")
    // console.log(e.key);
    // console.log(e.keyCode);
}

    // console.log(key);
    
function removeTransition(e) {
    if (e.propertyName !== "transform") return // skips if it isn't a transfom
    // console.log(e.propertyName)
    // console.log(this)
    this.classList.remove("playing")
    // console.log(e)
}

document.addEventListener("keydown", PlaySound)

const keys = document.querySelectorAll(".key")
keys.forEach(key => key.addEventListener("transitionend", removeTransition))