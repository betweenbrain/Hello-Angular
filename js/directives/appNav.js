/**
 * File
 * Created    12/10/15 2:26 PM
 * Author     Matt Thomas | matt@betweenbrain.com | http://betweenbrain.com
 * Support    https://github.com/betweenbrain/
 * Copyright  Copyright (C) 2015 betweenbrain llc. All Rights Reserved.
 * License    GNU GPL v2 or later
 */

app.directive('appNav', function() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'js/directives/appNav.html',
    link: function(scope, element, attrs) {
      scope.title = 'Hello Angular'
    }
  };
});