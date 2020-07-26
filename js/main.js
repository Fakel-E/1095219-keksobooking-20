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

  var form = document.querySelector('.ad-form');

  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function () {
      window.map.disabledMap();
      form.reset();
      window.pin.deletePin('.map__pin');
    });
    evt.preventDefault();
  });
  mainButton.addEventListener('click', onMainButtonClick);
})();

