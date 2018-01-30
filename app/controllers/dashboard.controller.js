'use strict';

DashboardController.$inject = ['GithubStatusService'];
function DashboardController(gh) {
	// cosole.clear();
	console.info('dashboardController');

    var _this = this;
    _this.github = '';
    console.info('444');
    // gh.getStatus().success(function(status) {
    //     _this.github = status;
    // });
}

module.exports = DashboardController;

// angular.module('dashboard').controller('dashboardController', DashboardController);