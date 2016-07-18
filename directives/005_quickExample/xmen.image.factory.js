(function () {
    'use strict';
    angular.module('myApp')
        .factory('imageFactory', ['$http', ImageFactory]);

    function ImageFactory($http) {
        var url = 'images/'

        return {
            listFiles: listFiles
        };

        function listFiles() {
            return $http.get(url);
        };
    }
})();