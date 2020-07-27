'use strict';

(function () {

  // создаем переменные с шаблоном, которые копировать
  var cardTemplate = document.querySelector('#card') // объявление
      .content
      .querySelector('.map__card');

  var imgTemplate = document.querySelector('#popup__img') // фотография
      .content
      .querySelector('.popup__photo');

  // функция отрисовки объектов
  var renderCard = function (advert) {
    var popup = cardTemplate.cloneNode(true);
    var imgMain = popup.querySelector('.popup__photos');
    var mapCard = document.querySelector('.map__card');
    if (mapCard) {
      mapCard.remove();
    }
    popup.querySelector('.popup__avatar').src = advert.author.avatar;
    popup.querySelector('.popup__title').alt = advert.offer.title;
    popup.querySelector('.popup__text--address').textContent = advert.offer.address;
    popup.querySelector('.popup__text--price').textContent = advert.offer.price + '₽/ночь';
    if (advert.offer.type === 'palace') {
      popup.querySelector('.popup__type').textContent = 'Дворец';
    } else if (advert.offer.type === 'flat') {
      popup.querySelector('.popup__type').textContent = 'Квартира';
    } else if (advert.offer.type === 'bungalo') {
      popup.querySelector('.popup__type').textContent = 'Бунгало';
    } else if (advert.offer.type === 'bungalo') {
      popup.querySelector('.popup__type').textContent = 'Дом';
    } // перевести условия в функцию
    popup.querySelector('.popup__text--capacity').textContent = advert.offer.rooms + ' комнаты ' + 'для ' + advert.offer.guests + ' гостей';
    popup.querySelector('.popup__text--time').textContent = 'Заезд после ' + advert.offer.checkin + ', и выезд до ' + advert.offer.checkout;
    var liElems = popup.querySelector('.popup__features');
    var featureMass = popup.querySelectorAll('.popup__feature');
    for (var p = 0; p < featureMass.length; p++) {
      featureMass[p].parentNode.removeChild(featureMass[p]);
    }
    for (var k = 0; k < advert.offer.features.length; k++) {
      var featuresElement = window.util.makeElement('li', 'popup__feature');
      featuresElement.classList.add('popup__feature--' + advert.offer.features[k]);
      liElems.appendChild(featuresElement);
    }
    popup.querySelector('.popup__description').textContent = advert.offer.desccription;

    for (var i = 0; i < advert.offer.photos.length; i++) {
      var imgElement = imgTemplate.cloneNode(true);
      imgElement.src = advert.offer.photos[i];
      imgMain.appendChild(imgElement);
    }

    var closePopup = popup.querySelector('.popup__close');
    closePopup.addEventListener('click', function () {
      popup.remove();
    });
    document.addEventListener('keydown', function (evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        popup.remove();
      }
    });
    return popup;
  };

  window.advert = {
    renderCard: renderCard
  };
})();
