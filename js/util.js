'use strict';
// ! Функции проекта
(function () {
// функиция вызова рандомных значений
  var getRandomInRange = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  // функиция вызова рандомных елементов
  var getRandomElement = function (array) {
    return array[getRandomInRange(0, array.length - 1)];
  };
  // функция рандомной сортировки + изменения массива
  var mixArray = function (massive) {
    for (var i = massive.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = massive[i];
      massive[i] = massive[j];
      massive[j] = temp;
    }
    massive.splice(window.const.INDEX_MIN, getRandomInRange(window.const.INDEX_MIN, massive.length - 1));
    return massive;
  };
  // функция создания элементов
  var makeElement = function (tagName, className) {
    var element = document.createElement(tagName);
    element.classList.add(className);
    return element;
  };

  // Возвращение координат
  var findAdress = function (coordinateElem) {
    return parseInt(coordinateElem.style.left, 10) + ', ' + parseInt(coordinateElem.style.top, 10);
  };

  window.util = {
    getRandomInRange: getRandomInRange,
    getRandomElement: getRandomElement,
    mixArray: mixArray,
    makeElement: makeElement,
    findAdress: findAdress,
  };
})();
