const turnOn = document.getElementById ('ligada');
const turnOff = document.getElementById ('desligada');
const lamp = document.getElementById ('lamp');

function lampOn () {
    lamp.src='./img/ligada.jpeg';
}
function lampOff () {
    lamp.src='./img/desligada.jpeg';
}



turnOn.addEventListener ( 'click', lampOn);
turnOff.addEventListener ( 'click', lampOff);