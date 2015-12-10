/**
 * File
 * Created    12/10/15 2:11 PM
 * Author     Matt Thomas | matt@betweenbrain.com | http://betweenbrain.com
 * Support    https://github.com/betweenbrain/
 * Copyright  Copyright (C) 2015 betweenbrain llc. All Rights Reserved.
 * License    GNU GPL v2 or later
 */

app.controller('HomeController', ['$scope', function($scope) {
  $scope.title = 'Navbar example';
  $scope.copy = 'This example is a quick exercise to illustrate how the default, static and fixed to top navbar work. It includes the responsive CSS and HTML, so it also adapts to your viewport and device. To see the difference between static and fixed top navbars, just scroll.';
}]);