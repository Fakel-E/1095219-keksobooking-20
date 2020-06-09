'use strict'

document.querySelector('.map').classList.remove('map--faded');

var author = {
  avatar: url(img/avatars/user{{xx}}.png),
  //{{xx}} это число от 1 до 8 с ведущим нулём. Например, 01, 02 и т. д. Адреса изображений не повторяются
};

var offer = {
  title: "строка, заголовок предложения",
  address: "{{location.x}}, {{location.y}}" //например, "600, 350"
  price: //число, стоимость,
  type: palace, flat, house или bungalo //строка с одним из четырёх фиксированных значений:
  rooms: //число, количество комнат
  guests: //число, количество гостей, которое можно разместить
  checkin: //строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00,
  checkout: //строка с одним из трёх фиксированных значений: 12:00, 13:00 или 14:00
  features: //массив строк случайной длины из ниже предложенных: "wifi", "dishwasher", "parking", "washer", "elevator", "conditioner",
  description: //строка с описанием,
  photos: //массив строк случайной длины, содержащий адреса фотографий "http://o0.github.io/assets/images/tokyo/hotel1.jpg", "http://o0.github.io/assets/images/tokyo/hotel2.jpg", "http://o0.github.io/assets/images/tokyo/hotel3.jpg"
};

var location = {
  x: //случайное число, координата x метки на карте. Значение ограничено размерами блока, в котором перетаскивается метка.
  y: //случайное число, координата y метки на карте от 130 до 630.
};

var getRandomInRange = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};*/
