const button = document.getElementById("show")
// console.log(textp);
button.addEventListener('click',updateText)

function updateText() {

for (let index = 0; index < 6; index++) {
    var classnameofDiv = "demotext"+(index+1)
    let textp = document.getElementById(classnameofDiv)
    console.log(textp);
    // textp.classList.add("div-show")
    // textp.classList.remove("div-hide")
    textp.classList.replace("div-hide","div-show",)
    textp.innerHTML = "wesrdfgbhnjkfgvhbjnkmecdfghjdfgh"
    console.log(textp.attributes)

    // classnameofDiv = ""
}

}
