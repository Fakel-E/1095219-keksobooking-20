'use strict';

// создаём массив объявлений с уникальными характеристиками
var adverts = [];

for (var i = 1; i <= window.const.NUMBER_OBJ; i++) {
  var locationX = window.util.getRandomInRange(window.const.Position.X_MIN, window.const.Position.X_MAX);
  var locationY = window.util.getRandomInRange(window.const.Position.Y_MIN, window.const.Position.Y_MAX);
  adverts.push({
    author: {
      avatar: 'img/avatars/user0' + i + '.png'
    },
    offer: {
      title: window.util.getRandomElement(window.const.TITLE_ARR),
      address: locationX + ', ' + locationY,
      price: window.util.getRandomInRange(window.const.Price.MIN, window.const.Price.MAX),
      type: window.util.getRandomElement(window.const.TYPE_ARR),
      rooms: window.util.getRandomInRange(window.const.Room.MIN, window.const.Room.MAX),
      guests: window.util.getRandomInRange(window.const.Guest.MIN, window.const.Guest.MAX),
      checkin: window.util.getRandomElement(window.const.CHECKIN_ARR),
      checkout: window.util.getRandomElement(window.const.CHECKOUT_ARR),
      features: window.util.mixArray(window.const.FEATURES_ARR),
      desccription: window.util.getRandomElement(window.const.DESCCRIPTION_ARR),
      photos: window.util.getRandomElement(window.const.PHOTOS_ARR),
    },
    location: {
      x: locationX, // х - ограничено размерами блока
      y: locationY //  y - от 130 до 630
    }
  });
}

// функция отрисовки объектов
var renderAdvert = function (advert) {
  var mapElement = window.const.cardTemplate.cloneNode(true);

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
    var featuresElement = window.util.makeElement('li', 'popup__feature');
    featuresElement.classList.add('popup__feature--' + advert.offer.features[k]);
    liElems.appendChild(featuresElement);
  }
  mapElement.querySelector('.popup__description').textContent = advert.offer.desccription;
  mapElement.querySelector('.popup__photo').src = advert.offer.photos;
  return mapElement;
};

// создаем фрагмент дома, который будет добавлять

for (var j = 0; j < adverts.length; j++) {
  window.const.fragmentPin.appendChild(window.util.renderPin(adverts[j]));
}

var filter = document.querySelector('.map__filters-container');
window.const.mapList.insertBefore(renderAdvert(adverts[0]), filter);
