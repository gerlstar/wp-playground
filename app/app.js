
require('../test.scss');
require('../_index.css');

require('./assets/cutecat.gif');

angular.module('dashboard', []);

require('./directives');
require('./services');
require('./controllers');

// console.log('hi');
if (module.hot){
	module.hot.accept('./controllers/dashboard.controller.js', function(){
		console.info('editing dashboard');

	})
}