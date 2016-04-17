angular.module('portfolio', ['ui.router'])

	.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('/', {
				url: '/',
				templateUrl: 'js/landing/landing.html',
				controller: 'landingCtrl'
			})

			.state('admin', {
				url: '/admin',
				templateUrl: 'js/admin/admin.html',
				controller: 'adminCtrl'
			})
	});
