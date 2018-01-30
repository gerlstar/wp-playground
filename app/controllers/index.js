//entry point for all the controllers
'use strict';

var angular = require('angular');

angular.module('dashboard')
	.controller('dashboardController', require('./dashboard.controller'));

