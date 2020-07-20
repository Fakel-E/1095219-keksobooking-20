'use strict';

var mapListElement = document.querySelector('.map__pins');
var mainButton = document.querySelector('.map__pin--main');
var filterCont = document.querySelector('.map__filters-container');
var mapList = document.querySelector('.map');
// создаем фрагмент дома, который будет добавлять


mainButton.addEventListener('click', function () {
  // открываем карту по клику
  window.map.activateMap();

  window.load(function (adverts) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < adverts.length; i++) {
      fragment.appendChild(window.pin.renderPin(adverts[i]));
    }
    mapListElement.appendChild(fragment);
    mapList.insertBefore(window.advert.renderAdvert(adverts[0]), filterCont);
  }, function () { });
});

/* var form = userDialog.querySelector('.setup-wizard-form');
form.addEventListener('submit', function (evt) {
  window.upload(new FormData(form), function (response) {
    userDialog.classList.add('hidden');
  });
  evt.preventDefault();
});*/
