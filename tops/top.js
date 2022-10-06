var item1 = document.querySelector('.geral')
var item2 = document.querySelector('.agenda')
var item3 = document.querySelector('.perfil')

function geral(){
    item1.style.display = "flex"
    item3.style.display = "none"
    item2.style.display = "none"
}

function agenda(){
    item1.style.display = "none"
    item3.style.display = "none"
    item2.style.display = "flex"
}

function perfil(){
    item1.style.display = "none"
    item2.style.display = "none"
    item3.style.display = "flex"
}
