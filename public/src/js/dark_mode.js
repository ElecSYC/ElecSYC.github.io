window.onload = function() {
    let div = document.getElementById("inicio");
    div.style.backgroundImage = 'linear-gradient(to bottom, rgba(0,0,0, .7), rgba(0,0,0, .7) 100%), url(' + images[0] + ')';
}
let images = ['/public/src/img/background.jpg', '/public/src/img/background_darkmode.jpg'];
let currentIndex = 0;

function changeBackground() {
    let div = document.getElementById('inicio');
    currentIndex = (currentIndex + 1) % images.length;
    div.style.backgroundImage = 'linear-gradient(to bottom, rgba(0,0,0, .7), rgba(0,0,0, .7) 100%), url(' + images[currentIndex] + ')';
}