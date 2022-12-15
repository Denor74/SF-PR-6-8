//Получаем данные в константу из селектора с id=trafficLight, id=trafficLight1, id=trafficLight2 соответственно и селектору section
const trafficLightEl0 = document.querySelector('#trafficLight0');
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const sectionLightEl = document.querySelector('section');

sectionLightEl.addEventListener('click', (event) => {
  if (
    trafficLightEl2.style.background === 'red' ||
    trafficLightEl2.style.background === '' &&
      trafficLightEl1.style.background === '' &&
      trafficLightEl0.style.background === ''
  ) {
    makeBlackAll();
    makeGreen();
  } else if (
    trafficLightEl1.style.background === 'yellow' &&
    trafficLightEl0.style.background === '' &&
    trafficLightEl2.style.background === ''
  ) {
    makeBlackAll();
    makeRed();
  } else if (
    trafficLightEl0.style.background === 'green' &&
    trafficLightEl1.style.background === '' &&
    trafficLightEl2.style.background === ''
  ) {
    makeBlackAll();
    makeYellow();
  }
});

// функция назначает для trafficLight2 красный цвет для background
function makeRed() {
  trafficLightEl2.style.background = 'red';
}



// функция назначает для trafficLight1 желтый цвет для background
function makeYellow() {
  trafficLightEl1.style.background = 'yellow';
}



// функция назначает для trafficLight зелёный цвет для background
function makeGreen() {
  trafficLightEl0.style.background = "green";
}



// Делаем все чёрным
function makeBlackAll() {
  trafficLightEl0.style.background = "";
  trafficLightEl1.style.background = "";
  trafficLightEl2.style.background = "";
}
