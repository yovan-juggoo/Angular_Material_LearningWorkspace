(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial']);

    angular.module('myApp')
        .controller('UserController', ['$timeout', '$q', 'UserFactory', UserController]);

    function UserController($timeout, $q, UserFactory) {
        var vm = this;

        vm.simulateQuery = false;
        vm.isDisabled = false;
        vm.isRequired = false;
        vm.noCache = false;
        vm.delay = 0;

        vm.users = UserFactory.list();
        vm.selectedItemChange = selectedItemChange;
        vm.querySearch = querySearch;
        vm.addUser = addUser;
        vm.capitalize = capitalize;
        vm.update = update;

        function capitalize(user) {
            return user ? angular.uppercase(user.name) + ' - ' + user.email : null;
        }

        function selectedItemChange(item) {
            console.log('Item changed to: ', item);
        }

        function searchTextChange(text) {
            console.log('Text changed to: ', text);
        }

        function addUser() {
            console.log('You will be redirected shortly to the "Create New User page"!');
        }

        function querySearch(query) {
            var results = query ? vm.users.filter(createUserFilter(query)) : vm.users;
            var deferred = null;
            if (vm.simulateQuery) {
                deferred = $q.defer();
                $timeout(function () {
                    deferred.resolve(results);
                }, Math.random() * 1000, false);
                return deferred.promise;
            } else
                return results;
        }

        function createUserFilter(query) {
            var lowercaseQuery = angular.lowercase(query);
            return function (user) {
                return (user.email.indexOf(lowercaseQuery) > -1 || user.name.indexOf(lowercaseQuery) > -1);
            };
        }

        function update() {
            console.log('The data will be updated');
        }

    }

})();