'use strict';

(function () {

  var form = document.querySelector('.ad-form');

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
  var activate = function () {
    cancelShutdown([houseFeature, formHeader]);
    cancelShutdown(mapFilters);
    cancelShutdown(formElements);
    mapList.classList.remove('map--faded');
    form.classList.remove('ad-form--disabled');
  };

  var disabled = function () {
    window.form.addShutdown([houseFeature, formHeader]);
    window.form.addShutdown(mapFilters);
    window.form.addShutdown(formElements);
    mapList.classList.add('map--faded');
    form.classList.add('ad-form--disabled');
  };

  window.map = {
    activate: activate,
    disabled: disabled
  };
})();
