angular.module('portfolio', ['ui.router'])

	.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

		$urlRouterProvider.otherwise('/welcome');

		$stateProvider
			.state('welcome', {
				url: '/welcome',
				templateUrl: 'js/landing/landing.html',
				controller: 'landingCtrl'
			})

			.state('admin', {
				url: '/admin',
				templateUrl: 'js/admin/admin.html',
				controller: 'adminCtrl'
			})
	});
