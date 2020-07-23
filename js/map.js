'use strict';

(function () {

  var formMain = document.querySelector('.ad-form');

  // создаем переменную с элементом, куда копировать
  var mapList = document.querySelector('.map');


  // Повтороно находим элементы, чтобы снять disabled
  var houseFeature = document.querySelector('#housing-features');
  var formHeader = document.querySelector('.ad-form-header');
  var mapFilters = document.querySelectorAll('.map__filter');
  var formElements = document.querySelectorAll('.ad-form__element');

  // Удаляем disabled со всех элементов формы
  var cancelShutdown = function (mas) {
    for (var w = 0; w < mas.length; w++) {
      mas[w].removeAttribute('disabled');
    }
  };

  // Функция активации карты
  var activateMap = function () {
    cancelShutdown([houseFeature, formHeader]);
    cancelShutdown(mapFilters);
    cancelShutdown(formElements);
    mapList.classList.remove('map--faded');
    formMain.classList.remove('ad-form--disabled');
  };

  window.map = {
    activateMap: activateMap
  };
})();
