'use strict';

(function () {
  var mainButton = document.querySelector('.map__pin--main');

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

      if (startCoords.x > 100 && startCoords.x <= 1310 && startCoords.y > 0 && startCoords.y <= 704) {
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
}());


