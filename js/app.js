/**
 * File
 * Created    12/10/15 10:36 AM
 * Author     Matt Thomas | matt@betweenbrain.com | http://betweenbrain.com
 * Support    https://github.com/betweenbrain/
 * Copyright  Copyright (C) 2015 betweenbrain llc. All Rights Reserved.
 * License    GNU GPL v2 or later
 */

alert('The page just loaded.');

var app = angular.module('helloApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			controller : 'HomeController',
			templateUrl: 'views/home.html'
		})
		.when('/about', {
			controller : 'AboutController',
			templateUrl: 'views/about.html'
		})
		.otherwise({
			redirectTo: '/'
		});
});