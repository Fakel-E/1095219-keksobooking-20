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

  var deleteMarks = function (className) {
    var pins = document.querySelectorAll(className);
    pins.forEach(function (pin) {
      if (!pin.classList.contains('map__pin--main')) {
        pin.remove();
      }
    });
  };

  var renderMarks = function (adverts) {
    var fragment = document.createDocumentFragment();
    var mapListElement = document.querySelector('.map__pins');
    var advertsLengths = 5;

    // ! тернарный оператор
    /* function getAdvertsLength(numberAdverts) {
      console.log(numberAdverts);
      return numberAdverts >= advertsLengths ? advertsLengths : numberAdverts;
    }
    getAdvertsLength(adverts.length);
    console.log(adverts.length);
    for (var i = 0; i < adverts.length; i++) {
      fragment.appendChild(window.pin.renderMark(adverts[i]));
    }*/

    if (adverts.length <= advertsLengths) {
      for (var i = 0; i < adverts.length; i++) {
        fragment.appendChild(window.pin.renderMark(adverts[i]));
      }
    } else {
      for (var j = 0; j < advertsLengths; j++) {
        fragment.appendChild(window.pin.renderMark(adverts[j]));
      }
    }
    mapListElement.appendChild(fragment);
  };

  window.pin = {
    renderMark: renderMark,
    renderMarks: renderMarks,
    deleteMarks: deleteMarks
  };
})();
