
var rightArrow = window.document.getElementById("rightarrow")
var Leonardo = window.document.getElementById("leonardo")
var Samanta = window.document.getElementById("samanta")
var Bruna = window.document.getElementById("bruna")
var leftArrow = window.document.getElementById("leftarrow")

function ScrollRight(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    rightArrow.style="display:none"
    leftArrow.style="display:flex; margin-top: 100%"
}

function ScrollLeft(){
    Leonardo.style = "display:flex"
    Bruna.style = "display:none"
    rightArrow.style="display:flex; margin-top: 55%" 
    leftArrow.style="display:none"
}