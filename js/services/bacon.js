/**
 * File
 * Created    12/11/15 10:53 AM
 * Author     Matt Thomas | matt@betweenbrain.com | http://betweenbrain.com
 * Support    https://github.com/betweenbrain/
 * Copyright  Copyright (C) 2015 betweenbrain llc. All Rights Reserved.
 * License    GNU GPL v2 or later
 */

app.factory('bacon', ['$http', function ($http) {
	return $http.get('https://baconipsum.com/api/?type=all-meat&paras=5&start-with-lorem=1')
		.success(function (data) {
			return data;
		})
		.error(function (err) {
			return err;
		});
}]);