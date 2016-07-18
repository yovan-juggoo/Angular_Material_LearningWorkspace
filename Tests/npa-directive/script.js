(function () {
    'use strict';

    angular.module('myApp', ['ngMaterial'])
        .controller('MainController', MainController)
        .factory('localityService', ['$http', localityService])
        .directive('arkNpa', ArkNpa);

    function localityService($http) {

        var resourceUrl = '127.0.0.1:9060/api/localities/';

        return {
            list: list,
            getById: getById,
            update: update,
            getLike: getLike
        };

        function list() {
            return $http.get(resourceUrl);
        }

        function getById(id, select) {
            var query = resourceUrl + id;

            if (select)
                query += '/?select=' + select;

            return $http.get(query);
        }

        function update(entity) {
            if (entity.id) {
                return $http.put(resourceUrl + entity.id, entity);
            } else {
                return $http.post(resourceUrl, entity);
            }
        }

        function getLike(searchItems) {
            var query = resourceUrl + '?';
            var queryString = '';
            for (var x = 0; x < searchItems.length; x++) {
                queryString += searchItems[x].key + '=~' + searchItems[x].value;
                if (x !== searchItems.length - 1)
                    queryString += '&';
            }
            query += queryString;
            return $http.get(query);
        };

    }

    function MainController() {
        var vm = this;
    }

    function ArkNpa() {
        return {
            template: 'Name: Yovan Juggoo'
        };
    }

})();