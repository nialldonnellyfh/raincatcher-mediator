'use strict';

var mediator = require('./mediator');

angular.module('wfm.core.mediator', ['ng'])

.factory('mediator', function mediatorService($log) {
  return mediator;
});

module.exports = 'wfm.core.mediator';