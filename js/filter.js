'use strict';

(function () {
  var mapFilters = document.querySelector('.map__filters');
  var house = mapFilters.querySelector('#housing-type');

  var houseType = function (pins) {
    var sameHouseType = pins.filter(function (it) {
      return it.offer.type === house.value;
    });
    return sameHouseType;
  };

  window.filter = {
    houseType: houseType
  };
})();
