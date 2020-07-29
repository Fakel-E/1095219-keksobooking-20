'use strict';

(function () {
  var mapFilters = document.querySelector('.map__filters');
  var house = mapFilters.querySelector('#housing-type');
  var price = mapFilters.querySelector('#housing-price');
  var guest = mapFilters.querySelector('#housing-guests');
  var room = mapFilters.querySelector('#housing-rooms');

  var houseType = function (pins) {
    var sameHouseType = pins.filter(function (it) {
      return it.offer.type === house.value;
    });
    return sameHouseType;
  };

  var priceType = function (pins) {
    var PriceLevel = {
      LOW: 9999,
      MIDDLE: 49999,
      HIGH: 50000
    };
    var samePriceType = pins.filter(function (it) {
      if (it.offer.price < PriceLevel.LOW) {

        return it.offer.price < PriceLevel.LOW;
      } else if (PriceLevel.LOW < it.offer.price && it.offer.price <= PriceLevel.MIDDLE) {

        return it.offer.price > PriceLevel.LOW && it.offer.price <= PriceLevel.MIDDLE;
      } /* else if (it.offer.price >= PriceLevel.HIGH) {
        console.log('3');
        return it.offer.price >= PriceLevel.HIGH;
      }*/
      return it.offer.price === price.value;
    });

    return samePriceType;
  };

  var guestType = function (pins) {
    var sameGuestType = pins.filter(function (it) {
      return it.offer.guests === Number(guest.value);
    });
    return sameGuestType;
  };

  var roomType = function (pins) {
    var sameRoomType = pins.filter(function (it) {
      return it.offer.rooms === Number(room.value);
    });
    return sameRoomType;
  };

  window.filter = {
    houseType: houseType,
    priceType: priceType,
    guestType: guestType,
    roomType: roomType

  };
})();
