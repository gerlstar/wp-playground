//entry point for all the directives
'use strict';

var angular = require('angular');

angular.module('dashboard')
.directive('yepNope', require('./yep-nope.directive'))
.directive('ciSetAriaChecked', require('./ci-set-aria-checked.directive'));
