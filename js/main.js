'use strict';

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

// создаем переменную с элементом, куда копировать
var mapListElement = document.querySelector('.map__pins');
var mapList = document.querySelector('.map');
// создаем переменные с шаблоном, которые копировать
var pinTemplate = document.querySelector('#pin') // метка
    .content
    .querySelector('.map__pin');
var cardTemplate = document.querySelector('#card') // объявление
    .content
    .querySelector('.map__card');

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
  massive.splice(INDEX_MIN, getRandomInRange(INDEX_MIN, massive.length - 1));
  return massive;
};

// создаём массив объявлений с уникальными характеристиками
var adverts = [];

for (var i = 1; i <= NUMBER_OBJ; i++) {
  var locationX = getRandomInRange(Position.X_MIN, Position.X_MAX);
  var locationY = getRandomInRange(Position.Y_MIN, Position.Y_MAX);
  adverts.push({
    author: {
      avatar: 'img/avatars/user0' + i + '.png'
    },
    offer: {
      title: getRandomElement(TITLE_ARR),
      address: locationX + ', ' + locationY,
      price: getRandomInRange(Price.MIN, Price.MAX),
      type: getRandomElement(TYPE_ARR),
      rooms: getRandomInRange(Room.MIN, Room.MAX),
      guests: getRandomInRange(Guest.MIN, Guest.MAX),
      checkin: getRandomElement(CHECKIN_ARR),
      checkout: getRandomElement(CHECKOUT_ARR),
      features: mixArray(FEATURES_ARR),
      desccription: getRandomElement(DESCCRIPTION_ARR),
      photos: getRandomElement(PHOTOS_ARR),
    },
    location: {
      x: locationX, // х - ограничено размерами блока
      y: locationY //  y - от 130 до 630
    }
  });
}

// функция отрисовки меток
var renderPin = function (pin) {
  var pinElement = pinTemplate.cloneNode(true);

  pinElement.querySelector('img').src = pin.author.avatar;
  pinElement.querySelector('img').alt = 'Какой-то автор';
  pinElement.style.left = pin.location.x + 'px';
  pinElement.style.top = pin.location.y + 'px';

  return pinElement;
};
// функция создания элементов
var makeElement = function (tagName, className) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  return element;
};

// функция отрисовки объектов
var renderAdvert = function (advert) {
  var mapElement = cardTemplate.cloneNode(true);

  mapElement.querySelector('.popup__avatar').src = advert.author.avatar;
  mapElement.querySelector('.popup__title').alt = advert.offer.title;
  mapElement.querySelector('.popup__text--address').textContent = advert.offer.address;
  mapElement.querySelector('.popup__text--price').textContent = advert.offer.price + '₽/ночь';
  if (advert.offer.type === 'palace') {
    mapElement.querySelector('.popup__type').textContent = 'Дворец';
  } else if (advert.offer.type === 'flat') {
    mapElement.querySelector('.popup__type').textContent = 'Квартира';
  } else if (advert.offer.type === 'bungalo') {
    mapElement.querySelector('.popup__type').textContent = 'Бунгало';
  } else if (advert.offer.type === 'bungalo') {
    mapElement.querySelector('.popup__type').textContent = 'Дом';
  } // перевести условия в функцию
  mapElement.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнаты ' + 'для ' + advert.offer.guests + ' гостей';
  mapElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + advert.offer.checkin + ', и выезд до ' + advert.offer.checkout;
  var liElems = mapElement.querySelector('.popup__features');
  var featureMass = mapElement.querySelectorAll('.popup__feature');
  for (var p = 0; p < featureMass.length; p++) {
    featureMass[p].parentNode.removeChild(featureMass[p]);
  }
  for (var k = 0; k < advert.offer.features.length; k++) {
    var featuresElement = makeElement('li', 'popup__feature');
    featuresElement.classList.add('popup__feature--' + advert.offer.features[k]);
    liElems.appendChild(featuresElement);
  }
  mapElement.querySelector('.popup__description').textContent = advert.offer.desccription;
  mapElement.querySelector('.popup__photo').src = advert.offer.photos;
  return mapElement;
};

// создаем фрагмент дома, который будет добавлять
var fragmentPin = document.createDocumentFragment();
for (var j = 0; j < adverts.length; j++) {
  fragmentPin.appendChild(renderPin(adverts[j]));
}

var filter = document.querySelector('.map__filters-container');
mapList.insertBefore(renderAdvert(adverts[0]), filter);

// Находим элементы формы
var mapFilters = document.querySelectorAll('.map__filter');
var formHeader = document.querySelector('.ad-form-header');
var formElements = document.querySelectorAll('.ad-form__element');
var houseFeature = document.querySelector('#housing-features');
var formMain = document.querySelector('.ad-form');
// Добавляем disabled на все элементы формы
var addShutdown = function (arr) {
  for (var w = 0; w < arr.length; w++) {
    arr[w].setAttribute('disabled', 'disabled');
  }
};
addShutdown([houseFeature]);
addShutdown([formHeader]);
addShutdown(mapFilters);
addShutdown(formElements);
// ! завершили добавление disabled
// Функция активации карты
var activateMap = function () {
  houseFeature.removeAttribute('disabled');
  formHeader.removeAttribute('disabled');
  for (var e = 0; e < mapFilters.length; e++) {
    mapFilters[e].removeAttribute('disabled');
  }
  for (var r = 0; r < formElements.length; r++) {
    formElements[r].removeAttribute('disabled');
  }
  mapList.classList.remove('map--faded');
  formMain.classList.remove('ad-form--disabled');
  mapListElement.appendChild(fragmentPin);
};

var mainButton = document.querySelector('.map__pin--main');
var formAddress = document.querySelector('#address');

var findAdress = function (coordinateElem) {
  return parseInt(coordinateElem.style.left, 10) + ' ' + parseInt(coordinateElem.style.top, 10);
};
formAddress.value = findAdress(mainButton);
// Активируем карту
mainButton.addEventListener('mousedown', function (evt) {
  // открываем карту по клику
  if (evt.which === 1) {
    activateMap();
  }
});

mainButton.addEventListener('keydown', function (evt) {
  // открытие по Enter
  if (evt.key === 'Enter') {
    activateMap();
  }
});

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
  if (roomsCount === 1) {
    selectGuest.value = selectRoom.value;
  } else if (roomsCount === 2 && roomsCount < guestCount) {
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
