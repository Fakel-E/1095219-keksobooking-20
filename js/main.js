'use strict';
(function () {

  var mapListElement = document.querySelector('.map__pins');
  var mainButton = document.querySelector('.map__pin--main');

  var onMainButton = function () {
    // открываем карту
    window.map.activateMap();

    window.load(function (adverts) {
      var fragment = document.createDocumentFragment();

      for (var i = 0; i < adverts.length; i++) {
        fragment.appendChild(window.pin.renderPin(adverts[i]));
      }
      mapListElement.appendChild(fragment);
    }, function () {});
    mainButton.removeEventListener('click', onMainButton);
  };

  mainButton.addEventListener('click', onMainButton);

})();
/* var form = userDialog.querySelector('.setup-wizard-form');
form.addEventListener('submit', function (evt) {
  window.upload(new FormData(form), function (response) {
    userDialog.classList.add('hidden');
  });
  evt.preventDefault();
});*/
