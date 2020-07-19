'use strict';

// Находим элементы формы
var mapFilters = document.querySelectorAll('.map__filter');
var formHeader = document.querySelector('.ad-form-header');
var formElements = document.querySelectorAll('.ad-form__element');
var houseFeature = document.querySelector('#housing-features');

// Добавляем disabled на все элементы формы
var addShutdown = function (arr) {
  for (var w = 0; w < arr.length; w++) {
    arr[w].setAttribute('disabled', 'disabled');
  }
};

// Добавляем disabled
addShutdown([houseFeature, formHeader]);
addShutdown(mapFilters);
addShutdown(formElements);
// ! завершили добавление disabled

// Найдём инпуты для гостей и комнат
var selectRoom = document.querySelector('#room_number');
var selectGuest = document.querySelector('#capacity');
// Проверяем сразу при загрузке страницы
if (selectRoom.value < selectGuest.value) {
  selectRoom.setCustomValidity(window.const.NOT_VALID_REPORT);
}
// Слушаем изменнения в комнатах
selectRoom.addEventListener('change', function () {
  var roomsCount = Number(selectRoom.value);
  var guestCount = Number(selectGuest.value);
  if (roomsCount === 1) {
    selectGuest.value = selectRoom.value;
  } else if (roomsCount === 2 && roomsCount < guestCount) {
    selectRoom.setCustomValidity(window.const.NOT_VALID_REPORT);
  } else if (roomsCount === 100) {
    selectGuest.value = 0;
  } else {
    selectGuest.setCustomValidity('');
  }
  if (guestCount > roomsCount) {
    selectRoom.setCustomValidity(window.const.NOT_VALID_REPORT);
  } else {
    selectRoom.setCustomValidity('');
  }
});
// Слушаем изменнения в гостях
selectGuest.addEventListener('change', function () {
  var roomsCount = Number(selectRoom.value);
  var guestCount = Number(selectGuest.value);
  if (guestCount > roomsCount) {
    selectGuest.setCustomValidity(window.const.NOT_VALID_REPORT);
  } else if (roomsCount === 100 && guestCount !== 0) {
    selectGuest.setCustomValidity('Выбранное количество комнат не для гостей');
  } else {
    selectGuest.setCustomValidity('');
  }
});
