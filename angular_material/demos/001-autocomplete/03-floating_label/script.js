(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial', 'ngMessages']);

    angular.module('myApp')
        .controller('StatesController', ['StatesFactory', '$q', '$timeout', StatesController]);

    function StatesController(StatesFactory, $q, $timeout) {
        var vm = this;

        vm.states = StatesFactory.list();
        vm.querySearch = querySearch;


        function querySearch(query) {
            var results = query ? vm.states.filter(filterFn(query)) : vm.states;
            var deferred = $q.defer();
            $timeout(function () {
                deferred.resolve(results);
            }, Math.random * 1000, false);
            return deferred.promise;

        }

        function filterFn(query) {
            return function (state) {
                return (state.key.indexOf(angular.lowercase(query)) === 0);
            }
        }

    }

})();