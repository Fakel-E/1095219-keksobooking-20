'use strict';
(function () {

  var mapListElement = document.querySelector('.map__pins');
  var mainButton = document.querySelector('.map__pin--main');

  var onMainButtonClick = function () {
    // открываем карту
    window.map.activateMap();

    window.load(function (adverts) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < adverts.length; i++) {
        fragment.appendChild(window.pin.renderPin(adverts[i]));
      }
      mapListElement.appendChild(fragment);
    }, function () {});
    mainButton.removeEventListener('click', onMainButtonClick);
  };

  mainButton.addEventListener('click', onMainButtonClick);

  var form = document.querySelector('.ad-form');
  /*
    var pins = document.querySelectorAll('.map__pin');
    for (var j = 0; j < pins.length; j++) {
      pins.parentNode.removeChild();
    }
    response
  */

  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function () {
      window.map.disabledMap();
      form.reset();
    });
    evt.preventDefault();
  });
})();

