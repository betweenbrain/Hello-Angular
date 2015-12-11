/**
 * File
 * Created    12/10/15 3:11 PM
 * Author     Matt Thomas | matt@betweenbrain.com | http://betweenbrain.com
 * Support    https://github.com/betweenbrain/
 * Copyright  Copyright (C) 2015 betweenbrain llc. All Rights Reserved.
 * License    GNU GPL v2 or later
 */

app.controller('AboutController', ['$scope', 'bacon', function ($scope, bacon) {
	bacon.success(function (data) {
		$scope.grafs = data;
	});
}]);