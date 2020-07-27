'use strict';

(function () {

  // создаем переменные с шаблоном, которые копировать
  var pinTemplate = document.querySelector('#pin') // метка
      .content
      .querySelector('.map__pin');

  var filterCont = document.querySelector('.map__filters-container');
  var mapList = document.querySelector('.map');

  // функция отрисовки меток
  var renderMark = function (pin) {
    var pinElement = pinTemplate.cloneNode(true);

    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = 'Какой-то автор';
    pinElement.style.left = pin.location.x + 'px';
    pinElement.style.top = pin.location.y + 'px';

    pinElement.addEventListener('click', function () {
      mapList.insertBefore(window.advert.renderCard(pin), filterCont);
    });
    return pinElement;
  };

  var deleteMark = function (className) {
    var pins = document.querySelectorAll(className);
    pins.forEach(function (pin) {
      if (!pin.classList.contains('map__pin--main')) {
        pin.remove();
      }
    });
  };

  window.pin = {
    renderMark: renderMark,
    deleteMark: deleteMark
  };
})();
