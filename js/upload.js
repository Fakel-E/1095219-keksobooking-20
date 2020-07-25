'use strict';

(function () {
  var URL = 'https://javascript.pages.academy/keksobooking';
  var sendSuccess = document.querySelector('#success')
    .content
    .querySelector('.success');
  var sendError = document.querySelector('#error')
    .content
    .querySelector('.error');
  var mapListElement = document.querySelector('.map__pins');
  var STATUS_OK = 200;

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
      if (xhr.status === STATUS_OK) {
        var normalSend = sendSuccess.cloneNode(true);
        mapListElement.appendChild(normalSend);
        normalSend.addEventListener('click', function () {
          normalSend.remove();
        });
        document.addEventListener('keydown', function (evt) {
          if (evt.key === 'Escape') {
            evt.preventDefault();
            normalSend.remove();
          }
        });
      } else {
        var badSend = sendError.cloneNode(true);
        mapListElement.appendChild(badSend);
        badSend.addEventListener('click', function () {
          badSend.remove();
        });
        document.addEventListener('keydown', function (evt) {
          if (evt.key === 'Escape') {
            evt.preventDefault();
            badSend.remove();
          }
        });
      }
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
