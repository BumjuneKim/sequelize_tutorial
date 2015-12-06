'use strict';
var _s = require('underscore.string');

exports.handler = function(code, req, res, next) {
  var returnObj;

  if (errorCodes[code] && req.error && req.error.params) {
    errorCodes[code].userMessage = _s.vsprintf(errorCodes[code].userMessage, req.error.params);
  }

  if (typeof code === 'number') {
    returnObj = errorCodes[code];
    if (returnObj) {
      return res.status(returnObj.status).json(returnObj);
    } else {
      returnObj = {status: 500, userMessage: 'Not undefined error occurred(code: ' + code + ')'};
      return res.status(500).json(returnObj);
    }
  } else {
    var strCode = code.toString();

    returnObj = {status: 500, userMessage: 'Uncaught error occurred(code: ' + strCode + ')'};
    return res.status(returnObj.status).json(returnObj);
  }
};

var errorCodes = {
  1000: {status: 500, userMessage: '출판사 동륵시 에러 발생'},
  1001: {status: 500, userMessage: '출판사 정보를 가져올 수 없습니다'},
  1002: {status: 500, userMessage: '출판사 정보를 수정할 수 없습니다'},
  1003: {status: 500, userMessage: '출판사를 삭제할 수 없습니다'}

};

exports.errorCodes = errorCodes;
