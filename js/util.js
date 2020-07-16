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
  // Добавляем disabled на все элементы формы
  var addShutdown = function (arr) {
    for (var w = 0; w < arr.length; w++) {
      arr[w].setAttribute('disabled', 'disabled');
    }
  };
  // Удаляем disabled со всех элементов формы
  var cancelShutdown = function (mas) {
    for (var w = 0; w < mas.length; w++) {
      mas[w].removeAttribute('disabled');
    }
  };
  // Возвращение координат
  var findAdress = function (coordinateElem) {
    return parseInt(coordinateElem.style.left, 10) + ' ' + parseInt(coordinateElem.style.top, 10);
  };

  // функция отрисовки меток
  var renderPin = function (pin) {
    var pinElement = window.const.pinTemplate.cloneNode(true);

    pinElement.querySelector('img').src = pin.author.avatar;
    pinElement.querySelector('img').alt = 'Какой-то автор';
    pinElement.style.left = pin.location.x + 'px';
    pinElement.style.top = pin.location.y + 'px';

    return pinElement;
  };

  var activateMap = function () {
    window.util.cancelShutdown([window.const.houseFeature]);
    window.util.cancelShutdown([window.const.formHeader]);
    window.util.cancelShutdown(window.const.mapFilters);
    window.util.cancelShutdown(window.const.formElements);

    window.const.mapList.classList.remove('map--faded');
    window.const.formMain.classList.remove('ad-form--disabled');
    window.const.mapListElement.appendChild(window.const.fragmentPin);
  };

  window.util = {
    getRandomInRange: getRandomInRange,
    getRandomElement: getRandomElement,
    mixArray: mixArray,
    makeElement: makeElement,
    addShutdown: addShutdown,
    findAdress: findAdress,
    cancelShutdown: cancelShutdown,
    renderPin: renderPin,
    activateMap: activateMap
  };
}());
