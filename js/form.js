'use strict';
(function () {

  var NOT_VALID_REPORT = 'Количество гостей больше, чем количество комнат';
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
    selectRoom.setCustomValidity(NOT_VALID_REPORT);
  }
  // Слушаем изменнения в комнатах
  selectRoom.addEventListener('change', function () {
    var roomsCount = Number(selectRoom.value);
    var guestCount = Number(selectGuest.value);
    if (roomsCount === 2 && roomsCount < guestCount) {
      selectRoom.setCustomValidity(NOT_VALID_REPORT);
    } else if (roomsCount === 100) {
      selectGuest.value = 0;
    } else {
      selectGuest.setCustomValidity('');
    }
    if (guestCount > roomsCount) {
      selectRoom.setCustomValidity(NOT_VALID_REPORT);
    } else {
      selectRoom.setCustomValidity('');
    }
  });
  // Слушаем изменнения в гостях
  selectGuest.addEventListener('change', function () {
    var roomsCount = Number(selectRoom.value);
    var guestCount = Number(selectGuest.value);
    if (guestCount > roomsCount) {
      selectGuest.setCustomValidity(NOT_VALID_REPORT);
    } else if (roomsCount === 100 && guestCount !== 0) {
      selectGuest.setCustomValidity('Выбранное количество комнат не для гостей');
    } else {
      selectGuest.setCustomValidity('');
    }
  });

  // Найдём инпуты для типа жилья и цены
  var typeHouse = document.querySelector('#type');
  var formPrice = document.querySelector('#price');
  var priceCount = Number(formPrice.value);
  var Price = {
    BUNGALO: 0,
    FLAT: 1000,
    HOUSE: 5000,
    PALACE: 10000
  };
  var validPriceHouse = function (priceValue, houseValue) {
    if (houseValue === 'flat' && priceValue < Price.FLAT) {
      priceValue.setCustomValidity('Минимальная цена для квартиры составляет 1000');
    } else if (houseValue === 'house' && priceValue < Price.HOUSE) {
      priceValue.setCustomValidity('Минимальная цена для дома составляет 5000');
    } else if (houseValue === 'palace' && priceValue < Price.PALACE) {
      priceValue.setCustomValidity('Минимальная цена для дворца составляет 10000');
    } else {
      priceValue.setCustomValidity('');
    }
  };

  typeHouse.addEventListener('change', function () {
    if (typeHouse.value === 'bungalo') {
      formPrice.placeholder = Price.BUNGALO;
    } else if (typeHouse.value === 'flat') {
      formPrice.placeholder = Price.FLAT;
    } else if (typeHouse.value === 'house') {
      formPrice.placeholder = Price.HOUSE;
    } else if (typeHouse.value === 'palace') {
      formPrice.placeholder = Price.PALACE;
    }

    validPriceHouse(priceCount, typeHouse.value);
  });

  formPrice.addEventListener('change', function () {
    validPriceHouse(priceCount, typeHouse.value);
  });

  // Найдём инпуты для времени заезда\выезда
  var timeIn = document.querySelector('#timein');
  var timeOut = document.querySelector('#timeout');

  timeIn.addEventListener('change', function () {
    timeOut.value = timeIn.value;
  });

  timeOut.addEventListener('change', function () {
    timeIn.value = timeOut.value;
  });

  window.form = {
    addShutdown: addShutdown
  };
})();
