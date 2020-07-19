'use strict';

var mainButton = document.querySelector('.map__pin--main');
var formAddress = document.querySelector('#address');
var formMain = document.querySelector('.ad-form');
var mapListElement = document.querySelector('.map__pins');
var mapList = document.querySelector('.map');
var filterCont = document.querySelector('.map__filters-container');

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

var activateMap = function (house, head, filterMap, elements) {
  cancelShutdown([house, head]);
  cancelShutdown(filterMap);
  cancelShutdown(elements);
};
var fragmentPin = document.createDocumentFragment();
formAddress.value = window.util.findAdress(mainButton);
// Активируем карту
mainButton.addEventListener('mousedown', function (evt) {
  // открываем карту по клику
  if (evt.which === 1) {
    activateMap(
        houseFeature,
        formHeader,
        mapFilters,
        formElements
    );

    mapList.classList.remove('map--faded');
    formMain.classList.remove('ad-form--disabled');
    mapListElement.appendChild(fragmentPin);

    mapList.insertBefore(window.advert.renderAdvert(window.advert.adverts[0]), filterCont);
  }
});

mainButton.addEventListener('keydown', function (evt) {
  // открытие по Enter
  if (evt.key === 'Enter') {
    activateMap(
        houseFeature,
        formHeader,
        mapFilters,
        formElements
    );

    mapList.classList.remove('map--faded');
    formMain.classList.remove('ad-form--disabled');
    mapListElement.appendChild(fragmentPin);

    mapList.insertBefore(window.advert.renderAdvert(window.advert.adverts[0]), filterCont);
  }
});
