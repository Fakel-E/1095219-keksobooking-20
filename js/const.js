'use strict';
// ! Константы и переменные проекта
(function () {
  var NUMBER_OBJ = 8;
  var Price = {
    MIN: 0,
    MAX: 1000000
  };
  var Position = {
    X_MIN: 100,
    X_MAX: 1100,
    Y_MIN: 130,
    Y_MAX: 630
  };
  var Room = {
    MIN: 1,
    MAX: 3
  };
  var Guest = {
    MIN: 1,
    MAX: 3
  };
  var INDEX_MIN = 0;
  var TITLE_ARR = ['Заголовок1', 'Заголовок2', 'Заголовок3'];
  var TYPE_ARR = ['palace', 'flat', 'house', 'bungalo'];
  var CHECKIN_ARR = ['12:00', '13:00', '14:00'];
  var CHECKOUT_ARR = ['12:00', '13:00', '14:00'];
  var FEATURES_ARR = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var DESCCRIPTION_ARR = ['описание1', 'описание2', 'описание3'];
  var PHOTOS_ARR = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];
  var NOT_VALID_REPORT = 'Количество гостей больше, чем количество комнат';

  var fragmentPin = document.createDocumentFragment();

  window.const = {
    NUMBER_OBJ: NUMBER_OBJ,
    Price: Price,
    Position: Position,
    Room: Room,
    Guest: Guest,
    INDEX_MIN: INDEX_MIN,
    TITLE_ARR: TITLE_ARR,
    TYPE_ARR: TYPE_ARR,
    CHECKIN_ARR: CHECKIN_ARR,
    CHECKOUT_ARR: CHECKOUT_ARR,
    FEATURES_ARR: FEATURES_ARR,
    DESCCRIPTION_ARR: DESCCRIPTION_ARR,
    PHOTOS_ARR: PHOTOS_ARR,
    NOT_VALID_REPORT: NOT_VALID_REPORT,
    fragmentPin: fragmentPin
  };
})();

