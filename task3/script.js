const trafficLightGr = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightGr.style.background = ('green');
    trafficLightGr.removeEventListener('click', makeGreen);
    trafficLightGr.addEventListener('click', makeGreen);
}

trafficLightGr.addEventListener('click', makeGreen);

const trafficLightEl = document.querySelector('#trafficLight');

function makeYellow() {
    trafficLightEl.style.background = ('yellow');
    trafficLightEl.removeEventListener('click', makeYellow);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeYellow);

const trafficLightRd = document.querySelector('#trafficLight');

function makeRed() {
    trafficLightRd.style.background = ('red');
    trafficLightRd.removeEventListener('click', makeRed);
    trafficLightRd.addEventListener('click', makeRed);
}

trafficLightRd.addEventListener('click', makeRed);