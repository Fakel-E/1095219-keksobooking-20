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
    var removeElem = function (elem) {
      elem.remove();
    };

    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
      if (xhr.status === STATUS_OK) {
        var normalSend = sendSuccess.cloneNode(true);
        mapListElement.appendChild(normalSend);
        normalSend.addEventListener('click', function () {
          removeElem(normalSend);
        });
        document.addEventListener('keydown', function (evt) {
          if (evt.key === 'Escape') {
            evt.preventDefault();
            removeElem(normalSend);
          }
        });
      } else {
        var badSend = sendError.cloneNode(true);
        mapListElement.appendChild(badSend);
        badSend.addEventListener('click', function () {
          removeElem(badSend);
        });
        document.addEventListener('keydown', function (evt) {
          if (evt.key === 'Escape') {
            evt.preventDefault();
            removeElem(badSend);
          }
        });
      }
    });

    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
