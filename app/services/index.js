//entry point for all the services
'use strict';

var angular = require('angular');

angular.module('dashboard')
	.service('GithubStatusService', require('./github-status.service'));

