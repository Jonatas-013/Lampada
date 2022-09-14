const btnOn = document.querySelector('.btnOn')
const lamp = document.querySelector('.lamp')
const btnOff = document.querySelector('.btnOff')

function lampOn() {
    lamp.src = './img/ligada.jpg'
}

function lampOff() {
    lamp.src = './img/desligada.jpg'
}

function lampBroken() {
    lamp.src = '/img/quebrada.jpg'
}
btnOn.addEventListener('click', lampOn)
btnOff.addEventListener('click', lampOff)
lamp.addEventListener('click', lampBroken)