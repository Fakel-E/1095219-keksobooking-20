'use strict';

// Добавляем disabled
window.util.addShutdown([window.const.houseFeature]);
window.util.addShutdown([window.const.formHeader]);
window.util.addShutdown(window.const.mapFilters);
window.util.addShutdown(window.const.formElements);
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
