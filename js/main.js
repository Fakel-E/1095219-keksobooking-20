'use strict';
(function () {


  var mainButton = document.querySelector('.map__pin--main');
  var mapFilters = document.querySelector('.map__filters');
  var house = mapFilters.querySelector('#housing-type');
  var arrayAdverts = [];

  var onMainButtonClick = function () {
    // открываем карту
    window.map.activate();

    window.load(function (adverts) {
      window.pin.renderMarks(adverts);
      arrayAdverts = adverts;
    }, function () {});
    mainButton.removeEventListener('click', onMainButtonClick);
  };

  house.addEventListener('change', function () {
    var newAdverts = window.filter.houseType(arrayAdverts);
    var mapCard = document.querySelector('.map__card');
    window.pin.deleteMarks('.map__pin');
    if (house.value !== 'any') {
      window.pin.renderMarks(newAdverts);
    } else {
      window.pin.renderMarks(arrayAdverts);
    }
    if (mapCard) {
      mapCard.remove();
    }
  });


  var form = document.querySelector('.ad-form');
  form.addEventListener('submit', function (evt) {
    window.upload(new FormData(form), function () {
      window.map.disabled();
      form.reset();
      window.pin.deleteMarks('.map__pin');
      mainButton.addEventListener('click', onMainButtonClick);
    });
    evt.preventDefault();
  });
  mainButton.addEventListener('click', onMainButtonClick);

  window.main = {
    onMainButtonClick: onMainButtonClick
  };
})();

