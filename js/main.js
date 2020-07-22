'use strict';

var mapListElement = document.querySelector('.map__pins');
var mainButton = document.querySelector('.map__pin--main');
var mapList = document.querySelector('.map');

if (mapList.classList.contains('map--faded')) {
  mainButton.addEventListener('click', function () {
    // открываем карту по клику
    window.map.activateMap();

    window.load(function (adverts) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < adverts.length; i++) {
        fragment.appendChild(window.pin.renderPin(adverts[i]));
      }
      mapListElement.appendChild(fragment);
    }, function () { });
  });
}

/* var form = userDialog.querySelector('.setup-wizard-form');
form.addEventListener('submit', function (evt) {
  window.upload(new FormData(form), function (response) {
    userDialog.classList.add('hidden');
  });
  evt.preventDefault();
});*/
