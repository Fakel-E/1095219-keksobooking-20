'use strict';

(function () {

  var mainButton = document.querySelector('.map__pin--main');

  var PinSize = {
    X_HALF: 32.5,
    Y: 65
  };

  var StopeMove = {
    X_MIN: 0,
    X_MAX: 1200,
    Y_MIN: 130,
    Y_MAX: 630
  };

  mainButton.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var formAddress = document.querySelector('#address');
    formAddress.value = window.util.findAdress(mainButton);

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var deltaMove = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      mainButton.style.top = (mainButton.offsetTop - deltaMove.y) + 'px';
      mainButton.style.left = (mainButton.offsetLeft - deltaMove.x) + 'px';

      var postionLeft = parseInt(mainButton.style.left, 10);
      var positionTop = parseInt(mainButton.style.top, 10);

      if (postionLeft <= StopeMove.X_MIN - PinSize.X_HALF) {
        mainButton.style.left = StopeMove.X_MIN - PinSize.X_HALF + 'px';
      } else if (postionLeft >= StopeMove.X_MAX - PinSize.X_HALF) {
        mainButton.style.left = StopeMove.X_MAX - PinSize.X_HALF + 'px';
      }
      if (positionTop <= StopeMove.Y_MIN - PinSize.Y) {
        mainButton.style.top = StopeMove.Y_MIN - PinSize.Y + 'px';

      } else if (positionTop >= StopeMove.Y_MAX) {
        mainButton.style.top = StopeMove.Y_MAX + 'px';
      }

      formAddress.value = window.util.findAdress(mainButton);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

})();

