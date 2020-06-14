'use strict';

var NUMBER_OBJ = 8;
var NUMBER_X = 100;
var NUMBER_XX = 1100;
var NUMBER_Y = 130;
var NUMBER_YY = 630;
var TITLE_ARR = ['Заголовок1', 'Заголовок2', 'Заголовок3'];
var PRICE_ARR = ['800', '1000', '2000'];
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
var mapList = document.querySelector('.map');
// создаем переменные с шаблоном, которые копировать

var pinTemplate = document.querySelector('#pin') // метка
    .content
    .querySelector('.map__pin');

// функиция вызова рандомных значений
var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
// функиция вызова рандомных елементов
var getRandomElement = function (array) {
  return array[[getRandomInRange(0, array.length - 1)]];
};

// создаём массив объявлений с уникальными характеристиками
var adverts = [];

for (var i = 1; i <= NUMBER_OBJ; i++) {
  var locationX = getRandomInRange(NUMBER_X, NUMBER_XX);
  var locationY = getRandomInRange(NUMBER_Y, NUMBER_YY);
  adverts.push({
    author: {
      avatar: 'img/avatars/user0' + i + '.png'
    },
    offer: {
      title: getRandomElement(TITLE_ARR),
      address: locationX + ', ' + locationY,
      price: getRandomElement(PRICE_ARR),
      type: getRandomElement(TYPE_ARR),
      rooms: getRandomElement(ROOMS_ARR),
      guests: getRandomElement(GUESTS_ARR),
      checkin: getRandomElement(CHECKIN_ARR),
      checkout: getRandomElement(CHECKOUT_ARR),
      features: getRandomElement(FEATURES_ARR),
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

  pinElement.querySelector('img').src = pin.offer.photos;
  pinElement.querySelector('img').alt = pin.offer.title;
  pinElement.style.left = pin.location.x + 'px';
  pinElement.style.top = pin.location.y + 'px';

  return pinElement;
};

// создаем фрагмент дома, который будет добавлять
var fragmentPin = document.createDocumentFragment();
for (var j = 0; j < adverts.length; j++) {
  fragmentPin.appendChild(renderPin(adverts[j]));
}
mapListElement.appendChild(fragmentPin);

mapList.classList.remove('map--faded');


