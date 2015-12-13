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
  1003: {status: 500, userMessage: '출판사를 삭제할 수 없습니다'},
  1004: {status: 500, userMessage: '책 등록시 에러가 발생했습니다.'},
  1005: {status: 500, userMessage: '책 목록을 가져올수 없습니다'},
  1006: {status: 500, userMessage: '유저 등록할 수 없습니다'},
  1007: {status: 500, userMessage: '유저를 가져올 수 없습니다'},
  1008: {status: 500, userMessage: '대여 히스토리를 가져올 수 없습니다'},
  1009: {status: 500, userMessage: '대여도중 문제가 발생했습니다'}

};

exports.errorCodes = errorCodes;
