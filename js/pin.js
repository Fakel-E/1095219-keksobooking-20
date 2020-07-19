'use strict';

// создаем переменные с шаблоном, которые копировать
var pinTemplate = document.querySelector('#pin') // метка
    .content
    .querySelector('.map__pin');

// функция отрисовки меток
var renderPin = function (pin) {
  var pinElement = pinTemplate.cloneNode(true);

  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('img').alt = 'Какой-то автор';
  pinElement.style.left = pin.location.x + 'px';
  pinElement.style.top = pin.location.y + 'px';

  return pinElement;
};

window.pin = {
  renderPin: renderPin
};
