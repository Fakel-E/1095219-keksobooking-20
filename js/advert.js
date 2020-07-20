'use strict';

// создаем переменные с шаблоном, которые копировать
var cardTemplate = document.querySelector('#card') // объявление
    .content
    .querySelector('.map__card');

var imgTemplate = document.querySelector('#popup__img') // фотография
    .content
    .querySelector('.popup__photo');

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
    var featuresElement = window.util.makeElement('li', 'popup__feature');
    featuresElement.classList.add('popup__feature--' + advert.offer.features[k]);
    liElems.appendChild(featuresElement);
  }
  mapElement.querySelector('.popup__description').textContent = advert.offer.desccription;
  // ! здесь проблема
  for (var i = 0; i < advert.offer.photos.length; i++) {
    var imgElement = imgTemplate.cloneNode(true);
    imgElement.src = advert.offer.photos[i];
    mapElement.appendChild(imgElement);
  }
  return mapElement;
};

window.advert = {
  renderAdvert: renderAdvert
};
