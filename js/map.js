'use strict';

var mainButton = document.querySelector('.map__pin--main');
var formAddress = document.querySelector('#address');
var formMain = document.querySelector('.ad-form');
var mapListElement = document.querySelector('.map__pins');
var mapList = document.querySelector('.map');

// Повтороно находим элементы, чтобы снять disabled
var houseFeature = document.querySelector('#housing-features');
var formHeader = document.querySelector('.ad-form-header');
var mapFilters = document.querySelectorAll('.map__filter');
var formElements = document.querySelectorAll('.ad-form__element');


formAddress.value = window.util.findAdress(mainButton);
// Активируем карту
mainButton.addEventListener('mousedown', function (evt) {
  // открываем карту по клику
  if (evt.which === 1) {
    window.util.activateMap(
        houseFeature,
        formHeader,
        mapFilters,
        formElements,
        mapList,
        formMain,
        mapListElement
    );
  }
});

mainButton.addEventListener('keydown', function (evt) {
  // открытие по Enter
  if (evt.key === 'Enter') {
    window.util.activateMap(
        houseFeature,
        formHeader,
        mapFilters,
        formElements,
        mapList,
        formMain,
        mapListElement
    );
  }
});
