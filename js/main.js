'use strict';

// создаем фрагмент дома, который будет добавлять
var fragmentPin = document.createDocumentFragment();
for (var j = 0; j < window.advert.adverts.length; j++) {
  fragmentPin.appendChild(window.pin.renderPin(window.advert.adverts[j]));
}
