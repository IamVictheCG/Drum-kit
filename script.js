function PlaySound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.play();
    audio.currentTime = 0
    // audio.currentTime = 0
    key.classList.add("playing")
    console.log(e);
    console.log(e.keyCode);
}

    
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


function PlaySound1(e) {
    let code;
    //Mobile .kbd
    if (e.keyCode) {
        code = keyCode
    } else{
        code = this.dataset.key
    }

    const audio = document.querySelector(`audio[data-key="${code}"]`)
    const key = document.querySelector(`.key[data-key="${code}"]`)
    if (!audio) {
       return
    }
    audio.play()
    audio.currentTime = 0
    key.classList.add("playing")
    console.log(e)
    console.log(code)
}


const clickKeys = document.querySelectorAll(".key")
// clickKeys.forEach(key => {
//     key.addEventListener("transitionend", removeTransition)
//     key.addEventListener("click", PlaySound1)
// })

for (let i = 0, key; key = clickKeys[i]; i++) {
    key.addEventListener("transitionend", removeTransition)
    key.addEventListener("click", PlaySound1)
    
}


