'use strict';

var NUMBER_OBJ = 8;
var NUMBER_X_MIN = 100;
var NUMBER_X_MAX = 1100;
var NUMBER_Y_MIN = 130;
var NUMBER_Y_MAX = 630;
var TITLE_ARR = ['Заголовок1', 'Заголовок2', 'Заголовок3'];
var PRICE_MIN = 0;
var PRICE_MAX = 1000000;
var TYPE_ARR = ['palace', 'flat', 'house', 'bungalo'];
var ROOM_GUEST_MIN = 1;
var ROOM_GUEST_MAX = 3;
var CHECKIN_ARR = ['12:00', '13:00', '14:00'];
var CHECKOUT_ARR = ['12:00', '13:00', '14:00'];
var FEATURES_ARR = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var INDEX_MIN = 0;
var DESCCRIPTION_ARR = ['описание1', 'описание2', 'описание3'];
var PHOTOS_ARR = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

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
// функция рандомной сортировки массива
var mixArray = function (massive) {
  for (var i = massive.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = massive[i];
    massive[i] = massive[j];
    massive[j] = temp;
  }
  return massive;
};
// функция изменения массива
var getRandomArr = function (arr) {
  mixArray(arr);
  return arr.splice(getRandomInRange(INDEX_MIN, arr.length), getRandomInRange(INDEX_MIN, arr.length - 1));
};

// создаём массив объявлений с уникальными характеристиками
var adverts = [];

for (var i = 1; i <= NUMBER_OBJ; i++) {
  var locationX = getRandomInRange(NUMBER_X_MIN, NUMBER_X_MAX);
  var locationY = getRandomInRange(NUMBER_Y_MIN, NUMBER_Y_MAX);
  adverts.push({
    author: {
      avatar: 'img/avatars/user0' + i + '.png'
    },
    offer: {
      title: getRandomElement(TITLE_ARR),
      address: locationX + ', ' + locationY,
      price: getRandomInRange(PRICE_MIN, PRICE_MAX),
      type: getRandomElement(TYPE_ARR),
      rooms: getRandomInRange(ROOM_GUEST_MIN, ROOM_GUEST_MAX),
      guests: getRandomInRange(ROOM_GUEST_MIN, ROOM_GUEST_MAX),
      checkin: getRandomElement(CHECKIN_ARR),
      checkout: getRandomElement(CHECKOUT_ARR),
      features: getRandomArr(FEATURES_ARR),
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
    if (advert.offer.features[k] === 'wifi') {
      featuresElement.classList.add('popup__feature--wifi');
    } else if (advert.offer.features[k] === 'dishwasher') {
      featuresElement.classList.add('popup__feature--dishwasher');
    } else if (advert.offer.features[k] === 'parking') {
      featuresElement.classList.add('popup__feature--parking');
    } else if (advert.offer.features[k] === 'washer') {
      featuresElement.classList.add('popup__feature--washer');
    } else if (advert.offer.features[k] === 'elevator') {
      featuresElement.classList.add('popup__feature--elevator');
    } else if (advert.offer.features[k] === 'conditioner') {
      featuresElement.classList.add('popup__feature--conditioner');
    }
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
mapListElement.appendChild(fragmentPin);
// создаем фрагмент дома, который будет добавлять
var filter = document.querySelector('.map__filters-container');
mapList.insertBefore(renderAdvert(adverts[0]), filter);

// открываем карту
mapList.classList.remove('map--faded');
