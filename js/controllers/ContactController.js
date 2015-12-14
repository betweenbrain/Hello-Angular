/**
 * File
 * Created    12/14/15 10:36 AM
 * Author     Matt Thomas | matt@betweenbrain.com | http://betweenbrain.com
 * Support    https://github.com/betweenbrain/
 * Copyright  Copyright (C) 2015 betweenbrain llc. All Rights Reserved.
 * License    GNU GPL v2 or later
 */

app.controller('ContactController', ['$scope', function ($scope) {

		$scope.firstName = '';
		$scope.lastName = '';

		$scope.submit = function ($firstName, $lastName) {
			$scope.submission = 'Hello ' + $firstName + ' ' + $lastName;
		}
	}]
);