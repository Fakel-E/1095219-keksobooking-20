'use strict';

document.querySelector('.map').classList.remove('map--faded');

var NUMBER_OBJ = 8;
var IMG_AVATAR = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png'
];
var TITLE_ARR = ['Заголовок1', 'Заголовок2', 'Заголовок3'];
var ADDRESS_ARR = ['адрес 300', 'адрес 400', 'адрес 600'];
var PRICE_ARR = ['800 руб', '1000 руб', '2000 руб'];
var TYPE_ARR = ['palace', 'flat', 'house', 'bungalo'];
var ROOMS_ARR = ['1', '2', '3'];
var GUESTS_ARR = ['1', '2', '3'];
var CHECKIN_ARR = ['12:00', '13:00', '14:00'];
var CHECKOUT_ARR = ['12:00', '13:00', '14:00'];
var FEATURES_ARR = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
var DESCCRIPTION_ARR = ['описание1', 'описание2', 'описание3'];
var PHOTOS_ARR = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

// создаем переменную с элементом, куда копировать
var mapListElement = document.querySelector('.map__pins');
// создаем переменную с шаблоном, который копировать
/* var cardTemplate = document.querySelector('#card')
    .content
    .querySelector('.map__card');*/
var pinTemplate = document.querySelector('#pin')
    .content
    .querySelector('.map__pin');

// функиция вызова рандомных значений
var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// создаём массив объявлений с уникальными характеристиками
var adverts = [];

for (var i = 0; i < NUMBER_OBJ; i++) {
  adverts.push({
    author: {
      avatar: IMG_AVATAR[getRandomInRange(0, IMG_AVATAR.length - 1)]
    },
    offer: {
      title: TITLE_ARR[getRandomInRange(0, TITLE_ARR.length - 1)],
      address: ADDRESS_ARR[getRandomInRange(0, ADDRESS_ARR.length - 1)],
      price: PRICE_ARR[getRandomInRange(0, PRICE_ARR.length - 1)],
      type: TYPE_ARR[getRandomInRange(0, TYPE_ARR.length - 1)],
      rooms: ROOMS_ARR[getRandomInRange(0, ROOMS_ARR.length - 1)],
      guests: GUESTS_ARR[getRandomInRange(0, GUESTS_ARR.length - 1)],
      checkin: CHECKIN_ARR[getRandomInRange(0, CHECKIN_ARR.length - 1)],
      checkout: CHECKOUT_ARR[getRandomInRange(0, CHECKOUT_ARR.length - 1)],
      features: FEATURES_ARR[getRandomInRange(0, FEATURES_ARR.length - 1)],
      desccription: DESCCRIPTION_ARR[getRandomInRange(0, DESCCRIPTION_ARR.length - 1)],
      photos: PHOTOS_ARR[getRandomInRange(0, PHOTOS_ARR.length - 1)],
    },
    location: {
      x: getRandomInRange(0, 1200), // х - ограничено размерами блока
      y: getRandomInRange(130, 630) //  y - от 130 до 630
    }
  });
}

// функция отрисовки меток
var renderPin = function (advert) {
  var pinElement = pinTemplate.cloneNode(true);

  pinElement.querySelector('img').src = advert.offer.photos;
  pinElement.querySelector('img').alt = advert.offer.title;
  pinElement.style.left = advert.location.x + 'px';
  pinElement.style.top = advert.location.y + 'px';

  return pinElement;
};

// создаем фрагмент дома, который будет добавлять
var fragment = document.createDocumentFragment();
for (var j = 0; j < adverts.length; j++) {
  fragment.appendChild(renderPin(adverts[j]));
}
mapListElement.appendChild(fragment);
