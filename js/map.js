'use strict';

var mainButton = document.querySelector('.map__pin--main');
var formAddress = document.querySelector('#address');

formAddress.value = window.util.findAdress(mainButton);
// Активируем карту
mainButton.addEventListener('mousedown', function (evt) {
  // открываем карту по клику
  if (evt.which === 1) {
    window.util.activateMap();
  }
});

mainButton.addEventListener('keydown', function (evt) {
  // открытие по Enter
  if (evt.key === 'Enter') {
    window.util.activateMap();
  }
});
