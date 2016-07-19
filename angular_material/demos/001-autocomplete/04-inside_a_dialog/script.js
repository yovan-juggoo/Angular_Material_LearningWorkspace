(function () {
    'use strict';
    angular.module('myApp', ['ngMaterial']);

    angular.module('myApp')
        .controller('MainController', ['$mdDialog', MainController]);

    function MainController($mdDialog) {
        var vm = this;
        vm.openDialog = openDialog;

        function openDialog($event) {
            $mdDialog.show({
                controller: DialogController,
                controllerAs: 'vm',
                templateUrl: 'templates/state.tpl.html',
                parent: angular.element(document.body),
                targetEvent: $event,
                clickOutsideToClose: true
            });
        }

        function DialogController(StatesFactory, $q, $timeout, $mdDialog) {
            var vm = this;

            vm.states = StatesFactory.list();
            vm.querySearch = querySearch;
            vm.cancel = cancel;
            vm.finish = finish;

            function cancel($event) {
                console.log('The user cancelled the operation.');
                $mdDialog.cancel();
            }

            function finish($event) {
                console.log('The user finished the operation.');
                $mdDialog.hide();
            }

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

    }
})();