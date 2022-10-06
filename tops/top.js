var item1 = document.querySelector('.geral')
var item2 = document.querySelector('.agenda')

function geral(){
    item1.style.display = "flex"
    item2.style.display = "none"
}

function agenda(){
    item1.style.display = "none"
    item2.style.display = "flex"
}