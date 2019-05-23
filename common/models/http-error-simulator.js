"use strict";

module.exports = HttpErrorSimulator => {
  function generalErrorGenerator({ errorCode, callback }) {
    const errorMessage = `Simulated ${errorCode} error`;

    const error = new Error(errorMessage);
    error.status = errorCode;

    callback(error, null);
  }

  HttpErrorSimulator.httpGetError = (errorCode, callback) => {
    generalErrorGenerator({ errorCode, callback });
  };

  HttpErrorSimulator.httpPostError = (errorCode, body, callback) => {
    generalErrorGenerator({ errorCode, callback });
  };
};
